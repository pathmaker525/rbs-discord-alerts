import { DocumentReference } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { BONDS_SUBGRAPH_URL, ERC20_DAI, ERC20_OHM_V2, OPERATOR_CONTRACT, RBS_SUBGRAPH_URL } from "../constants";
import { getRoleMentions, sendAlert } from "../discord";
import {
  MarketClosedEvent,
  MarketClosedEventsDocument,
  MarketCreatedEvent,
  MarketCreatedEventsDocument,
} from "../graphql/bondMarket";
import {
  PriceEvent,
  RangeSnapshot,
  RangeSnapshotSinceBlockDocument,
  RbsPriceEventsDocument,
} from "../graphql/rangeSnapshot";
import { getEtherscanTransactionUrl } from "../helpers/contractHelper";
import { formatCurrency, formatNumber } from "../helpers/numberHelper";
import { isBytesEqual, toUnorderedList } from "../helpers/stringHelper";

const FUNCTION_KEY = "checkBondMarkets";
const LATEST_BLOCK = "latestBlock";

const filterPriceEvents = (events: PriceEvent[], block: number, type?: string): PriceEvent[] => {
  const filteredByBlock = events.filter(priceEvent => priceEvent.block == block);

  if (!type) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(priceEvent => priceEvent.type == type);
};

const filterCreatedEvents = (events: MarketCreatedEvent[], block: number, marketId?: number): MarketCreatedEvent[] => {
  const filteredByBlock = events.filter(createdEvent => createdEvent.block == block);

  if (!marketId) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(createdEvent => createdEvent.marketId == marketId);
};

const filterClosedEvents = (events: MarketClosedEvent[], block: number, marketId?: number): MarketClosedEvent[] => {
  const filteredByBlock = events.filter(closedEvent => closedEvent.block == block);

  if (!marketId) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(createdEvent => createdEvent.marketId == marketId);
};

const pushError = (error: string, errors: string[]): void => {
  console.error(error);
  errors.push(error);
};

/**
 * Performs check when a CushionUp event is received:
 * - A bond market id should be available
 * - Should have a corresponding market created event (only 1)
 * - The owner of the bond market should be the treasury operator contract
 * - Upper cushion: the initial price (in USD) of the bond market should be greater than the cushion price
 * - Lower cushion: the initial price (in USD) of the bond market should be less than the cushion price
 * - OHM price is available
 * - The initial price (in USD) of the bond market should be the same as the OHM price derived from the Chainlink oracle
 * - Upper cushion: bond market accepts DAI and pays out OHM
 * - Lower cushion: bond market accepts OHM and pays of DAI
 * - The capacity of the bond market should be correct
 *
 * @param priceEvent
 * @param rangeSnapshot
 * @param marketCreatedEvents
 * @returns
 */
const checkCushionUp = (
  priceEvent: PriceEvent,
  rangeSnapshot: RangeSnapshot,
  marketCreatedEvents: MarketCreatedEvent[],
): string[] => {
  const errors: string[] = [];
  const marketId = priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId;
  console.info(`\n\nCommencing CushionUp check`);

  // Check that the PriceEvent has a marketId set
  if (!marketId) {
    pushError(`Expected to find a market id for a CushionUp event, but it was missing on the RangeSnapshot`, errors);
    return errors; // Can't proceed
  } else {
    console.debug(`CushionUp event has a market id set: ${marketId}`);
  }

  // Check that a market created event was fired by the Bond Protocol contracts
  const createdMarkets = filterCreatedEvents(marketCreatedEvents, rangeSnapshot.block, marketId);
  if (!createdMarkets.length) {
    pushError(
      `Expected to find a MarketCreatedEvent with id (${marketId}) for a CushionUp, but it was missing.`,
      errors,
    );
    return errors; // Can't proceed
  } else {
    console.debug(`CushionUp event has a corresponding MarketCreatedEvent`);
  }

  // There should only be only event fired, but check anyway
  if (createdMarkets.length > 1) {
    pushError(
      `Expected to find only 1 MarketCreatedEvent with id (${marketId}) for a CushionUp, but there were ${createdMarkets.length}.`,
      errors,
    );
  }

  // The marketId is unique, so we are guaranteed that there is only one result
  const createdMarket = createdMarkets[0];

  // The owner should be the operator contract
  if (createdMarket.market.owner.toString().toLowerCase() !== OPERATOR_CONTRACT.toLowerCase()) {
    pushError(
      `Expected market owner (${createdMarket.market.owner.toString()}) to be the Olympus operator contract: ${OPERATOR_CONTRACT}`,
      errors,
    );
  } else {
    console.debug(`Market owner is correctly the Olympus operator contract`);
  }

  // In the low cushion, the initial price is in terms of the quote token, and the quote token is OHM and the payout token is DAI. To get it into DAI (USD), we need to flip it.
  const initialPriceUsd = priceEvent.isHigh
    ? createdMarket.market.initialPriceInQuoteToken
    : 1 / createdMarket.market.initialPriceInQuoteToken;

  // Check that the initial price is on the correct side of the cushion
  if (priceEvent.isHigh) {
    // When high, the initial price should be higher than the cushion price
    if (initialPriceUsd < rangeSnapshot.highCushionPrice) {
      pushError(
        `Expected the initial price of the market (${formatCurrency(
          initialPriceUsd,
        )}) to be > the upper cushion price (${formatCurrency(rangeSnapshot.highCushionPrice)})`,
        errors,
      );
    } else {
      console.debug(
        `Upper market initial price (${initialPriceUsd}) is correctly > upper cushion price ${formatCurrency(
          rangeSnapshot.highCushionPrice,
          2,
        )}`,
      );
    }
  } else {
    // When low, the initial price should be lower than the cushion price
    if (initialPriceUsd > rangeSnapshot.lowCushionPrice) {
      pushError(
        `Expected the initial price of the market (${formatCurrency(
          initialPriceUsd,
        )}) to be < the lower cushion price (${formatCurrency(rangeSnapshot.lowCushionPrice)})`,
        errors,
      );
    } else {
      console.debug(
        `Lower market initial price (${formatCurrency(
          initialPriceUsd,
        )}) is correctly < lower cushion price ${formatCurrency(rangeSnapshot.lowCushionPrice, 2)}`,
      );
    }
  }

  // The price of OHM should be available
  const ohmPrice = rangeSnapshot.ohmPrice;
  if (!ohmPrice) {
    pushError(`Expected RangeSnapshot to have OHM price, but it was not set.`, errors);
  } else {
    console.debug(`OHM price is set: ${formatCurrency(rangeSnapshot.ohmPrice, 2)}`);
  }

  // The initial price for the market should be the same as the corresponding snapshot's OHM price (derived from Chainlink)
  if (ohmPrice && formatCurrency(initialPriceUsd, 2) !== formatCurrency(ohmPrice, 2)) {
    pushError(
      `Expected the initial price of the created market (${formatCurrency(
        initialPriceUsd,
        2,
      )}) to match the price of OHM from Chainlink: ${formatCurrency(ohmPrice, 2)}`,
      errors,
    );
  } else {
    console.debug(`Snapshot OHM price and initial price match: ${formatCurrency(initialPriceUsd, 2)}`);
  }

  // Check the tokens
  if (priceEvent.isHigh) {
    // Market in the high cushion accepts DAI
    if (!isBytesEqual(createdMarket.market.quoteToken, ERC20_DAI)) {
      pushError(
        `Expected quote token (${createdMarket.market.quoteToken.toString()}) of upper cushion market to be DAI (${ERC20_DAI})`,
        errors,
      );
    } else {
      console.debug(`Upper market quote token is correctly DAI`);
    }

    // Market in the high cushion should pay out in OHM
    if (!isBytesEqual(createdMarket.market.payoutToken, ERC20_OHM_V2)) {
      pushError(
        `Expected payout token (${createdMarket.market.payoutToken.toString()}) of upper cushion market to be OHM V2 (${ERC20_OHM_V2})`,
        errors,
      );
    } else {
      console.debug(`Upper market payout token is correctly OHM`);
    }
  } else {
    // Market in the low cushion accepts OHM
    if (!isBytesEqual(createdMarket.market.quoteToken, ERC20_OHM_V2)) {
      pushError(
        `Expected quote token (${createdMarket.market.quoteToken.toString()}) of lower cushion market to be OHM V2 (${ERC20_OHM_V2})`,
        errors,
      );
    } else {
      console.debug(`Lower market quote token is correctly OHM`);
    }

    // Market in the low cushion should pay out in DAI
    if (!isBytesEqual(createdMarket.market.payoutToken, ERC20_DAI)) {
      pushError(
        `Expected payout token (${createdMarket.market.payoutToken.toString()}) of lower cushion market to be DAI (${ERC20_DAI})`,
        errors,
      );
    } else {
      console.debug(`Lower market payout token is correctly DAI`);
    }
  }

  if (rangeSnapshot.operatorCushionFactor) {
    const CAPACITY_DECIMALS = 9;

    // bond market capacity = cushion factor * highCapacityOhm or lowCapacityReserve
    const expectedCapacity = formatNumber(
      rangeSnapshot.operatorCushionFactor *
        (priceEvent.isHigh ? priceEvent.snapshot.highCapacityOhm : priceEvent.snapshot.lowCapacityReserve),
      CAPACITY_DECIMALS,
    );
    const actualCapacity = formatNumber(createdMarket.market.capacityInPayoutToken, CAPACITY_DECIMALS);

    if (expectedCapacity !== actualCapacity) {
      pushError(
        `Expected market capacity (${actualCapacity} ${priceEvent.isHigh ? "OHM" : "DAI"}) to be: ${expectedCapacity}`,
        errors,
      );
    } else {
      console.debug(`Market capacity is as expected: ${expectedCapacity}`);
    }
  } else {
    pushError(`Expected the cushion factor to be set, but it wasn't`, errors);
  }

  return errors;
};

/**
 * Performs checks when a CushionDown event is received:
 * - Should have a corresponding market closed event
 * - The bond market should actually be closed
 *
 * This assumes that {marketClosedEvents} is filtered to records for the same block.
 *
 * CushionDown events do not have the bond market id, and the id is removed from the range
 * structure, so it cannot be tracked.
 *
 * @param priceEvent
 * @param rangeSnapshot
 * @param marketClosedEvents
 * @returns
 */
const checkCushionDown = (
  priceEvent: PriceEvent,
  rangeSnapshot: RangeSnapshot,
  marketClosedEvents: MarketClosedEvent[],
): string[] => {
  const errors: string[] = [];
  console.info(`\n\nCommencing CushionDown check`);

  // Check that a market closed event was fired in the same block
  const closedMarkets = filterClosedEvents(marketClosedEvents, rangeSnapshot.block);
  if (!closedMarkets.length) {
    pushError(`Expected to find a MarketClosedEvent for a CushionDown event, but it was missing.`, errors);
    return errors; // Can't proceed
  } else {
    console.debug(`CushionDown event has a corresponding MarketClosedEvent`);
  }

  // The marketId is unique, so we are guaranteed that there is only one result
  const closedMarket = closedMarkets[0];

  // Check that the market is actually closed
  if (!closedMarket.market.closedBlock) {
    pushError(`Expected market to be closed for a CushionDown event`, errors);
  } else {
    console.debug(`Market is correctly closed`);
  }

  // bond market can shut down due to capacity exhausted, time duration elapsed or max debt circuit breaker
  // TODO inform if capacity is not exhausted and time duration has not elapsed

  return errors;
};

/**
 * Performs checks when a market created event is received:
 * - Should have a corresponding CushionUp event
 * - The owner of the market should be the treasury operator contract
 *
 * This assumes that {cushionUpEvents} is filtered to records for the same block.
 *
 * @param event
 * @param _rangeSnapshot
 * @param cushionUpEvents
 * @returns
 */
const checkMarketCreated = (
  event: MarketCreatedEvent,
  _rangeSnapshot: RangeSnapshot,
  cushionUpEvents: PriceEvent[],
): string[] => {
  const errors: string[] = [];
  console.info(`\n\nCommencing market created check`);

  const matchingCushionUpEvents = cushionUpEvents.filter(
    priceEvent =>
      event.marketId == (priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId),
  );

  // The owner should be the operator contract
  if (!isBytesEqual(event.market.owner, OPERATOR_CONTRACT)) {
    pushError(
      `Market was created, but the owner (${event.market.owner}) is not the operator contract: ${OPERATOR_CONTRACT}`,
      errors,
    );
  } else {
    console.debug(`Market owner is correctly the Olympus operator contract`);
  }

  // If a market is created, but there was no CushionUp, it may have been created outside of RBS
  if (matchingCushionUpEvents.length == 0) {
    pushError(`Market was created, but there was no corresponding RBS CushionUp event`, errors);
  } else {
    console.debug(`MarketCreatedEvent has a corresponding CushionUp event`);
  }

  return errors;
};

/**
 * Performs checks when a market closed event is received:
 * - Should have a corresponding CushionDown event
 *
 * This assumes that {cushionDownEvents} is filtered to records for the same block.
 *
 * CushionDown events do not have the bond market id, and the id is removed from the range
 * structure, so it cannot be tracked.
 *
 * @param event
 * @param _rangeSnapshot
 * @param cushionDownEvents
 * @returns
 */
const checkMarketClosed = (
  event: MarketClosedEvent,
  _rangeSnapshot: RangeSnapshot,
  cushionDownEvents: PriceEvent[],
): string[] => {
  const errors: string[] = [];
  console.info(`\n\nCommencing market closed check`);

  // If a market is closed, but there was no CushionUp, it may have been closed outside of RBS
  if (cushionDownEvents.length == 0) {
    pushError(`Market was closed, but there was no corresponding RBS CushionDown event`, errors);
  } else {
    console.debug(`MarketClosedEvent has a corresponding CushionDown event`);
  }

  return errors;
};

/**
 * Performs checks on a WallUp event (which occurs when a wall is being re-generated):
 * - Lower wall: price >= wall price
 * - Upper wall: price <= wall price
 * - Bond market is closed
 */
const checkWallUp = (wallUpEvent: PriceEvent, rangeSnapshot: RangeSnapshot): string[] => {
  const errors: string[] = [];
  console.info("\n\nCommencing wall up check");

  const ohmPrice = rangeSnapshot.ohmPrice;
  if (!ohmPrice) {
    pushError(`Expected RangeSnapshot to have OHM price, but it was not set.`, errors);
    return errors;
  } else {
    console.debug(`OHM price is set: ${formatCurrency(rangeSnapshot.ohmPrice, 2)}`);
  }

  // Check that the price makes sense
  if (wallUpEvent.isHigh) {
    if (ohmPrice > rangeSnapshot.highWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be lower than upper wall price (${formatCurrency(
          rangeSnapshot.highWallPrice,
        )})`,
        errors,
      );
    }
  } else {
    if (ohmPrice < rangeSnapshot.lowWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be higher than lower wall price (${formatCurrency(
          rangeSnapshot.lowWallPrice,
        )})`,
        errors,
      );
    }
  }

  // Check that bond markets are closed
  if (rangeSnapshot.lowMarketId) {
    pushError(`Lower bond market should be closed, but is open with id: ${rangeSnapshot.lowMarketId}`, errors);
  }

  if (rangeSnapshot.highMarketId) {
    pushError(`Upper bond market should be closed, but is open with id: ${rangeSnapshot.highMarketId}`, errors);
  }

  return errors;
};

/**
 * Performs checks on a WallDown event (which occurs when the price breaks through the wall):
 * - Lower wall: price <= wall price
 * - Upper wall: price >= wall price
 * - Bond market is closed
 */
const checkWallDown = (wallDownEvent: PriceEvent, rangeSnapshot: RangeSnapshot): string[] => {
  const errors: string[] = [];
  console.info("\n\nCommencing wall down check");

  const ohmPrice = rangeSnapshot.ohmPrice;
  if (!ohmPrice) {
    pushError(`Expected RangeSnapshot to have OHM price, but it was not set.`, errors);
    return errors;
  } else {
    console.debug(`OHM price is set: ${formatCurrency(rangeSnapshot.ohmPrice, 2)}`);
  }

  // Check that the price makes sense
  if (wallDownEvent.isHigh) {
    if (ohmPrice < rangeSnapshot.highWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be higher than upper wall price (${formatCurrency(
          rangeSnapshot.highWallPrice,
        )})`,
        errors,
      );
    }
  } else {
    if (ohmPrice > rangeSnapshot.lowWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be lower than lower wall price (${formatCurrency(
          rangeSnapshot.lowWallPrice,
        )})`,
        errors,
      );
    }
  }

  // Check that bond markets are closed
  if (rangeSnapshot.lowMarketId) {
    pushError(`Lower bond market should be closed, but is open with id: ${rangeSnapshot.lowMarketId}`, errors);
  }

  if (rangeSnapshot.highMarketId) {
    pushError(`Upper bond market should be closed, but is open with id: ${rangeSnapshot.highMarketId}`, errors);
  }

  return errors;
};

export const checkBondMarkets = async (
  firestore: DocumentReference,
  mentionRoles: string[],
  webhookUrl: string,
): Promise<void> => {
  console.info(`\n\n⏰ Checking Bond Market Parameters`);

  // Get the latest block
  const firestoreSnapshot = await firestore.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || 0);
  let updatedLatestBlock = latestBlock;
  console.info(`Latest block is ${latestBlock}`);

  // Fetch range snapshots
  const rangeSnapshotClient = new Client({
    url: RBS_SUBGRAPH_URL,
    fetch,
  });
  // Snapshots are in ascending order
  console.debug(`Fetching RangeSnapshot records since block ${latestBlock}`);
  const rangeSnapshotResults = await rangeSnapshotClient
    .query(RangeSnapshotSinceBlockDocument, {
      sinceBlock: latestBlock,
    })
    .toPromise();
  // This previously checked for a 0 length array returned. However, if indexing lags slightly, we could get 0 records. Hence, it should not be an error.
  if (!rangeSnapshotResults.data) {
    throw new Error(`Did not receive results from RangeSnapshot GraphQL query. Error: ${rangeSnapshotResults.error}`);
  }

  const bondsClient = new Client({
    url: BONDS_SUBGRAPH_URL,
    fetch,
  });

  // Fetch PriceEvents
  console.debug(`Fetching PriceEvent records since block ${latestBlock}`);
  const priceEventResults = await rangeSnapshotClient
    .query(RbsPriceEventsDocument, {
      latestBlock: latestBlock,
    })
    .toPromise();
  if (!priceEventResults.data) {
    throw new Error(`Did not receive results from PriceEvent GraphQL query. Error: ${priceEventResults.error}`);
  }
  const priceEvents = priceEventResults.data.priceEvents;

  // Fetch markets created (restricted to OHM)
  console.debug(`Fetching MarketCreatedEvent records since block ${latestBlock}`);
  const marketsCreatedResults = await bondsClient
    .query(MarketCreatedEventsDocument, {
      sinceBlock: latestBlock,
    })
    .toPromise();
  if (!marketsCreatedResults.data) {
    throw new Error(
      `Did not receive results from MarketCreatedEvents GraphQL query. Error: ${marketsCreatedResults.error}`,
    );
  }
  const marketCreatedEvents: MarketCreatedEvent[] = marketsCreatedResults.data.marketCreatedEvents;

  // Fetch markets closed (restricted to OHM)
  console.debug(`Fetching MarketClosedEvent records since block ${latestBlock}`);
  const marketsClosedResults = await bondsClient
    .query(MarketClosedEventsDocument, {
      sinceBlock: latestBlock,
    })
    .toPromise();
  if (!marketsClosedResults.data) {
    throw new Error(
      `Did not receive results from MarketClosedEvents GraphQL query. Error: ${marketsClosedResults.error}`,
    );
  }
  const marketClosedEvents: MarketClosedEvent[] = marketsClosedResults.data.marketClosedEvents;

  // Iterate over blocks and perform checks
  const rangeSnapshots: RangeSnapshot[] = rangeSnapshotResults.data.rangeSnapshots;
  console.info(`Processing ${rangeSnapshots.length} RangeSnapshot records`);
  rangeSnapshots.forEach(rangeSnapshot => {
    console.debug(`\n\nChecking RangeSnapshot at block ${rangeSnapshot.block}`);

    const cushionUpEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshot.block, "CushionUp");
    cushionUpEventsAtBlock.forEach(priceEvent => {
      const errors = checkCushionUp(priceEvent, rangeSnapshot, marketCreatedEvents);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 CushionUp Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        {
          name: "Market ID",
          value: `${priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId}`,
        },
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
      ]);
    });

    const cushionDownEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshot.block, "CushionDown");
    cushionDownEventsAtBlock.forEach(priceEvent => {
      const errors = checkCushionDown(priceEvent, rangeSnapshot, marketClosedEvents);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 CushionDown Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        // marketId is not available
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
      ]);
    });

    const wallUpEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshot.block, "WallUp");
    wallUpEventsAtBlock.forEach(priceEvent => {
      const errors = checkWallUp(priceEvent, rangeSnapshot);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 WallUp Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        // marketId is not available
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
      ]);
    });

    const wallDownEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshot.block, "WallDown");
    wallDownEventsAtBlock.forEach(priceEvent => {
      const errors = checkWallDown(priceEvent, rangeSnapshot);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 WallDown Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        // marketId is not available
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
      ]);
    });

    const marketCreatedEventsAtBlock = filterCreatedEvents(marketCreatedEvents, rangeSnapshot.block);
    marketCreatedEventsAtBlock.forEach(marketEvent => {
      const errors = checkMarketCreated(marketEvent, rangeSnapshot, cushionUpEventsAtBlock);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 CreatedMarket Discrepancies`, toUnorderedList(errors), [
        {
          name: "Market ID",
          value: `${marketEvent.marketId}`,
        },
        { name: "Block", value: `${marketEvent.block}` },
      ]);
    });

    const marketClosedEventsAtBlock = filterClosedEvents(marketClosedEvents, rangeSnapshot.block);
    marketClosedEventsAtBlock.forEach(marketEvent => {
      const errors = checkMarketClosed(marketEvent, rangeSnapshot, cushionDownEventsAtBlock);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 ClosedMarket Discrepancies`, toUnorderedList(errors), [
        {
          name: "Market ID",
          value: `${marketEvent.marketId}`,
        },
        { name: "Block", value: `${marketEvent.block}` },
      ]);
    });

    updatedLatestBlock = rangeSnapshot.block;
  });

  // Update latest block
  await firestore.update({
    [`${FUNCTION_KEY}.${LATEST_BLOCK}`]: updatedLatestBlock,
  });
  console.info(`Updated latest block to ${updatedLatestBlock}`);
};
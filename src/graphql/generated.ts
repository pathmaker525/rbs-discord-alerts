import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: number;
  BigInt: number;
  Bytes: Uint8Array;
};

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type MovingAverageDurationChanged = {
  __typename?: "MovingAverageDurationChanged";
  block: Scalars["BigInt"];
  date: Scalars["String"];
  id: Scalars["ID"];
  movingAverageDuration: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type MovingAverageDurationChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  movingAverageDuration?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_gt?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_gte?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  movingAverageDuration_lt?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_lte?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_not?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum MovingAverageDurationChanged_OrderBy {
  Block = "block",
  Date = "date",
  Id = "id",
  MovingAverageDuration = "movingAverageDuration",
  Transaction = "transaction",
}

export type NewObservation = {
  __typename?: "NewObservation";
  block: Scalars["BigInt"];
  date: Scalars["String"];
  id: Scalars["ID"];
  price: Scalars["BigDecimal"];
  priceMovingAverage: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type NewObservation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  price?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceMovingAverage_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum NewObservation_OrderBy {
  Block = "block",
  Date = "date",
  Id = "id",
  Price = "price",
  PriceMovingAverage = "priceMovingAverage",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type ObservationFrequencyChanged = {
  __typename?: "ObservationFrequencyChanged";
  block: Scalars["BigInt"];
  date: Scalars["String"];
  id: Scalars["ID"];
  observationFrequencySeconds: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type ObservationFrequencyChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  observationFrequencySeconds?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  observationFrequencySeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_not?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum ObservationFrequencyChanged_OrderBy {
  Block = "block",
  Date = "date",
  Id = "id",
  ObservationFrequencySeconds = "observationFrequencySeconds",
  Transaction = "transaction",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PriceEvent = {
  __typename?: "PriceEvent";
  block: Scalars["BigInt"];
  capacityOhm?: Maybe<Scalars["BigDecimal"]>;
  cushionHighPrice?: Maybe<Scalars["BigDecimal"]>;
  cushionLowPrice?: Maybe<Scalars["BigDecimal"]>;
  date: Scalars["String"];
  id: Scalars["ID"];
  isHigh: Scalars["Boolean"];
  price?: Maybe<Scalars["BigDecimal"]>;
  priceMovingAverage?: Maybe<Scalars["BigDecimal"]>;
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  type: PriceEventType;
  wallHighPrice?: Maybe<Scalars["BigDecimal"]>;
  wallLowPrice?: Maybe<Scalars["BigDecimal"]>;
};

export enum PriceEventType {
  CushionDown = "CushionDown",
  CushionUp = "CushionUp",
  WallDown = "WallDown",
  WallUp = "WallUp",
}

export type PriceEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  capacityOhm?: InputMaybe<Scalars["BigDecimal"]>;
  capacityOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  capacityOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  capacityOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  capacityOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  capacityOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  capacityOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  capacityOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionHighPrice?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionHighPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionLowPrice?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionLowPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isHigh?: InputMaybe<Scalars["Boolean"]>;
  isHigh_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isHigh_not?: InputMaybe<Scalars["Boolean"]>;
  isHigh_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  price?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceMovingAverage_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceMovingAverage_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  type?: InputMaybe<PriceEventType>;
  type_in?: InputMaybe<Array<PriceEventType>>;
  type_not?: InputMaybe<PriceEventType>;
  type_not_in?: InputMaybe<Array<PriceEventType>>;
  wallHighPrice?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallHighPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallLowPrice?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallLowPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum PriceEvent_OrderBy {
  Block = "block",
  CapacityOhm = "capacityOhm",
  CushionHighPrice = "cushionHighPrice",
  CushionLowPrice = "cushionLowPrice",
  Date = "date",
  Id = "id",
  IsHigh = "isHigh",
  Price = "price",
  PriceMovingAverage = "priceMovingAverage",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Type = "type",
  WallHighPrice = "wallHighPrice",
  WallLowPrice = "wallLowPrice",
}

export type PricesChangedEvent = {
  __typename?: "PricesChangedEvent";
  block: Scalars["BigInt"];
  cushionHighPrice: Scalars["BigDecimal"];
  cushionLowPrice: Scalars["BigDecimal"];
  date: Scalars["String"];
  id: Scalars["ID"];
  transaction: Scalars["Bytes"];
  wallHighPrice: Scalars["BigDecimal"];
  wallLowPrice: Scalars["BigDecimal"];
};

export type PricesChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cushionHighPrice?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionHighPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  cushionHighPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionLowPrice?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionLowPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  cushionLowPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  wallHighPrice?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallHighPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallHighPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallLowPrice?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallLowPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallLowPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum PricesChangedEvent_OrderBy {
  Block = "block",
  CushionHighPrice = "cushionHighPrice",
  CushionLowPrice = "cushionLowPrice",
  Date = "date",
  Id = "id",
  Transaction = "transaction",
  WallHighPrice = "wallHighPrice",
  WallLowPrice = "wallLowPrice",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  movingAverageDurationChanged?: Maybe<MovingAverageDurationChanged>;
  movingAverageDurationChangeds: Array<MovingAverageDurationChanged>;
  newObservation?: Maybe<NewObservation>;
  newObservations: Array<NewObservation>;
  observationFrequencyChanged?: Maybe<ObservationFrequencyChanged>;
  observationFrequencyChangeds: Array<ObservationFrequencyChanged>;
  priceEvent?: Maybe<PriceEvent>;
  priceEvents: Array<PriceEvent>;
  pricesChangedEvent?: Maybe<PricesChangedEvent>;
  pricesChangedEvents: Array<PricesChangedEvent>;
  spreadsChangedEvent?: Maybe<SpreadsChangedEvent>;
  spreadsChangedEvents: Array<SpreadsChangedEvent>;
  thresholdFactorChangedEvent?: Maybe<ThresholdFactorChangedEvent>;
  thresholdFactorChangedEvents: Array<ThresholdFactorChangedEvent>;
  updateThresholdsChanged?: Maybe<UpdateThresholdsChanged>;
  updateThresholdsChangeds: Array<UpdateThresholdsChanged>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryMovingAverageDurationChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMovingAverageDurationChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MovingAverageDurationChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MovingAverageDurationChanged_Filter>;
};

export type QueryNewObservationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryNewObservationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<NewObservation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewObservation_Filter>;
};

export type QueryObservationFrequencyChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryObservationFrequencyChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ObservationFrequencyChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ObservationFrequencyChanged_Filter>;
};

export type QueryPriceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceEvent_Filter>;
};

export type QueryPricesChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPricesChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PricesChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PricesChangedEvent_Filter>;
};

export type QuerySpreadsChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySpreadsChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SpreadsChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SpreadsChangedEvent_Filter>;
};

export type QueryThresholdFactorChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryThresholdFactorChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ThresholdFactorChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ThresholdFactorChangedEvent_Filter>;
};

export type QueryUpdateThresholdsChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUpdateThresholdsChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UpdateThresholdsChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UpdateThresholdsChanged_Filter>;
};

export type SpreadsChangedEvent = {
  __typename?: "SpreadsChangedEvent";
  block: Scalars["BigInt"];
  cushionSpread: Scalars["BigDecimal"];
  date: Scalars["String"];
  id: Scalars["ID"];
  transaction: Scalars["Bytes"];
  wallSpread: Scalars["BigDecimal"];
};

export type SpreadsChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cushionSpread?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionSpread_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_not?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  wallSpread?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallSpread_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum SpreadsChangedEvent_OrderBy {
  Block = "block",
  CushionSpread = "cushionSpread",
  Date = "date",
  Id = "id",
  Transaction = "transaction",
  WallSpread = "wallSpread",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  movingAverageDurationChanged?: Maybe<MovingAverageDurationChanged>;
  movingAverageDurationChangeds: Array<MovingAverageDurationChanged>;
  newObservation?: Maybe<NewObservation>;
  newObservations: Array<NewObservation>;
  observationFrequencyChanged?: Maybe<ObservationFrequencyChanged>;
  observationFrequencyChangeds: Array<ObservationFrequencyChanged>;
  priceEvent?: Maybe<PriceEvent>;
  priceEvents: Array<PriceEvent>;
  pricesChangedEvent?: Maybe<PricesChangedEvent>;
  pricesChangedEvents: Array<PricesChangedEvent>;
  spreadsChangedEvent?: Maybe<SpreadsChangedEvent>;
  spreadsChangedEvents: Array<SpreadsChangedEvent>;
  thresholdFactorChangedEvent?: Maybe<ThresholdFactorChangedEvent>;
  thresholdFactorChangedEvents: Array<ThresholdFactorChangedEvent>;
  updateThresholdsChanged?: Maybe<UpdateThresholdsChanged>;
  updateThresholdsChangeds: Array<UpdateThresholdsChanged>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionMovingAverageDurationChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMovingAverageDurationChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MovingAverageDurationChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MovingAverageDurationChanged_Filter>;
};

export type SubscriptionNewObservationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionNewObservationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<NewObservation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewObservation_Filter>;
};

export type SubscriptionObservationFrequencyChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionObservationFrequencyChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ObservationFrequencyChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ObservationFrequencyChanged_Filter>;
};

export type SubscriptionPriceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceEvent_Filter>;
};

export type SubscriptionPricesChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPricesChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PricesChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PricesChangedEvent_Filter>;
};

export type SubscriptionSpreadsChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSpreadsChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SpreadsChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SpreadsChangedEvent_Filter>;
};

export type SubscriptionThresholdFactorChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionThresholdFactorChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ThresholdFactorChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ThresholdFactorChangedEvent_Filter>;
};

export type SubscriptionUpdateThresholdsChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUpdateThresholdsChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UpdateThresholdsChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UpdateThresholdsChanged_Filter>;
};

export type ThresholdFactorChangedEvent = {
  __typename?: "ThresholdFactorChangedEvent";
  block: Scalars["BigInt"];
  date: Scalars["String"];
  id: Scalars["ID"];
  thresholdFactor: Scalars["BigDecimal"];
  transaction: Scalars["Bytes"];
};

export type ThresholdFactorChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  thresholdFactor?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  thresholdFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum ThresholdFactorChangedEvent_OrderBy {
  Block = "block",
  Date = "date",
  Id = "id",
  ThresholdFactor = "thresholdFactor",
  Transaction = "transaction",
}

export type UpdateThresholdsChanged = {
  __typename?: "UpdateThresholdsChanged";
  block: Scalars["BigInt"];
  date: Scalars["String"];
  id: Scalars["ID"];
  ohmEthUpdateThresholdSeconds: Scalars["BigInt"];
  reserveEthUpdateThresholdSeconds: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type UpdateThresholdsChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  ohmEthUpdateThresholdSeconds?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  ohmEthUpdateThresholdSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveEthUpdateThresholdSeconds?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveEthUpdateThresholdSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum UpdateThresholdsChanged_OrderBy {
  Block = "block",
  Date = "date",
  Id = "id",
  OhmEthUpdateThresholdSeconds = "ohmEthUpdateThresholdSeconds",
  ReserveEthUpdateThresholdSeconds = "reserveEthUpdateThresholdSeconds",
  Transaction = "transaction",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type RbsPriceEventsQueryVariables = Exact<{
  latestBlock: Scalars["BigInt"];
}>;

export type RbsPriceEventsQuery = {
  __typename?: "Query";
  priceEvents: Array<{
    __typename?: "PriceEvent";
    id: string;
    block: number;
    transaction: Uint8Array;
    date: string;
    type: PriceEventType;
    isHigh: boolean;
    timestamp: number;
    capacityOhm?: number | null;
    price?: number | null;
    priceMovingAverage?: number | null;
    cushionHighPrice?: number | null;
    cushionLowPrice?: number | null;
    wallHighPrice?: number | null;
    wallLowPrice?: number | null;
  }>;
};

export const RbsPriceEventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RBSPriceEvents" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "priceEvents" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "block" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "EnumValue", value: "asc" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "transaction" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "isHigh" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "capacityOhm" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "priceMovingAverage" } },
                { kind: "Field", name: { kind: "Name", value: "cushionHighPrice" } },
                { kind: "Field", name: { kind: "Name", value: "cushionLowPrice" } },
                { kind: "Field", name: { kind: "Name", value: "wallHighPrice" } },
                { kind: "Field", name: { kind: "Name", value: "wallLowPrice" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RbsPriceEventsQuery, RbsPriceEventsQueryVariables>;
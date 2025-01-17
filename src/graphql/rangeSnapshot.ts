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
  BigDecimal: string;
  BigInt: string;
  Bytes: Uint8Array;
};

export type Beat = {
  __typename?: "Beat";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type BeatRewardIssued = {
  __typename?: "BeatRewardIssued";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  rewardAmount: Scalars["BigDecimal"];
  rewardToken: Scalars["Bytes"];
  timestamp: Scalars["BigInt"];
  to: Scalars["Bytes"];
  transaction: Scalars["Bytes"];
};

export type BeatRewardIssued_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  rewardAmount?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardAmount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_not?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardToken?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken_not?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum BeatRewardIssued_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  RewardAmount = "rewardAmount",
  RewardToken = "rewardToken",
  Timestamp = "timestamp",
  To = "to",
  Transaction = "transaction",
}

export type BeatRewardUpdated = {
  __typename?: "BeatRewardUpdated";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  rewardAmount: Scalars["BigDecimal"];
  rewardToken: Scalars["Bytes"];
  timestamp: Scalars["BigInt"];
  token: Scalars["Bytes"];
  transaction: Scalars["Bytes"];
};

export type BeatRewardUpdated_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  rewardAmount?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardAmount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_not?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardToken?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken_not?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["Bytes"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  token_not?: InputMaybe<Scalars["Bytes"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum BeatRewardUpdated_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  RewardAmount = "rewardAmount",
  RewardToken = "rewardToken",
  Timestamp = "timestamp",
  Token = "token",
  Transaction = "transaction",
}

export type Beat_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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

export enum Beat_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars["Bytes"]>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars["Int"]>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type MinimumTargetPriceChanged = {
  __typename?: "MinimumTargetPriceChanged";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  minimumTargetPrice: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type MinimumTargetPriceChanged_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  minimumTargetPrice?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minimumTargetPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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

export enum MinimumTargetPriceChanged_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  MinimumTargetPrice = "minimumTargetPrice",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type MovingAverageDurationChanged = {
  __typename?: "MovingAverageDurationChanged";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  movingAverageDuration: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type MovingAverageDurationChanged_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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

export enum MovingAverageDurationChanged_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  MovingAverageDuration = "movingAverageDuration",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type NewObservation = {
  __typename?: "NewObservation";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  snapshot: RangeSnapshot;
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type NewObservation_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  snapshot?: InputMaybe<Scalars["String"]>;
  snapshot_contains?: InputMaybe<Scalars["String"]>;
  snapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_gt?: InputMaybe<Scalars["String"]>;
  snapshot_gte?: InputMaybe<Scalars["String"]>;
  snapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_lt?: InputMaybe<Scalars["String"]>;
  snapshot_lte?: InputMaybe<Scalars["String"]>;
  snapshot_not?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  Snapshot = "snapshot",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type ObservationFrequencyChanged = {
  __typename?: "ObservationFrequencyChanged";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  observationFrequencySeconds: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type ObservationFrequencyChanged_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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

export enum ObservationFrequencyChanged_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  ObservationFrequencySeconds = "observationFrequencySeconds",
  Timestamp = "timestamp",
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
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  isHigh: Scalars["Boolean"];
  snapshot: RangeSnapshot;
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  type: PriceEventType;
};

export enum PriceEventType {
  CushionDown = "CushionDown",
  CushionUp = "CushionUp",
  WallDown = "WallDown",
  WallUp = "WallUp",
}

export type PriceEvent_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  snapshot?: InputMaybe<Scalars["String"]>;
  snapshot_contains?: InputMaybe<Scalars["String"]>;
  snapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_gt?: InputMaybe<Scalars["String"]>;
  snapshot_gte?: InputMaybe<Scalars["String"]>;
  snapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_lt?: InputMaybe<Scalars["String"]>;
  snapshot_lte?: InputMaybe<Scalars["String"]>;
  snapshot_not?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
};

export enum PriceEvent_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  IsHigh = "isHigh",
  Snapshot = "snapshot",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Type = "type",
}

export type PricesChangedEvent = {
  __typename?: "PricesChangedEvent";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  snapshot: RangeSnapshot;
  transaction: Scalars["Bytes"];
};

export type PricesChangedEvent_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  snapshot?: InputMaybe<Scalars["String"]>;
  snapshot_contains?: InputMaybe<Scalars["String"]>;
  snapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_gt?: InputMaybe<Scalars["String"]>;
  snapshot_gte?: InputMaybe<Scalars["String"]>;
  snapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_lt?: InputMaybe<Scalars["String"]>;
  snapshot_lte?: InputMaybe<Scalars["String"]>;
  snapshot_not?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum PricesChangedEvent_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  Snapshot = "snapshot",
  Transaction = "transaction",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  beat?: Maybe<Beat>;
  beatRewardIssued?: Maybe<BeatRewardIssued>;
  beatRewardIssueds: Array<BeatRewardIssued>;
  beatRewardUpdated?: Maybe<BeatRewardUpdated>;
  beatRewardUpdateds: Array<BeatRewardUpdated>;
  beats: Array<Beat>;
  minimumTargetPriceChanged?: Maybe<MinimumTargetPriceChanged>;
  minimumTargetPriceChangeds: Array<MinimumTargetPriceChanged>;
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
  rangeSnapshot?: Maybe<RangeSnapshot>;
  rangeSnapshots: Array<RangeSnapshot>;
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

export type QueryBeatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatRewardIssuedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatRewardIssuedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardIssued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeatRewardIssued_Filter>;
};

export type QueryBeatRewardUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatRewardUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeatRewardUpdated_Filter>;
};

export type QueryBeatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Beat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Beat_Filter>;
};

export type QueryMinimumTargetPriceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMinimumTargetPriceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinimumTargetPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MinimumTargetPriceChanged_Filter>;
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

export type QueryRangeSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRangeSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RangeSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RangeSnapshot_Filter>;
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

export type RangeSnapshot = {
  __typename?: "RangeSnapshot";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  cushionSpread: Scalars["BigDecimal"];
  date: Scalars["String"];
  highActive: Scalars["Boolean"];
  highCapacityOhm: Scalars["BigDecimal"];
  highCushionPrice: Scalars["BigDecimal"];
  highLastActiveTimestamp: Scalars["BigInt"];
  highMarketId?: Maybe<Scalars["BigInt"]>;
  highWallPrice: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lowActive: Scalars["Boolean"];
  lowCapacityReserve: Scalars["BigDecimal"];
  lowCushionPrice: Scalars["BigDecimal"];
  lowLastActiveTimestamp: Scalars["BigInt"];
  lowMarketId?: Maybe<Scalars["BigInt"]>;
  lowWallPrice: Scalars["BigDecimal"];
  ohmMovingAveragePrice?: Maybe<Scalars["BigDecimal"]>;
  ohmPrice?: Maybe<Scalars["BigDecimal"]>;
  operatorCushionFactor?: Maybe<Scalars["BigDecimal"]>;
  operatorReserveFactor?: Maybe<Scalars["BigDecimal"]>;
  thresholdFactor: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  treasuryDebtBalance?: Maybe<Scalars["BigDecimal"]>;
  treasuryReserveAddress?: Maybe<Scalars["Bytes"]>;
  treasuryReserveBalance?: Maybe<Scalars["BigDecimal"]>;
  wallSpread: Scalars["BigDecimal"];
};

export type RangeSnapshot_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  highActive?: InputMaybe<Scalars["Boolean"]>;
  highActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  highActive_not?: InputMaybe<Scalars["Boolean"]>;
  highActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  highCapacityOhm?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highCapacityOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highCushionPrice?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highCushionPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highLastActiveTimestamp?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highLastActiveTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highMarketId?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_gt?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_gte?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highMarketId_lt?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_lte?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_not?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highWallPrice?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highWallPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lowActive?: InputMaybe<Scalars["Boolean"]>;
  lowActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lowActive_not?: InputMaybe<Scalars["Boolean"]>;
  lowActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lowCapacityReserve?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowCapacityReserve_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_not?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowCushionPrice?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowCushionPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowLastActiveTimestamp?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowLastActiveTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowMarketId?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_gt?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_gte?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowMarketId_lt?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_lte?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_not?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowWallPrice?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowWallPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmMovingAveragePrice?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmMovingAveragePrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmPrice?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorCushionFactor?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorCushionFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorReserveFactor?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorReserveFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  thresholdFactor?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  thresholdFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  treasuryDebtBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDebtBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryReserveAddress?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  treasuryReserveAddress_not?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  treasuryReserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryReserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallSpread?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallSpread_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum RangeSnapshot_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  CushionSpread = "cushionSpread",
  Date = "date",
  HighActive = "highActive",
  HighCapacityOhm = "highCapacityOhm",
  HighCushionPrice = "highCushionPrice",
  HighLastActiveTimestamp = "highLastActiveTimestamp",
  HighMarketId = "highMarketId",
  HighWallPrice = "highWallPrice",
  Id = "id",
  LowActive = "lowActive",
  LowCapacityReserve = "lowCapacityReserve",
  LowCushionPrice = "lowCushionPrice",
  LowLastActiveTimestamp = "lowLastActiveTimestamp",
  LowMarketId = "lowMarketId",
  LowWallPrice = "lowWallPrice",
  OhmMovingAveragePrice = "ohmMovingAveragePrice",
  OhmPrice = "ohmPrice",
  OperatorCushionFactor = "operatorCushionFactor",
  OperatorReserveFactor = "operatorReserveFactor",
  ThresholdFactor = "thresholdFactor",
  Timestamp = "timestamp",
  TreasuryDebtBalance = "treasuryDebtBalance",
  TreasuryReserveAddress = "treasuryReserveAddress",
  TreasuryReserveBalance = "treasuryReserveBalance",
  WallSpread = "wallSpread",
}

export type SpreadsChangedEvent = {
  __typename?: "SpreadsChangedEvent";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  cushionSpread: Scalars["BigDecimal"];
  date: Scalars["String"];
  id: Scalars["ID"];
  transaction: Scalars["Bytes"];
  wallSpread: Scalars["BigDecimal"];
};

export type SpreadsChangedEvent_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  Blockchain = "blockchain",
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
  beat?: Maybe<Beat>;
  beatRewardIssued?: Maybe<BeatRewardIssued>;
  beatRewardIssueds: Array<BeatRewardIssued>;
  beatRewardUpdated?: Maybe<BeatRewardUpdated>;
  beatRewardUpdateds: Array<BeatRewardUpdated>;
  beats: Array<Beat>;
  minimumTargetPriceChanged?: Maybe<MinimumTargetPriceChanged>;
  minimumTargetPriceChangeds: Array<MinimumTargetPriceChanged>;
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
  rangeSnapshot?: Maybe<RangeSnapshot>;
  rangeSnapshots: Array<RangeSnapshot>;
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

export type SubscriptionBeatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatRewardIssuedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatRewardIssuedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardIssued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeatRewardIssued_Filter>;
};

export type SubscriptionBeatRewardUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatRewardUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeatRewardUpdated_Filter>;
};

export type SubscriptionBeatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Beat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Beat_Filter>;
};

export type SubscriptionMinimumTargetPriceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMinimumTargetPriceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinimumTargetPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MinimumTargetPriceChanged_Filter>;
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

export type SubscriptionRangeSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRangeSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RangeSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RangeSnapshot_Filter>;
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
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  thresholdFactor: Scalars["BigDecimal"];
  transaction: Scalars["Bytes"];
};

export type ThresholdFactorChangedEvent_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  ThresholdFactor = "thresholdFactor",
  Transaction = "transaction",
}

export type UpdateThresholdsChanged = {
  __typename?: "UpdateThresholdsChanged";
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  ohmEthUpdateThresholdSeconds: Scalars["BigInt"];
  reserveEthUpdateThresholdSeconds: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
};

export type UpdateThresholdsChanged_Filter = {
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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

export enum UpdateThresholdsChanged_OrderBy {
  Block = "block",
  Blockchain = "blockchain",
  Date = "date",
  Id = "id",
  OhmEthUpdateThresholdSeconds = "ohmEthUpdateThresholdSeconds",
  ReserveEthUpdateThresholdSeconds = "reserveEthUpdateThresholdSeconds",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
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
    block: string;
    blockchain: string;
    date: string;
    id: string;
    isHigh: boolean;
    timestamp: string;
    transaction: Uint8Array;
    type: PriceEventType;
    snapshot: {
      __typename?: "RangeSnapshot";
      block: string;
      blockchain: string;
      cushionSpread: string;
      date: string;
      highActive: boolean;
      highCapacityOhm: string;
      highCushionPrice: string;
      highLastActiveTimestamp: string;
      highMarketId?: string | null;
      highWallPrice: string;
      id: string;
      lowActive: boolean;
      lowCapacityReserve: string;
      lowCushionPrice: string;
      lowLastActiveTimestamp: string;
      lowMarketId?: string | null;
      lowWallPrice: string;
      ohmMovingAveragePrice?: string | null;
      ohmPrice?: string | null;
      operatorCushionFactor?: string | null;
      operatorReserveFactor?: string | null;
      thresholdFactor: string;
      timestamp: string;
      treasuryDebtBalance?: string | null;
      treasuryReserveAddress?: Uint8Array | null;
      treasuryReserveBalance?: string | null;
      wallSpread: string;
    };
  }>;
};

export type MinimumTargetPriceChangedEventsQueryVariables = Exact<{
  latestBlock: Scalars["BigInt"];
}>;

export type MinimumTargetPriceChangedEventsQuery = {
  __typename?: "Query";
  minimumTargetPriceChangeds: Array<{
    __typename?: "MinimumTargetPriceChanged";
    block: string;
    blockchain: string;
    date: string;
    id: string;
    minimumTargetPrice: string;
    timestamp: string;
    transaction: Uint8Array;
  }>;
};

export type LatestRangeSnapshotQueryVariables = Exact<{ [key: string]: never }>;

export type LatestRangeSnapshotQuery = {
  __typename?: "Query";
  rangeSnapshots: Array<{
    __typename?: "RangeSnapshot";
    block: string;
    blockchain: string;
    cushionSpread: string;
    date: string;
    highActive: boolean;
    highCapacityOhm: string;
    highCushionPrice: string;
    highLastActiveTimestamp: string;
    highMarketId?: string | null;
    highWallPrice: string;
    id: string;
    lowActive: boolean;
    lowCapacityReserve: string;
    lowCushionPrice: string;
    lowLastActiveTimestamp: string;
    lowMarketId?: string | null;
    lowWallPrice: string;
    ohmMovingAveragePrice?: string | null;
    ohmPrice?: string | null;
    operatorCushionFactor?: string | null;
    operatorReserveFactor?: string | null;
    thresholdFactor: string;
    timestamp: string;
    treasuryDebtBalance?: string | null;
    treasuryReserveAddress?: Uint8Array | null;
    treasuryReserveBalance?: string | null;
    wallSpread: string;
  }>;
};

export type LowerCushionCapacityDepletedQueryVariables = Exact<{
  sinceDate: Scalars["String"];
  belowCapacity: Scalars["BigDecimal"];
}>;

export type LowerCushionCapacityDepletedQuery = {
  __typename?: "Query";
  rangeSnapshots: Array<{
    __typename?: "RangeSnapshot";
    block: string;
    blockchain: string;
    cushionSpread: string;
    date: string;
    highActive: boolean;
    highCapacityOhm: string;
    highCushionPrice: string;
    highLastActiveTimestamp: string;
    highMarketId?: string | null;
    highWallPrice: string;
    id: string;
    lowActive: boolean;
    lowCapacityReserve: string;
    lowCushionPrice: string;
    lowLastActiveTimestamp: string;
    lowMarketId?: string | null;
    lowWallPrice: string;
    ohmMovingAveragePrice?: string | null;
    ohmPrice?: string | null;
    operatorCushionFactor?: string | null;
    operatorReserveFactor?: string | null;
    thresholdFactor: string;
    timestamp: string;
    treasuryDebtBalance?: string | null;
    treasuryReserveAddress?: Uint8Array | null;
    treasuryReserveBalance?: string | null;
    wallSpread: string;
  }>;
};

export type UpperCushionCapacityDepletedQueryVariables = Exact<{
  sinceDate: Scalars["String"];
  belowCapacity: Scalars["BigDecimal"];
}>;

export type UpperCushionCapacityDepletedQuery = {
  __typename?: "Query";
  rangeSnapshots: Array<{
    __typename?: "RangeSnapshot";
    block: string;
    blockchain: string;
    cushionSpread: string;
    date: string;
    highActive: boolean;
    highCapacityOhm: string;
    highCushionPrice: string;
    highLastActiveTimestamp: string;
    highMarketId?: string | null;
    highWallPrice: string;
    id: string;
    lowActive: boolean;
    lowCapacityReserve: string;
    lowCushionPrice: string;
    lowLastActiveTimestamp: string;
    lowMarketId?: string | null;
    lowWallPrice: string;
    ohmMovingAveragePrice?: string | null;
    ohmPrice?: string | null;
    operatorCushionFactor?: string | null;
    operatorReserveFactor?: string | null;
    thresholdFactor: string;
    timestamp: string;
    treasuryDebtBalance?: string | null;
    treasuryReserveAddress?: Uint8Array | null;
    treasuryReserveBalance?: string | null;
    wallSpread: string;
  }>;
};

export type RangeSnapshotAtBlockQueryVariables = Exact<{
  block: Scalars["BigInt"];
}>;

export type RangeSnapshotAtBlockQuery = {
  __typename?: "Query";
  rangeSnapshots: Array<{
    __typename?: "RangeSnapshot";
    block: string;
    blockchain: string;
    cushionSpread: string;
    date: string;
    highActive: boolean;
    highCapacityOhm: string;
    highCushionPrice: string;
    highLastActiveTimestamp: string;
    highMarketId?: string | null;
    highWallPrice: string;
    id: string;
    lowActive: boolean;
    lowCapacityReserve: string;
    lowCushionPrice: string;
    lowLastActiveTimestamp: string;
    lowMarketId?: string | null;
    lowWallPrice: string;
    ohmMovingAveragePrice?: string | null;
    ohmPrice?: string | null;
    operatorCushionFactor?: string | null;
    operatorReserveFactor?: string | null;
    thresholdFactor: string;
    timestamp: string;
    treasuryDebtBalance?: string | null;
    treasuryReserveAddress?: Uint8Array | null;
    treasuryReserveBalance?: string | null;
    wallSpread: string;
  }>;
};

export type RangeSnapshotSinceBlockQueryVariables = Exact<{
  sinceBlock: Scalars["BigInt"];
}>;

export type RangeSnapshotSinceBlockQuery = {
  __typename?: "Query";
  rangeSnapshots: Array<{
    __typename?: "RangeSnapshot";
    block: string;
    blockchain: string;
    cushionSpread: string;
    date: string;
    highActive: boolean;
    highCapacityOhm: string;
    highCushionPrice: string;
    highLastActiveTimestamp: string;
    highMarketId?: string | null;
    highWallPrice: string;
    id: string;
    lowActive: boolean;
    lowCapacityReserve: string;
    lowCushionPrice: string;
    lowLastActiveTimestamp: string;
    lowMarketId?: string | null;
    lowWallPrice: string;
    ohmMovingAveragePrice?: string | null;
    ohmPrice?: string | null;
    operatorCushionFactor?: string | null;
    operatorReserveFactor?: string | null;
    thresholdFactor: string;
    timestamp: string;
    treasuryDebtBalance?: string | null;
    treasuryReserveAddress?: Uint8Array | null;
    treasuryReserveBalance?: string | null;
    wallSpread: string;
  }>;
};

export type BeatsSinceBlockQueryVariables = Exact<{
  sinceBlock: Scalars["BigInt"];
}>;

export type BeatsSinceBlockQuery = {
  __typename?: "Query";
  beats: Array<{
    __typename?: "Beat";
    block: string;
    blockchain: string;
    date: string;
    id: string;
    timestamp: string;
    transaction: Uint8Array;
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
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1000" } },
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
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "isHigh" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "transaction" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "snapshot" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "block" } },
                      { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                      { kind: "Field", name: { kind: "Name", value: "cushionSpread" } },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      { kind: "Field", name: { kind: "Name", value: "highActive" } },
                      { kind: "Field", name: { kind: "Name", value: "highCapacityOhm" } },
                      { kind: "Field", name: { kind: "Name", value: "highCushionPrice" } },
                      { kind: "Field", name: { kind: "Name", value: "highLastActiveTimestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "highMarketId" } },
                      { kind: "Field", name: { kind: "Name", value: "highWallPrice" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "lowActive" } },
                      { kind: "Field", name: { kind: "Name", value: "lowCapacityReserve" } },
                      { kind: "Field", name: { kind: "Name", value: "lowCushionPrice" } },
                      { kind: "Field", name: { kind: "Name", value: "lowLastActiveTimestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "lowMarketId" } },
                      { kind: "Field", name: { kind: "Name", value: "lowWallPrice" } },
                      { kind: "Field", name: { kind: "Name", value: "ohmMovingAveragePrice" } },
                      { kind: "Field", name: { kind: "Name", value: "ohmPrice" } },
                      { kind: "Field", name: { kind: "Name", value: "operatorCushionFactor" } },
                      { kind: "Field", name: { kind: "Name", value: "operatorReserveFactor" } },
                      { kind: "Field", name: { kind: "Name", value: "thresholdFactor" } },
                      { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "treasuryDebtBalance" } },
                      { kind: "Field", name: { kind: "Name", value: "treasuryReserveAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "treasuryReserveBalance" } },
                      { kind: "Field", name: { kind: "Name", value: "wallSpread" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RbsPriceEventsQuery, RbsPriceEventsQueryVariables>;
export const MinimumTargetPriceChangedEventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MinimumTargetPriceChangedEvents" },
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
            name: { kind: "Name", value: "minimumTargetPriceChangeds" },
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
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1000" } },
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
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "minimumTargetPrice" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "transaction" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MinimumTargetPriceChangedEventsQuery, MinimumTargetPriceChangedEventsQueryVariables>;
export const LatestRangeSnapshotDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LatestRangeSnapshot" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rangeSnapshots" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "block" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "EnumValue", value: "desc" },
              },
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1" } },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "cushionSpread" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "highActive" } },
                { kind: "Field", name: { kind: "Name", value: "highCapacityOhm" } },
                { kind: "Field", name: { kind: "Name", value: "highCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "highLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "highMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "highWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lowActive" } },
                { kind: "Field", name: { kind: "Name", value: "lowCapacityReserve" } },
                { kind: "Field", name: { kind: "Name", value: "lowCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "lowLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "lowMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "lowWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmMovingAveragePrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmPrice" } },
                { kind: "Field", name: { kind: "Name", value: "operatorCushionFactor" } },
                { kind: "Field", name: { kind: "Name", value: "operatorReserveFactor" } },
                { kind: "Field", name: { kind: "Name", value: "thresholdFactor" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryDebtBalance" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveAddress" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveBalance" } },
                { kind: "Field", name: { kind: "Name", value: "wallSpread" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LatestRangeSnapshotQuery, LatestRangeSnapshotQueryVariables>;
export const LowerCushionCapacityDepletedDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LowerCushionCapacityDepleted" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceDate" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "belowCapacity" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigDecimal" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rangeSnapshots" },
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
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1000" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "sinceDate" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "lowCapacityReserve_lt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "belowCapacity" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "ohmPrice_gt" },
                      value: { kind: "StringValue", value: "0", block: false },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "cushionSpread" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "highActive" } },
                { kind: "Field", name: { kind: "Name", value: "highCapacityOhm" } },
                { kind: "Field", name: { kind: "Name", value: "highCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "highLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "highMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "highWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lowActive" } },
                { kind: "Field", name: { kind: "Name", value: "lowCapacityReserve" } },
                { kind: "Field", name: { kind: "Name", value: "lowCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "lowLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "lowMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "lowWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmMovingAveragePrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmPrice" } },
                { kind: "Field", name: { kind: "Name", value: "operatorCushionFactor" } },
                { kind: "Field", name: { kind: "Name", value: "operatorReserveFactor" } },
                { kind: "Field", name: { kind: "Name", value: "thresholdFactor" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryDebtBalance" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveAddress" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveBalance" } },
                { kind: "Field", name: { kind: "Name", value: "wallSpread" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LowerCushionCapacityDepletedQuery, LowerCushionCapacityDepletedQueryVariables>;
export const UpperCushionCapacityDepletedDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UpperCushionCapacityDepleted" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceDate" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "belowCapacity" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigDecimal" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rangeSnapshots" },
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
                      name: { kind: "Name", value: "date_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "sinceDate" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "highCapacityOhm_lt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "belowCapacity" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "ohmPrice_gt" },
                      value: { kind: "StringValue", value: "0", block: false },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "cushionSpread" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "highActive" } },
                { kind: "Field", name: { kind: "Name", value: "highCapacityOhm" } },
                { kind: "Field", name: { kind: "Name", value: "highCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "highLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "highMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "highWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lowActive" } },
                { kind: "Field", name: { kind: "Name", value: "lowCapacityReserve" } },
                { kind: "Field", name: { kind: "Name", value: "lowCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "lowLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "lowMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "lowWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmMovingAveragePrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmPrice" } },
                { kind: "Field", name: { kind: "Name", value: "operatorCushionFactor" } },
                { kind: "Field", name: { kind: "Name", value: "operatorReserveFactor" } },
                { kind: "Field", name: { kind: "Name", value: "thresholdFactor" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryDebtBalance" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveAddress" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveBalance" } },
                { kind: "Field", name: { kind: "Name", value: "wallSpread" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpperCushionCapacityDepletedQuery, UpperCushionCapacityDepletedQueryVariables>;
export const RangeSnapshotAtBlockDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RangeSnapshotAtBlock" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "block" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rangeSnapshots" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "block" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "EnumValue", value: "desc" },
              },
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block" },
                      value: { kind: "Variable", name: { kind: "Name", value: "block" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "cushionSpread" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "highActive" } },
                { kind: "Field", name: { kind: "Name", value: "highCapacityOhm" } },
                { kind: "Field", name: { kind: "Name", value: "highCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "highLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "highMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "highWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lowActive" } },
                { kind: "Field", name: { kind: "Name", value: "lowCapacityReserve" } },
                { kind: "Field", name: { kind: "Name", value: "lowCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "lowLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "lowMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "lowWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmMovingAveragePrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmPrice" } },
                { kind: "Field", name: { kind: "Name", value: "operatorCushionFactor" } },
                { kind: "Field", name: { kind: "Name", value: "operatorReserveFactor" } },
                { kind: "Field", name: { kind: "Name", value: "thresholdFactor" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryDebtBalance" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveAddress" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveBalance" } },
                { kind: "Field", name: { kind: "Name", value: "wallSpread" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RangeSnapshotAtBlockQuery, RangeSnapshotAtBlockQueryVariables>;
export const RangeSnapshotSinceBlockDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RangeSnapshotSinceBlock" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rangeSnapshots" },
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
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1000" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "cushionSpread" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "highActive" } },
                { kind: "Field", name: { kind: "Name", value: "highCapacityOhm" } },
                { kind: "Field", name: { kind: "Name", value: "highCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "highLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "highMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "highWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lowActive" } },
                { kind: "Field", name: { kind: "Name", value: "lowCapacityReserve" } },
                { kind: "Field", name: { kind: "Name", value: "lowCushionPrice" } },
                { kind: "Field", name: { kind: "Name", value: "lowLastActiveTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "lowMarketId" } },
                { kind: "Field", name: { kind: "Name", value: "lowWallPrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmMovingAveragePrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmPrice" } },
                { kind: "Field", name: { kind: "Name", value: "operatorCushionFactor" } },
                { kind: "Field", name: { kind: "Name", value: "operatorReserveFactor" } },
                { kind: "Field", name: { kind: "Name", value: "thresholdFactor" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryDebtBalance" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveAddress" } },
                { kind: "Field", name: { kind: "Name", value: "treasuryReserveBalance" } },
                { kind: "Field", name: { kind: "Name", value: "wallSpread" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RangeSnapshotSinceBlockQuery, RangeSnapshotSinceBlockQueryVariables>;
export const BeatsSinceBlockDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "BeatsSinceBlock" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "beats" },
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
                      value: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "blockchain" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "transaction" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BeatsSinceBlockQuery, BeatsSinceBlockQueryVariables>;

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

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PriceSnapshot = {
  __typename?: "PriceSnapshot";
  block: Scalars["BigInt"];
  date: Scalars["String"];
  gOhmUsdPrice: Scalars["BigDecimal"];
  id: Scalars["ID"];
  ohmUsdPrice: Scalars["BigDecimal"];
  ohmUsdPrice1dDelta?: Maybe<Scalars["BigDecimal"]>;
  ohmUsdPrice30dVolatility?: Maybe<Scalars["BigDecimal"]>;
  timestamp: Scalars["BigInt"];
};

export type PriceSnapshotDaily = {
  __typename?: "PriceSnapshotDaily";
  id: Scalars["ID"];
  record: Scalars["String"];
};

export type PriceSnapshotDaily_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceSnapshotDaily_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<PriceSnapshotDaily_Filter>>>;
  record?: InputMaybe<Scalars["String"]>;
  record_contains?: InputMaybe<Scalars["String"]>;
  record_contains_nocase?: InputMaybe<Scalars["String"]>;
  record_ends_with?: InputMaybe<Scalars["String"]>;
  record_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  record_gt?: InputMaybe<Scalars["String"]>;
  record_gte?: InputMaybe<Scalars["String"]>;
  record_in?: InputMaybe<Array<Scalars["String"]>>;
  record_lt?: InputMaybe<Scalars["String"]>;
  record_lte?: InputMaybe<Scalars["String"]>;
  record_not?: InputMaybe<Scalars["String"]>;
  record_not_contains?: InputMaybe<Scalars["String"]>;
  record_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  record_not_ends_with?: InputMaybe<Scalars["String"]>;
  record_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  record_not_in?: InputMaybe<Array<Scalars["String"]>>;
  record_not_starts_with?: InputMaybe<Scalars["String"]>;
  record_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  record_starts_with?: InputMaybe<Scalars["String"]>;
  record_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum PriceSnapshotDaily_OrderBy {
  Id = "id",
  Record = "record",
}

export type PriceSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceSnapshot_Filter>>>;
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
  gOhmUsdPrice?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmUsdPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmUsdPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmUsdPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmUsdPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmUsdPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmUsdPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmUsdPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  ohmUsdPrice?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice1dDelta?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice1dDelta_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice1dDelta_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice1dDelta_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmUsdPrice1dDelta_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice1dDelta_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice1dDelta_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice1dDelta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmUsdPrice30dVolatility?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice30dVolatility_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice30dVolatility_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice30dVolatility_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmUsdPrice30dVolatility_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice30dVolatility_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice30dVolatility_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice30dVolatility_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmUsdPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmUsdPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmUsdPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  or?: InputMaybe<Array<InputMaybe<PriceSnapshot_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum PriceSnapshot_OrderBy {
  Block = "block",
  Date = "date",
  GOhmUsdPrice = "gOhmUsdPrice",
  Id = "id",
  OhmUsdPrice = "ohmUsdPrice",
  OhmUsdPrice1dDelta = "ohmUsdPrice1dDelta",
  OhmUsdPrice30dVolatility = "ohmUsdPrice30dVolatility",
  Timestamp = "timestamp",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  priceSnapshot?: Maybe<PriceSnapshot>;
  priceSnapshotDailies: Array<PriceSnapshotDaily>;
  priceSnapshotDaily?: Maybe<PriceSnapshotDaily>;
  priceSnapshots: Array<PriceSnapshot>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryPriceSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceSnapshotDailiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshotDaily_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceSnapshotDaily_Filter>;
};

export type QueryPriceSnapshotDailyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceSnapshot_Filter>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  priceSnapshot?: Maybe<PriceSnapshot>;
  priceSnapshotDailies: Array<PriceSnapshotDaily>;
  priceSnapshotDaily?: Maybe<PriceSnapshotDaily>;
  priceSnapshots: Array<PriceSnapshot>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionPriceSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceSnapshotDailiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshotDaily_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceSnapshotDaily_Filter>;
};

export type SubscriptionPriceSnapshotDailyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceSnapshot_Filter>;
};

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

export type LatestPriceSnapshotQueryVariables = Exact<{ [key: string]: never }>;

export type LatestPriceSnapshotQuery = {
  __typename?: "Query";
  priceSnapshots: Array<{
    __typename?: "PriceSnapshot";
    block: string;
    date: string;
    gOhmUsdPrice: string;
    id: string;
    ohmUsdPrice: string;
    ohmUsdPrice1dDelta?: string | null;
    ohmUsdPrice30dVolatility?: string | null;
    timestamp: string;
  }>;
};

export const LatestPriceSnapshotDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LatestPriceSnapshot" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "priceSnapshots" },
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
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "gOhmUsdPrice" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "ohmUsdPrice" } },
                { kind: "Field", name: { kind: "Name", value: "ohmUsdPrice1dDelta" } },
                { kind: "Field", name: { kind: "Name", value: "ohmUsdPrice30dVolatility" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LatestPriceSnapshotQuery, LatestPriceSnapshotQueryVariables>;

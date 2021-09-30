import { ListingToken } from "../../../types/models/listing-token.interface";

export interface ListingQueryResponse {
  Items: Array<ListingQueryResponseItem>;
  Count: number;
  ScannedCount: number;
  LastEvaluatedKey?: ListingToken
}

export interface ListingQueryResponseItem {
  sk: string; // partition key
  metres: number;  // sort key
  name: string;
  pk: string;
}
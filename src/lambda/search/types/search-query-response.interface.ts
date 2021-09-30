import { SearchToken } from "../../../types/models/search-token.interface";

export interface SearchQueryResponse {
  Items: Array<SearchQueryResponseItem>;
  Count: number;
  ScannedCount: number;
  LastEvaluatedKey?: SearchToken
}

export interface SearchQueryResponseItem {
  sk: string; // partition key
  label: string; // sort key
  pk: string;
}
import { SearchToken } from "../models/search-token.interface";

export interface SearchAPIResponse {
  next?: SearchToken;
  items: Array<SearchAPIResponseItem>;
}

export interface SearchAPIResponseItem {
  id: string;
  label: string;
}

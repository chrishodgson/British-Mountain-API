import { SearchToken } from "../models/search-token.interface";

export interface SearchAPIRequest {
  country: string;
  label: string;
  lastKey?: SearchToken;
}


import { ListingToken } from "../models/listing-token.interface";

export interface ListingAPIRequest {
  type: string;
  value1: string;
  value2?: string;
  lastKey?: ListingToken;
}


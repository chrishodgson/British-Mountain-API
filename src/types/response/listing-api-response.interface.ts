import { ListingToken } from "../models/listing-token.interface";

export interface ListingAPIResponse {
  next?: ListingToken;
  items: Array<ListingAPIResponseItem>;
}

export interface ListingAPIResponseItem {
  id: string;
  name: string;
  metres: number;
}

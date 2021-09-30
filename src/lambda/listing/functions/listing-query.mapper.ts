import { ListingAPIResponse, ListingAPIResponseItem } from "../../../types/response/listing-api-response.interface";
import { ListingQueryResponse, ListingQueryResponseItem } from "../types/listing-query-response.interface";

export const mapListingQueryResponse = (response: ListingQueryResponse): ListingAPIResponse => ({
  ...response.LastEvaluatedKey && { next: response.LastEvaluatedKey },
  items: response.Items.map((item: ListingQueryResponseItem): ListingAPIResponseItem => ({
    id: item.pk,
    name: item.name,
    metres: item.metres
  }))
})
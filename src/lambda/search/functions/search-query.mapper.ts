import { SearchAPIResponse, SearchAPIResponseItem } from "../../../types/response/search-api-response.interface";
import { SearchQueryResponse, SearchQueryResponseItem } from "../types/search-query-response.interface";

export const mapSearchQueryResponse = (response: SearchQueryResponse): SearchAPIResponse => ({
  ...response.LastEvaluatedKey && { next: response.LastEvaluatedKey },
  items: response.Items.map((item: SearchQueryResponseItem): SearchAPIResponseItem => ({
    id: item.pk,
    label: item.label
  }))
})

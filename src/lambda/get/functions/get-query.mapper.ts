import { GetAPIResponse } from "../../../types/response/get-api-response.interface";
import { GetQueryResponse } from "../types/get-query-response.interface";

export const mapGetQueryResponse = (response: GetQueryResponse): GetAPIResponse => {
  const item = response.Items[0]

  return {
    id: item.pk,
    metres: item.metres,
    name: item.name
  }
}
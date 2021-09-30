export interface GetQueryResponse {
  Items: Array<GetQueryResponseItem>;
  Count: number;
}
export interface GetQueryResponseItem {
  sk: string; // partition key
  pk: string; // sort key
  name: string;
  metres: number;
  gridref: string;
}
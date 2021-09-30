import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { database } from "../../../common/functions/aws-resources.function";
import { mapSearchQueryResponse } from "./search-query.mapper";
import { SearchAPIRequest } from "../../../types/request/search-api-request.interface";
import { SearchAPIResponse } from "../../../types/response/search-api-response.interface";
import { SearchQueryResponse } from "../types/search-query-response.interface";
import { ItemNotFoundException } from "../../../common/errors/item-not-found.error";

function buildQueryInput(payload: SearchAPIRequest): DocumentClient.QueryInput {
  const { label, country, lastKey } = payload;
  return  {
    TableName: "Mountain",
    IndexName: "Index-sk-label",
    KeyConditionExpression: "sk = :sk and begins_with(label, :label)",
    ExpressionAttributeValues: {
      ":sk": `country#${country}`,
      ":label": label
    },
    ...lastKey && { ExclusiveStartKey: lastKey },
    Limit: 50
  }
}

export const searchMountains = async (payload: SearchAPIRequest): Promise<SearchAPIResponse> => {
  const response: DocumentClient.QueryOutput = await database().query(buildQueryInput(payload)).promise();
  if (!response.Count) {
    throw new ItemNotFoundException()
  }
  return mapSearchQueryResponse(response as SearchQueryResponse);
}

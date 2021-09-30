import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { database } from "../../../common/functions/aws-resources.function";
import { ListingAPIResponse } from "../../../types/response/listing-api-response.interface";
import { ListingAPIRequest } from "../../../types/request/listing-api-request.interface";
import { mapListingQueryResponse } from "./listing-query.mapper";
import { ListingQueryResponse } from "../types/listing-query-response.interface";
import { ItemNotFoundException } from "../../../common/errors/item-not-found.error";

function buildQueryInput(payload: ListingAPIRequest): DocumentClient.QueryInput {
  const { type, value1, value2, lastKey } = payload;
  let skValue  = value1.replace(/\s+/g, "_")
  if (value2) {
    skValue += "#" + value2.replace(/\s+/g, "_")
  }

  return  {
    TableName: "Mountain",
    IndexName: "Index-sk-metres",
    KeyConditionExpression: "sk = :sk",
    ExpressionAttributeValues: {
      ":sk": `${type}#${skValue}`
    },
    ...lastKey && { ExclusiveStartKey: lastKey },
    Limit: 50
  }
}

export const getListing = async (payload: ListingAPIRequest): Promise<ListingAPIResponse> => {
  const response: DocumentClient.QueryOutput = await database().query(buildQueryInput(payload)).promise();
  if (!response.Count) {
    throw new ItemNotFoundException()
  }
  return mapListingQueryResponse(response as ListingQueryResponse);
}

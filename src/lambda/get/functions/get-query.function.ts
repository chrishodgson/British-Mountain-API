import { ItemNotFoundException } from "../../../common/errors/item-not-found.error";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { database } from "../../../common/functions/aws-resources.function";
import { GetAPIResponse } from "../../../types/response/get-api-response.interface";
import { GetQueryResponse } from "../types/get-query-response.interface";
import { mapGetQueryResponse } from "./get-query.mapper";

function buildQueryInput(id: string): DocumentClient.QueryInput {
  return  {
    TableName: "Mountain",
    KeyConditionExpression: "pk = :pk and sk = :sk",
    ExpressionAttributeValues: {
      ":pk": id,
      ":sk": "main",
    }
  }
}

export const getMountain = async (id: string): Promise<GetAPIResponse> => {
  const response: DocumentClient.QueryOutput = await database().query(buildQueryInput(id)).promise();
  if (!response.Count) {
    throw new ItemNotFoundException()
  }
  return mapGetQueryResponse(response as GetQueryResponse);
}

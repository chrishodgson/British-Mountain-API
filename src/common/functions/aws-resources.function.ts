import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import * as AWS from "aws-sdk";

const isDevelopmentMode = (): boolean => process.env.ENV === "TEST";

export const database = (): DocumentClient =>
  new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
    convertEmptyValues: true,
    ...(isDevelopmentMode() && {endpoint: process.env.DYNAMODB_ENDPOINT})
  });
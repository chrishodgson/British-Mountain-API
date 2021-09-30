import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getErrorStatus } from "../../common/functions/get-error-status.function";
import { get } from "../../common/functions/get.function"
import { response } from "../../common/functions/response.function";
import { getListing } from "./functions/listing-query.function";
import { ListingToken } from "../../types/models/listing-token.interface";
import { ListingTypes } from "./types/listing-types.enum";
import { ListingAPIRequest } from "../../types/request/listing-api-request.interface";

function validatePayload(payload: ListingAPIRequest): void {
  const { type, value2 } = payload;
  const isValue2Required = ["classCounty", "classRegion", "classArea"].includes(type);

  if (!Object.values(ListingTypes).includes(type as ListingTypes)) {
    throw new Error(`type parmeter ${type} is not supported`)
  }
  if (isValue2Required && !value2) {
    throw new Error(`value2 is required when using type parameter ${type}`)
  }
  if (!isValue2Required && value2) {
    throw new Error(`value2 is not required when using type parameter ${type}`)
  }
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
		const type = get(event, "queryStringParameters.type", null);
		const value1: string = get(event, "queryStringParameters.value1", null);
		const value2: string = get(event, "queryStringParameters.value2", null);
		const lastKey: ListingToken = JSON.parse(get(event, "queryStringParameters.lastKey", null));
		const payload: ListingAPIRequest = { type, value1, value2, lastKey }

		validatePayload(payload)

		return response(await getListing(payload), 200);
  } catch (e) {
    return response({ message: e.toString() }, getErrorStatus(e), e);
  }
};

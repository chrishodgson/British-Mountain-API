import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getErrorStatus } from "../../common/functions/get-error-status.function";
import { get } from "../../common/functions/get.function"
import { response } from "../../common/functions/response.function";
import { SearchToken } from "../../types/models/search-token.interface";
import { SearchAPIRequest } from "../../types/request/search-api-request.interface";
import { searchMountains } from "./functions/search-query.function";

function validateRequest(payload: SearchAPIRequest): void {
  const { country, label } = payload;
  if (!country || !label) {
    throw new Error(`country and label are required parameters`)
  }
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
		const country = get(event, "queryStringParameters.country", null);
		const label: string = get(event, "queryStringParameters.label", null);
		const lastKey: SearchToken = JSON.parse(get(event, "queryStringParameters.lastKey", null));
		const payload: SearchAPIRequest = { country, label, lastKey }

		validateRequest(payload)

		return response(await searchMountains(payload), 200);
  } catch (e) {
    return response({ message: e.toString() }, getErrorStatus(e), e);
  }
};

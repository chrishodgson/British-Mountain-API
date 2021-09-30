import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getErrorStatus } from "../../common/functions/get-error-status.function";
import { get } from "../../common/functions/get.function"
import { response } from "../../common/functions/response.function";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const throwError = get(event, "queryStringParameters.throw", null);
    if (throwError) {
      throw new Error('hello error')
    }
    return response('hello success', 200);
  } catch (e) {
    return response({ message: e.toString() }, getErrorStatus(e), e);
  }
};

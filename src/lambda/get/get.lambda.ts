import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getErrorStatus } from "../../common/functions/get-error-status.function";
import { get } from "../../common/functions/get.function"
import { response } from "../../common/functions/response.function";
import { getMountain } from "./functions/get-query.function";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const id = get(event, "pathParameters.id", null);

    return response(await getMountain(id), 200);
  } catch (e) {
    return response({ message: e.toString() }, getErrorStatus(e), e);
  }
};

import { APIGatewayProxyResult } from "aws-lambda";
import { getErrorStatus } from "../../common/functions/get-error-status.function";
import { response } from "../../common/functions/response.function";
import { parseFile } from "./functions/import-file.function";

export const handler = async (): Promise<APIGatewayProxyResult> => {
  try {
    const filename = "../../data/DoBIH_v17_1_1.csv"

    return response(await parseFile(filename), 200);

		// return response(await importMountains(filename), 200);
  } catch (e) {
    return response({ message: e.toString() }, getErrorStatus(e), e);
  }
};

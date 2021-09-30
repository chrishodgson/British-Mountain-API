import { LambdaResponse } from "../types/lambda-response.interface";

export async function response(data: unknown, statusCode: number, error?: Error): Promise<LambdaResponse> {
  if (error) {
    console.log(error);
  }
  return {
    body: JSON.stringify(data),
    statusCode
  } as LambdaResponse;
}

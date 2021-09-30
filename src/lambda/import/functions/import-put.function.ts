// import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
// import { database } from "../../../common/functions/aws-resources.function";

// function buildTransactWriteInput(): DocumentClient.TransactWriteItemsInput {
//   return  {
//     TableName: "Mountain",
//     ConditionExpression: "attribute_not_exists(pk)",
//     Item: {
//       // pk: order.orderId,
//       // sk: `order#${order.buyerId}`,
//     }
//   }
// }

// export const importMountains = async (items: Array<any>): Promise<any> => {
//   return Promise.all(items.map(item => {
//     const response: any = database().transactWrite(buildTransactWriteInput(item)).promise();
//     if (response.Count) {
//       return mapSearchQueryResponse(response);
//     }
//   })
// }

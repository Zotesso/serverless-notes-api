import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    tableName: process.env.tableName,
    KeyConditionExpression: "userid = :userid",
    ExpressionAttributeValues: {
      ":userid": "123",
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});
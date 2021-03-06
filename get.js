import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    tableName: process.env.tableName,
    Key: {
      userid: "123",
      noteid: event.pathParameters.id,
    },
  };

  const result = await dynamoDb.get(params);
  if(!result.Item) {
    throw new Error('Item not found');
  }

  return result.Item;
});
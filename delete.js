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

  await dynamoDb.delete(params);

  return { status: true };
});
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';

const client = new SNSClient({ region: 'eu-central-1' });

export const handler = async ({
  body,
}: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const response: APIGatewayProxyResult = {
    statusCode: 400,
    body: 'Invalid Request',
  };

  if (body) {
    try {
      await client.send(
        new PublishCommand({
          TopicArn: 'arn:aws:sns:eu-central-1:841152197398:artSubmission',
          Message: body,
        })
      );
      response.statusCode = 200;
      response.body = 'Send successfully';
    } catch (err) {
      response.body = JSON.stringify(err);
      console.log(err);
      return err;
    }
  }

  return response;
};

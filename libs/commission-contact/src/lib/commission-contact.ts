import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';
import { CommissionContact } from '@commission-site/commission-shared';

const client = new SNSClient({ region: 'eu-central-1' });

export const error = (
  error: any,
  statusCode: number
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify({ error }),
  };
};

export const success = (
  message: string,
  statusCode = 200
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify({ message }),
  };
};

export const handler = async ({
  body,
}: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (!body) {
    return error('Body missing', 400);
  }

  const contact = JSON.parse(body) as CommissionContact;

  if (
    !contact.name ||
    !contact.email ||
    contact.name?.length > 100 ||
    contact.email?.length > 100 ||
    contact.message?.length > 1000
  ) {
    return error('Validation failed', 400);
  }

  try {
    await client.send(
      new PublishCommand({
        TopicArn: 'arn:aws:sns:eu-central-1:841152197398:artSubmission',
        Message: body,
      })
    );
    return success('Send successfully');
  } catch (err) {
    console.log(err);
    return error(err, 500);
  }
};

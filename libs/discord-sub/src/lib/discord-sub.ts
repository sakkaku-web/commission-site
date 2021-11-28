import { SNSEvent } from 'aws-lambda';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';
import { MessageEmbed, WebhookClient } from 'discord.js';

const client = new SSMClient({ region: 'eu-central-1' });

export const handler = async (event: SNSEvent) => {
  try {
    const response = await client.send(
      new GetParameterCommand({ Name: 'discord_art_commission' })
    );
    const [id, token] = response.Parameter.Value.split('/');

    const webhookClient = new WebhookClient(id, token);

    const embeds = event.Records.map((r) =>
      new MessageEmbed()
        .setTitle('Art Commision Request')
        .setDescription(JSON.stringify(r.Sns.Message))
    );

    await webhookClient.send({
      embeds,
    });
  } catch (e) {
    console.log(e);
  }
};

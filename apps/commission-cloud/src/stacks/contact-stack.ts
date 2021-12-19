import { Runtime, Code, Function } from '@aws-cdk/aws-lambda';
import { RetentionDays } from '@aws-cdk/aws-logs';
import { Effect, PolicyStatement } from '@aws-cdk/aws-iam';
import { Topic } from '@aws-cdk/aws-sns';
import { LambdaSubscription } from '@aws-cdk/aws-sns-subscriptions';
import { Construct } from '@aws-cdk/core';
import { join } from 'path';

export function setupContactNotification(scope: Construct, libsPath: string) {
  const contactFunction = new Function(scope, 'commissionContact', {
    runtime: Runtime.NODEJS_14_X,
    code: Code.fromAsset(join(libsPath, 'commission-contact')),
    handler: 'lambda-commission-contact.handler',
    logRetention: RetentionDays.ONE_MONTH,
  });

  const contactTopic = new Topic(scope, 'artSubmission', {
    displayName: 'Art Submission Contact',
    topicName: 'artSubmission',
  });

  const snsPublish = new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ['sns:Publish'],
    resources: [contactTopic.topicArn],
  });
  contactFunction.addToRolePolicy(snsPublish);

  const discordSubFunction = new Function(scope, 'discordSub', {
    runtime: Runtime.NODEJS_14_X,
    code: Code.fromAsset(join(libsPath, 'discord-sub')),
    handler: 'lambda-discord-sub.handler',
    logRetention: RetentionDays.ONE_MONTH,
  });

  const ssmDiscordRead = new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ['ssm:GetParameter'],
    resources: ['arn:aws:ssm:eu-central-1:841152197398:parameter/discord_*'],
  });
  discordSubFunction.addToRolePolicy(ssmDiscordRead);

  contactTopic.addSubscription(new LambdaSubscription(discordSubFunction));

  return { contactFunction, contactTopic };
}

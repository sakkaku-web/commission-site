import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
import { Topic } from '@aws-cdk/aws-sns';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda';
import { RetentionDays } from '@aws-cdk/aws-logs';
import { HttpApi, HttpMethod, CorsHttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { LambdaSubscription } from '@aws-cdk/aws-sns-subscriptions';
import { Effect, PolicyStatement } from '@aws-cdk/aws-iam';
import { join } from 'path';

const dist = (path: string) => join('../../dist/', path);

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new HttpApi(this, 'commissionApi', {
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [CorsHttpMethod.POST],
      },
    });

    const contactFunction = new Function(this, 'commissionContact', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(dist('libs/commission-contact')),
      handler: 'commission-contact.handler',
      logRetention: RetentionDays.ONE_MONTH,
    });

    api.addRoutes({
      path: '/contact',
      methods: [HttpMethod.POST],
      integration: new LambdaProxyIntegration({
        handler: contactFunction,
      }),
    });

    const topic = new Topic(this, 'artSubmission', {
      displayName: 'Art Submission Contact',
      topicName: 'artSubmission',
    });

    const snsPublish = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['sns:Publish'],
      resources: [topic.topicArn],
    })
    contactFunction.addToRolePolicy(snsPublish);

    const discordSubFunction = new Function(this, 'discordSub', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(dist('libs/discord-sub')),
      handler: 'discord-sub.handler',
      logRetention: RetentionDays.ONE_MONTH,
    });

    const ssmDiscordRead = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['ssm:GetParameter'],
      resources: ['arn:aws:ssm:eu-central-1:841152197398:parameter/discord_*'],
    });
    discordSubFunction.addToRolePolicy(ssmDiscordRead);

    topic.addSubscription(new LambdaSubscription(discordSubFunction));

    new CfnOutput(this, 'apiUrl', {
      value: api.url,
    });
  }
}

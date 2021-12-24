import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
import { HttpApi, HttpMethod, CorsHttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { setupContactNotification } from './contact-stack';
import { setupManagementFunctions } from './management-stack';
import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers';
import { Effect, PolicyStatement } from '@aws-cdk/aws-iam';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new HttpApi(this, 'commissionApi', {
      corsPreflight: {
        allowOrigins: [
          'http://localhost:4200',
          'https://sakkaku-web.github.io',
        ],
        allowHeaders: ['Authorization'],
        allowMethods: [CorsHttpMethod.ANY],
        allowCredentials: true,
      },
    });

    const lambdaFolder = '../../dist/libs/lambda';

    const { contactFunction, contactTopic } = setupContactNotification(
      this,
      lambdaFolder
    );
    api.addRoutes({
      path: '/contact',
      methods: [HttpMethod.POST],
      integration: new HttpLambdaIntegration('postContact', contactFunction),
    });

    const {
      getCommissionMetaFunction,
      postCommissionMetaFunction,
      managementUserPool,
    } = setupManagementFunctions(this, lambdaFolder);
    api.addRoutes({
      path: '/commission-meta',
      methods: [HttpMethod.GET],
      integration: new HttpLambdaIntegration(
        'getCommissionMeta',
        getCommissionMetaFunction
      ),
    });

    const authorizer = new HttpUserPoolAuthorizer(
      'managementAuthorizer',
      managementUserPool
    );
    api.addRoutes({
      path: '/commission-meta',
      methods: [HttpMethod.POST],
      integration: new HttpLambdaIntegration(
        'postCommissionMeta',
        postCommissionMetaFunction
      ),
      authorizer,
    });

    contactFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['lambda:InvokeFunction'],
        resources: [getCommissionMetaFunction.functionArn],
      })
    );

    new CfnOutput(this, 'apiUrl', { value: api.url });
    new CfnOutput(this, 'contactTopic', { value: contactTopic.topicArn });
  }
}

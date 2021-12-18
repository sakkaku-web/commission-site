import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
import { HttpApi, HttpMethod, CorsHttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { setupContactNotification } from './contact-stack';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new HttpApi(this, 'commissionApi', {
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [CorsHttpMethod.POST],
      },
    });

    const { contactFunction } = setupContactNotification(this, '../../dist');

    api.addRoutes({
      path: '/contact',
      methods: [HttpMethod.POST],
      integration: new LambdaProxyIntegration({
        handler: contactFunction,
      }),
    });

    new CfnOutput(this, 'apiUrl', {
      value: api.url,
    });
  }
}

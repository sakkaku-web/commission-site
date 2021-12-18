import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
import { HttpApi, HttpMethod, CorsHttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { setupContactNotification } from './contact-stack';
import { setupManagementFunctions } from './management-stack';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new HttpApi(this, 'commissionApi', {
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [CorsHttpMethod.POST],
      },
    });

    const lambdaFolder = '../../dist/libs/lambda';

    const { contactFunction } = setupContactNotification(this, lambdaFolder);
    api.addRoutes({
      path: '/contact',
      methods: [HttpMethod.POST],
      integration: new LambdaProxyIntegration({
        handler: contactFunction,
      }),
    });

    const { getCommissionMetaFunction, postCommissionMetaFunction } =
      setupManagementFunctions(this, lambdaFolder);
    api.addRoutes({
      path: '/commission-meta',
      methods: [HttpMethod.GET],
      integration: new LambdaProxyIntegration({
        handler: getCommissionMetaFunction,
      }),
    });

    new CfnOutput(this, 'apiUrl', {
      value: api.url,
    });
  }
}

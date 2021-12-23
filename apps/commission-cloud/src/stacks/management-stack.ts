import { AttributeType, Table } from '@aws-cdk/aws-dynamodb';
import { Construct } from '@aws-cdk/core';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { UserPool } from '@aws-cdk/aws-cognito';
import { RetentionDays } from '@aws-cdk/aws-logs';
import {
  commissionTable,
  commissionTableKey,
} from '../../../../libs/commission-shared/src';
import { join } from 'path';

export function setupManagementFunctions(scope: Construct, libsPath: string) {
  const table = new Table(scope, 'commissionTable', {
    tableName: commissionTable,
    partitionKey: {
      name: commissionTableKey,
      type: AttributeType.STRING,
    },
  });

  const getCommissionMetaFunction = new Function(scope, 'getCommissionMeta', {
    functionName: 'GetCommissionMeta',
    runtime: Runtime.NODEJS_14_X,
    code: Code.fromAsset(join(libsPath, 'commission-meta')),
    handler: 'lambda-commission-meta.getHandler',
    logRetention: RetentionDays.ONE_MONTH,
  });

  table.grantReadData(getCommissionMetaFunction);

  const postCommissionMetaFunction = new Function(scope, 'postCommissionMeta', {
    runtime: Runtime.NODEJS_14_X,
    code: Code.fromAsset(join(libsPath, 'commission-meta')),
    handler: 'lambda-commission-meta.postHandler',
    logRetention: RetentionDays.ONE_MONTH,
  });

  table.grantWriteData(postCommissionMetaFunction);

  const managementUserPool = new UserPool(scope, 'managementUserPool', {
    userPoolName: 'managementUserPool',
  });

  return { getCommissionMetaFunction, postCommissionMetaFunction, managementUserPool };
}

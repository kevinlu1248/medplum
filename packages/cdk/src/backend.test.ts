import { BackEnd } from './backend';
import { MedplumInfraConfig } from '@medplum/core';
import { Stack } from 'aws-cdk-lib';
import { expect as expectCDK, haveResource } from '@aws-cdk/assert';

describe('BackEnd', () => {
  const config: MedplumInfraConfig = {
    name: 'test',
    region: 'us-west-2',
    accountNumber: '123456789012',
    stackName: 'test-stack',
    domainName: 'test.com',
    apiDomainName: 'api.test.com',
    apiSslCertArn: 'arn:aws:acm:us-west-2:123456789012:certificate/abcdef01-1234-5678-abcd-ef0123456789',
    serverImage: 'server-image',
    serverMemory: 512,
    serverCpu: 256,
    desiredServerCount: 1,
    rdsInstances: 1,
    maxAzs: 2,
    apiPort: 3000,
    apiInternetFacing: true,
    loadBalancerLoggingBucket: 'logging-bucket',
    loadBalancerLoggingPrefix: 'logging-prefix',
    skipDns: false,
  };

  const stack = new Stack();

  it('creates resources', () => {
    new BackEnd(stack, config);

    expectCDK(stack).to(haveResource('AWS::ECS::Cluster'));
    expectCDK(stack).to(haveResource('AWS::ECS::TaskDefinition'));
    expectCDK(stack).to(haveResource('AWS::ECS::Service'));
    expectCDK(stack).to(haveResource('AWS::ElasticLoadBalancingV2::LoadBalancer'));
    expectCDK(stack).to(haveResource('AWS::WAFv2::WebACL'));
    expectCDK(stack).to(haveResource('AWS::WAFv2::WebACLAssociation'));
    expectCDK(stack).to(haveResource('AWS::Route53::RecordSet'));
    expectCDK(stack).to(haveResource('AWS::SSM::Parameter'));
  });
});

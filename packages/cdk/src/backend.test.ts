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
    apiSslCertArn: 'arn:aws:acm:us-west-2:123456789012:certificate/12345678-1234-1234-1234-123456789012',
    serverImage: 'test-server-image',
    serverMemory: 512,
    serverCpu: 256,
    desiredServerCount: 1,
    maxAzs: 2,
    rdsInstanceType: 'db.t3.micro',
    rdsInstances: 1,
    cacheNodeType: 'cache.t3.micro',
  };

  const app = new Stack();
  const backend = new BackEnd(app, config);

  test('VPC is created', () => {
    expectCDK(app).to(haveResource('AWS::EC2::VPC'));
  });

  test('RDS cluster is created', () => {
    expectCDK(app).to(haveResource('AWS::RDS::DBCluster'));
  });

  test('Redis cluster is created', () => {
    expectCDK(app).to(haveResource('AWS::ElastiCache::ReplicationGroup'));
  });

  test('ECS cluster is created', () => {
    expectCDK(app).to(haveResource('AWS::ECS::Cluster'));
  });

  test('Load balancer is created', () => {
    expectCDK(app).to(haveResource('AWS::ElasticLoadBalancingV2::LoadBalancer'));
  });

  test('WAF is created', () => {
    expectCDK(app).to(haveResource('AWS::WAFv2::WebACL'));
  });

  test('DNS record is created', () => {
    expectCDK(app).to(haveResource('AWS::Route53::RecordSet'));
  });
});

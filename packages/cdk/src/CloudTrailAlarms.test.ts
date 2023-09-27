import { CloudTrailAlarms } from './stack';
import { MedplumInfraConfig } from '@medplum/core';
import { App } from 'aws-cdk-lib';

describe('CloudTrailAlarms', () => {
  let app: App;
  let config: MedplumInfraConfig;

  beforeEach(() => {
    app = new App();
    config = {
      stackName: 'test-stack',
      region: 'us-east-1',
      accountNumber: '123456789012',
      name: 'test',
    };
  });

  test('should create a new CloudTrailAlarms instance', () => {
    const cloudTrailAlarms = new CloudTrailAlarms(app, config);
    expect(cloudTrailAlarms).toBeDefined();
  });

  test('should call init method without errors', () => {
    const cloudTrailAlarms = new CloudTrailAlarms(app, config);
    expect(cloudTrailAlarms.init).toBeDefined();
    expect(() => cloudTrailAlarms.init()).not.toThrow();
  });

  test('should call deploy method without errors', () => {
    const cloudTrailAlarms = new CloudTrailAlarms(app, config);
    expect(cloudTrailAlarms.deploy).toBeDefined();
    expect(() => cloudTrailAlarms.deploy()).not.toThrow();
  });
});

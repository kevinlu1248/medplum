import { expect } from '@jest/globals';
import { App } from 'aws-cdk-lib';
import { MedplumInfraConfig, CloudTrailAlarms } from './stack';

describe('CloudTrailAlarms', () => {
  it('should instantiate without errors', () => {
    const config: MedplumInfraConfig = {
      name: 'test',
      region: 'us-east-1',
      accountNumber: '123456789012',
      stackName: 'TestStack',
    };
    const app = new App();
    const cloudTrailAlarms = new CloudTrailAlarms(app, config);
    expect(cloudTrailAlarms).toBeInstanceOf(CloudTrailAlarms);
  });
});

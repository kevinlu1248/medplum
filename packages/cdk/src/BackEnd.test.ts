import { expect } from '@jest/globals';
import { App } from 'aws-cdk-lib';
import { MedplumInfraConfig, BackEnd } from './stack';

describe('BackEnd', () => {
  it('should instantiate without errors', () => {
    const config: MedplumInfraConfig = {
      name: 'test',
      region: 'us-east-1',
      accountNumber: '123456789012',
      stackName: 'TestStack',
    };
    const app = new App();
    const backEnd = new BackEnd(app, config);
    expect(backEnd).toBeInstanceOf(BackEnd);
  });
});

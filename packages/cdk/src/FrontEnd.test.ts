import { expect } from '@jest/globals';
import { App } from 'aws-cdk-lib';
import { MedplumInfraConfig, FrontEnd } from './stack';

describe('FrontEnd', () => {
  it('should instantiate without errors', () => {
    const config: MedplumInfraConfig = {
      name: 'test',
      region: 'us-east-1',
      accountNumber: '123456789012',
      stackName: 'TestStack',
    };
    const app = new App();
    const frontEnd = new FrontEnd(app, config, config.region);
    expect(frontEnd).toBeInstanceOf(FrontEnd);
  });
});

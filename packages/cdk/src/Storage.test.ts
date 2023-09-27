import { expect } from '@jest/globals';
import { App } from 'aws-cdk-lib';
import { MedplumInfraConfig, Storage } from './stack';

describe('Storage', () => {
  it('should instantiate without errors', () => {
    const config: MedplumInfraConfig = {
      name: 'test',
      region: 'us-east-1',
      accountNumber: '123456789012',
      stackName: 'TestStack',
    };
    const app = new App();
    const storage = new Storage(app, config, config.region);
    expect(storage).toBeInstanceOf(Storage);
  });
});

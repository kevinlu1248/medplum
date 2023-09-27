import { Storage } from './stack';
import { MedplumInfraConfig } from '@medplum/core';
import { App } from 'aws-cdk-lib';

describe('Storage', () => {
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

  test('should create a new Storage instance', () => {
    const storage = new Storage(app, config, 'us-east-1');
    expect(storage).toBeDefined();
  });

  // Add more tests for each function or method in the Storage component
  // Ensure to cover all possible execution paths in your tests
});

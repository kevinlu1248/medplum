import { App } from 'aws-cdk-lib';
import { BackEnd } from './backend';
import { MedplumInfraConfig } from '@medplum/core';
import { MedplumPrimaryStack } from './stack';

describe('BackEnd', () => {
  let app: App;
  let config: MedplumInfraConfig;
  let stack: MedplumPrimaryStack;

  beforeEach(() => {
    app = new App();
    config = {
      stackName: 'testStack',
      name: 'testName',
      region: 'testRegion',
      accountNumber: 'testAccountNumber',
    };
    stack = new MedplumPrimaryStack(app, config);
  });

  test('BackEnd is created', () => {
    const backEnd = new BackEnd(stack, config);
    expect(backEnd).toBeDefined();
  });

  // Add more tests as needed for different functionalities of the BackEnd component
});

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

  test('BackEnd is added to MedplumPrimaryStack', () => {
    const backEnd = new BackEnd(stack, config);
    expect(stack.backEnd).toEqual(backEnd);
  });

  test('BackEnd initializes properties from MedplumInfraConfig', () => {
    const backEnd = new BackEnd(stack, config);
    expect(backEnd.stackName).toEqual(config.stackName);
    expect(backEnd.name).toEqual(config.name);
    expect(backEnd.region).toEqual(config.region);
    expect(backEnd.accountNumber).toEqual(config.accountNumber);
  });

  test('BackEnd handles changes in MedplumInfraConfig', () => {
    const backEnd = new BackEnd(stack, config);
    config.stackName = 'newTestStack';
    config.name = 'newTestName';
    config.region = 'newTestRegion';
    config.accountNumber = 'newTestAccountNumber';
    backEnd.updateConfig(config);
    expect(backEnd.stackName).toEqual(config.stackName);
    expect(backEnd.name).toEqual(config.name);
    expect(backEnd.region).toEqual(config.region);
    expect(backEnd.accountNumber).toEqual(config.accountNumber);
  });

  test('BackEnd handles errors during initialization', () => {
    expect(() => new BackEnd(stack, null)).toThrow();
  });

  // Add more tests as needed for different functionalities of the BackEnd component
});

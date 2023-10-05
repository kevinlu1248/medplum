import { MedplumInfraConfig } from '@medplum/core';
import { App } from 'aws-cdk-lib';
import { BackEnd } from './stack';
import { mock, MockProxy } from 'jest-mock-extended';

let app: MockProxy<App> & App;
let config: MedplumInfraConfig;

beforeEach(() => {
  app = mock<App>();
  config = {
    stackName: 'test-stack',
    region: 'us-east-1',
    accountNumber: '123456789012',
    name: 'test',
  };
});

describe('BackEnd', () => {
  test('constructor', () => {
    const backEnd = new BackEnd(app, config);
    expect(backEnd).toBeDefined();
  });

  // Add more test cases here for different functionalities of the 'BackEnd' component
});

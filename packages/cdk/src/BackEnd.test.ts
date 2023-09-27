import { BackEnd } from './stack';
import { MedplumInfraConfig } from '@medplum/core';
import { App } from 'aws-cdk-lib';

describe('BackEnd', () => {
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

  test('should create a new BackEnd instance', () => {
    const backEnd = new BackEnd(app, config);
    expect(backEnd).toBeDefined();
  });

  test('should call init method without errors', () => {
    const backEnd = new BackEnd(app, config);
    expect(backEnd.init).toBeDefined();
    expect(() => backEnd.init()).not.toThrow();
  });

  test('should call deploy method without errors', () => {
    const backEnd = new BackEnd(app, config);
    expect(backEnd.deploy).toBeDefined();
    expect(() => backEnd.deploy()).not.toThrow();
  });
});

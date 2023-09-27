import { App } from 'aws-cdk-lib';
import { MedplumInfraConfig, BackEnd } from './stack';

describe('BackEnd', () => {
  let app: App;
  let config: MedplumInfraConfig;
  let backEnd: BackEnd;

  beforeEach(() => {
    app = new App();
    config = {
      stackName: 'test-stack',
      region: 'us-east-1',
      accountNumber: '123456789012',
      name: 'test',
    };
    backEnd = new BackEnd(app, config);
  });

  test('BackEnd is created', () => {
    expect(backEnd).toBeDefined();
  });

  // Add more tests as needed to cover the functionalities of the BackEnd component
});

import { CloudformationModule } from './cloudformation.module';

describe('CloudformationModule', () => {
  let cloudformationModule: CloudformationModule;

  beforeEach(() => {
    cloudformationModule = new CloudformationModule();
  });

  it('should create an instance', () => {
    expect(cloudformationModule).toBeTruthy();
  });
});

import { AwsconfigModule } from './awsconfig.module';

describe('AwsconfigModule', () => {
  let awsconfigModule: AwsconfigModule;

  beforeEach(() => {
    awsconfigModule = new AwsconfigModule();
  });

  it('should create an instance', () => {
    expect(awsconfigModule).toBeTruthy();
  });
});

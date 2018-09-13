import { HealthcheckModule } from './healthcheck.module';

describe('HealthcheckModule', () => {
  let healthcheckModule: HealthcheckModule;

  beforeEach(() => {
    healthcheckModule = new HealthcheckModule();
  });

  it('should create an instance', () => {
    expect(healthcheckModule).toBeTruthy();
  });
});

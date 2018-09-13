import { AppinsightsModule } from './appinsights.module';

describe('AppinsightsModule', () => {
  let appinsightsModule: AppinsightsModule;

  beforeEach(() => {
    appinsightsModule = new AppinsightsModule();
  });

  it('should create an instance', () => {
    expect(appinsightsModule).toBeTruthy();
  });
});

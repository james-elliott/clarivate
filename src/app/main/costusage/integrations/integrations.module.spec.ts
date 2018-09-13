import { IntegrationsModule } from './integrations.module';

describe('IntegrationsModule', () => {
  let integrationsModule: IntegrationsModule;

  beforeEach(() => {
    integrationsModule = new IntegrationsModule();
  });

  it('should create an instance', () => {
    expect(integrationsModule).toBeTruthy();
  });
});

import { ComplianceModule } from './compliance.module';

describe('ComplianceModule', () => {
  let complianceModule: ComplianceModule;

  beforeEach(() => {
    complianceModule = new ComplianceModule();
  });

  it('should create an instance', () => {
    expect(complianceModule).toBeTruthy();
  });
});

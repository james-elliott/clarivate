import { EfficiencyModule } from './efficiency.module';

describe('EfficiencyModule', () => {
  let efficiencyModule: EfficiencyModule;

  beforeEach(() => {
    efficiencyModule = new EfficiencyModule();
  });

  it('should create an instance', () => {
    expect(efficiencyModule).toBeTruthy();
  });
});

import { CostusageModule } from './costusage.module';

describe('CostusageModule', () => {
  let costusageModule: CostusageModule;

  beforeEach(() => {
    costusageModule = new CostusageModule();
  });

  it('should create an instance', () => {
    expect(costusageModule).toBeTruthy();
  });
});

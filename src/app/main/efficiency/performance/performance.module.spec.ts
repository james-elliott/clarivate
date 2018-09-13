import { PerformanceModule } from './performance.module';

describe('PerformanceModule', () => {
  let performanceModule: PerformanceModule;

  beforeEach(() => {
    performanceModule = new PerformanceModule();
  });

  it('should create an instance', () => {
    expect(performanceModule).toBeTruthy();
  });
});

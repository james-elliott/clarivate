import { ComputeModule } from './compute.module';

describe('ComputeModule', () => {
  let computeModule: ComputeModule;

  beforeEach(() => {
    computeModule = new ComputeModule();
  });

  it('should create an instance', () => {
    expect(computeModule).toBeTruthy();
  });
});

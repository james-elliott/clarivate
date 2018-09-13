import { AssetsModule } from './assets.module';

describe('AssetsModule', () => {
  let assetsModule: AssetsModule;

  beforeEach(() => {
    assetsModule = new AssetsModule();
  });

  it('should create an instance', () => {
    expect(assetsModule).toBeTruthy();
  });
});

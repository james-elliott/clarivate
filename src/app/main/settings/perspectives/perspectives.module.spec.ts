import { PerspectivesModule } from './perspectives.module';

describe('PerspectivesModule', () => {
  let perspectivesModule: PerspectivesModule;

  beforeEach(() => {
    perspectivesModule = new PerspectivesModule();
  });

  it('should create an instance', () => {
    expect(perspectivesModule).toBeTruthy();
  });
});

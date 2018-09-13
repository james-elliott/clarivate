import { RightsizingModule } from './rightsizing.module';

describe('RightsizingModule', () => {
  let rightsizingModule: RightsizingModule;

  beforeEach(() => {
    rightsizingModule = new RightsizingModule();
  });

  it('should create an instance', () => {
    expect(rightsizingModule).toBeTruthy();
  });
});

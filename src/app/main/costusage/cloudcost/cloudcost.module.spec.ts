import { CloudcostModule } from './cloudcost.module';

describe('CloudcostModule', () => {
  let cloudcostModule: CloudcostModule;

  beforeEach(() => {
    cloudcostModule = new CloudcostModule();
  });

  it('should create an instance', () => {
    expect(cloudcostModule).toBeTruthy();
  });
});

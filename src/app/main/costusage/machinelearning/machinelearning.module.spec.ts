import { MachinelearningModule } from './machinelearning.module';

describe('MachinelearningModule', () => {
  let machinelearningModule: MachinelearningModule;

  beforeEach(() => {
    machinelearningModule = new MachinelearningModule();
  });

  it('should create an instance', () => {
    expect(machinelearningModule).toBeTruthy();
  });
});

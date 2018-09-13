import { MigrationModule } from './migration.module';

describe('MigrationModule', () => {
  let migrationModule: MigrationModule;

  beforeEach(() => {
    migrationModule = new MigrationModule();
  });

  it('should create an instance', () => {
    expect(migrationModule).toBeTruthy();
  });
});

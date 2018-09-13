import { AccountsettingsModule } from './accountsettings.module';

describe('AccountsettingsModule', () => {
  let accountsettingsModule: AccountsettingsModule;

  beforeEach(() => {
    accountsettingsModule = new AccountsettingsModule();
  });

  it('should create an instance', () => {
    expect(accountsettingsModule).toBeTruthy();
  });
});

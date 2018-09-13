import { ReservationsModule } from './reservations.module';

describe('ReservationsModule', () => {
  let reservationsModule: ReservationsModule;

  beforeEach(() => {
    reservationsModule = new ReservationsModule();
  });

  it('should create an instance', () => {
    expect(reservationsModule).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class ReservationsModule { }

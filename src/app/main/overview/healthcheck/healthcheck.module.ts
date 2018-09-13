import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcheckRoutingModule } from './healthcheck-routing.module';
import { HealthcheckComponent } from './healthcheck.component';

@NgModule({
  imports: [
    CommonModule,
    HealthcheckRoutingModule
  ],
  declarations: [ HealthcheckComponent ]
})
export class HealthcheckModule { }

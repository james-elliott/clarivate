import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }

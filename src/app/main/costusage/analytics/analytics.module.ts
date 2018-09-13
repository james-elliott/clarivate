import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class AnalyticsModule { }

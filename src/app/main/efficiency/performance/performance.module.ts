import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class PerformanceModule { }

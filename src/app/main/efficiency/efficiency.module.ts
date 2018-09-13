import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EfficiencyRoutingModule } from './efficiency-routing.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    EfficiencyRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class EfficiencyModule { }

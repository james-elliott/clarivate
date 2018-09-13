import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceRoutingModule } from './compliance-routing.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ComplianceRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class ComplianceModule { }

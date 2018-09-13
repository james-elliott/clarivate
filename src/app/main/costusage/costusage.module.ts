import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostusageRoutingModule } from './costusage-routing.module';
import { LayoutModule } from '../../layout/layout.module';
// import { ReportComponent } from '../../layout/pages/report/report.component';

@NgModule({
  imports: [
    CommonModule,
    CostusageRoutingModule,
    LayoutModule
  ],
  declarations: [  ]
})
export class CostusageModule { }

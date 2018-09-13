import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    LayoutModule
  ],
  declarations: [ ]
})
export class OverviewModule {}

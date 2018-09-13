import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppinsightsRoutingModule } from './appinsights-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    AppinsightsRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class AppinsightsModule { }

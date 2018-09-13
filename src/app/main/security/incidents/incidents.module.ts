import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class IncidentsModule { }

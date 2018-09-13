import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerspectivesRoutingModule } from './perspectives-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    PerspectivesRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class PerspectivesModule { }

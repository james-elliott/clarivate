import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputeRoutingModule } from './compute-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ComputeRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class ComputeModule { }

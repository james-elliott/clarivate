import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class PoliciesModule { }

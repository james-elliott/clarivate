import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudformationRoutingModule } from './cloudformation-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    CloudformationRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class CloudformationModule { }

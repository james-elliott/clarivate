import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudcostRoutingModule } from './cloudcost-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    CloudcostRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class CloudcostModule { }

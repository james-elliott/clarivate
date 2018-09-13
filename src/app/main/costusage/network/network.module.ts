import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    NetworkRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class NetworkModule { }

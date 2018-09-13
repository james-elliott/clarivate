import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class ServicesModule { }

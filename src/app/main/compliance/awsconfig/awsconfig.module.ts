import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwsconfigRoutingModule } from './awsconfig-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    AwsconfigRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class AwsconfigModule { }

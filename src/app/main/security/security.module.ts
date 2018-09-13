import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class SecurityModule { }

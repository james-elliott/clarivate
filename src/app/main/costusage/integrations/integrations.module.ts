import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationsRoutingModule } from './integrations-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    IntegrationsRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class IntegrationsModule { }

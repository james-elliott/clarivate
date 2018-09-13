import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class SettingsModule { }

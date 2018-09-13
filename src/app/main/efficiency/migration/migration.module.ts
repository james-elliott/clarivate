import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MigrationRoutingModule } from './migration-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    MigrationRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class MigrationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class DatabaseModule { }

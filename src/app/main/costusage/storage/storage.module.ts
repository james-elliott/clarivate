import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    StorageRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class StorageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachinelearningRoutingModule } from './machinelearning-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    MachinelearningRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class MachinelearningModule { }

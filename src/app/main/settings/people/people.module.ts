import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class PeopleModule { }

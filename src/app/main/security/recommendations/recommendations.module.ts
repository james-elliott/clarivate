import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationsRoutingModule } from './recommendations-routing.module';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RecommendationsRoutingModule,
    LayoutModule
  ],
  declarations: []
})
export class RecommendationsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthcheckComponent } from './healthcheck.component';

const routes: Routes = [
  { path: '', redirectTo: 'aws', pathMatch: 'full' },
  { path: 'aws', component: HealthcheckComponent, data: { title: 'AWS' } },
  { path: 'azure', component: HealthcheckComponent, data: { title: 'Azure' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcheckRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'stacks', pathMatch: 'full' },
  { path: 'stacks', component: ReportComponent, data: { title: 'CF Stacks' } },
  { path: 'resources', component: ReportComponent, data: { title: 'CF Resources' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudformationRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'changelog', pathMatch: 'full' },
  { path: 'changelog', component: ReportComponent, data: { title: 'Change Log' } },
  { path: 'rules', component: ReportComponent, data: { title: 'Rules' } },
  { path: 'results', component: ReportComponent, data: { title: 'Evaluation Results' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwsconfigRoutingModule { }

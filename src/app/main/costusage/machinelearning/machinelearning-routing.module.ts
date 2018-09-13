import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'sagemaker', pathMatch: 'full' },
  { path: 'sagemaker', data: { title: 'Sage Maker', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'endpoint', pathMatch: 'full' },
      { path: 'endpoint', component: ReportComponent, data: { title: 'Endpoints', droptitle: true } },
      { path: 'instance', component: ReportComponent, data: { title: 'Notebook Instances', droptitle: true } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachinelearningRoutingModule { }

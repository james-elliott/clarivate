import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: '1', pathMatch: 'full' },
  { path: '1', component: ReportComponent, data: { title: 'AWS' } },
  { path: '2', component: ReportComponent, data: { title: 'AWS CIO' } },
  { path: '3', component: ReportComponent, data: { title: 'AWS Overview' } },
  { path: '4', component: ReportComponent, data: { title: 'Azure' } },
  { path: '5', component: ReportComponent, data: { title: 'Azure Overview' } },
  { path: '6', component: ReportComponent, data: { title: 'Google' } },
  { path: '7', component: ReportComponent, data: { title: 'Google Overview' } },
  { path: '8', component: ReportComponent, data: { title: 'Data Center' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'cloudtrail', pathMatch: 'full' },
  { path: 'cloudtrail', data: { title: 'CloudTrail', group: true }, children: [
    { path: '', redirectTo: 'cloudtrail', pathMatch: 'full' },
    { path: 'cloudtrail', component: ReportComponent, data: { title: 'Incident History' } },
    { path: 'events', component: ReportComponent, data: { title: 'Events' } },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'assets', pathMatch: 'full' },
      { path: 'assets', data: { title: 'Assets' }, children: [
        { path: '', redirectTo: 'trail', pathMatch: 'full' },
        { path: 'trail', component: ReportComponent, data: { title: 'Trails' } },
      ] },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }

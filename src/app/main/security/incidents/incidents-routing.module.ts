import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'alert-logic', pathMatch: 'full' },
  { path: 'alert-logic', data: { title: 'Alert Logic', group: true }, children: [
    { path: '', redirectTo: 'history', pathMatch: 'full' },
    { path: 'history', component: ReportComponent, data: { title: 'Incident History' } },
    { path: 'details', component: ReportComponent, data: { title: 'Incident Details' } },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }

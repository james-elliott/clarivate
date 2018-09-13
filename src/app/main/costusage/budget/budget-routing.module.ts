import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';
import { TabsComponent } from '../../../layout/tabs/tabs.component';
import { DroptitleComponent } from '../../../layout/droptitle/droptitle.component';

const routes: Routes = [
  { path: '', redirectTo: 'aws', pathMatch: 'full' },
  { path: 'aws', data: { title: 'AWS', group: true }, children: [
    { path: '', redirectTo: 'report', pathMatch: 'full' },
    { path: 'report', component: ReportComponent, data: { title: 'Budget vs Actual' } },
    { path: 'settings', component: ReportComponent, data: { title: 'Edit Budget' } },
  ] },
  { path: 'azure', data: { title: 'Azure', group: true }, children: [
    { path: '', redirectTo: 'report', pathMatch: 'full' },
    { path: 'report', component: ReportComponent, data: { title: 'Budget vs Actual' } },
    { path: 'settings', component: ReportComponent, data: { title: 'Edit Budget' } },
  ] },
  { path: 'gcp', data: { title: 'Google Cloud Platform', group: true }, children: [
    { path: '', redirectTo: 'report', pathMatch: 'full' },
    { path: 'report', component: ReportComponent, data: { title: 'Budget vs Actual' } },
    { path: 'settings', component: ReportComponent, data: { title: 'Edit Budget' } },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }

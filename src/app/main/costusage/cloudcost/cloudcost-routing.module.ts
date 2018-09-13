import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';
import { TabsComponent } from '../../../layout/tabs/tabs.component';
import { DroptitleComponent } from '../../../layout/droptitle/droptitle.component';

const routes: Routes = [
  { path: '', redirectTo: 'aws', pathMatch: 'full' },
  { path: 'aws', data: { title: 'AWS', group: true }, children: [
    { path: '', redirectTo: 'history', pathMatch: 'full' },
    { path: 'history', component: ReportComponent, data: { title: 'Cost History', droptitle: true } },
    { path: 'current', component: ReportComponent, data: { title: 'Cost Current', droptitle: true } },
    { path: 'amortized', component: ReportComponent, data: { title: 'Amortized', droptitle: true } },
    { path: 'summary', component: ReportComponent, data: { title: 'Cost Summary', droptitle: true } },
    { path: 'billing-rules', component: ReportComponent, data: { title: 'Billing Rules Cost', droptitle: true } },
  ] },
  { path: 'azure', data: { title: 'Azure', group: true }, children: [
    { path: '', redirectTo: 'history', pathMatch: 'full' },
    { path: 'history', component: ReportComponent, data: { title: 'Cost History', droptitle: true } },
    { path: 'current', component: ReportComponent, data: { title: 'Cost Current', droptitle: true } },
    { path: 'amortized', component: ReportComponent, data: { title: 'Amortized', droptitle: true } },
    { path: 'summary', component: ReportComponent, data: { title: 'Cost Summary', droptitle: true } },
    { path: 'burndown', component: ReportComponent, data: { title: 'Azure Burndown', droptitle: true } },
  ] },
  { path: 'gcp', data: { title: 'Google Cloud Platform', group: true }, children: [
    { path: '', redirectTo: 'history', pathMatch: 'full' },
    { path: 'history', component: ReportComponent, data: { title: 'Cost History', droptitle: true } },
    { path: 'summary', component: ReportComponent, data: { title: 'Cost Summary', droptitle: true } },
  ] },
  { path: 'dc', data: { title: 'Data Center', group: true }, children: [
    { path: '', redirectTo: 'history', pathMatch: 'full' },
    { path: 'history', component: ReportComponent, data: { title: 'Cost History' } },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudcostRoutingModule { }

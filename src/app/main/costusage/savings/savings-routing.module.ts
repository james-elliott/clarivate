import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';
import { TabsComponent } from '../../../layout/tabs/tabs.component';
import { DroptitleComponent } from '../../../layout/droptitle/droptitle.component';

const routes: Routes = [
  { path: '', redirectTo: 'cost', pathMatch: 'full' },
  { path: 'cost', data: { title: 'Cost Savings' }, children: [
    { path: '', redirectTo: 'savings', pathMatch: 'full' },
    { path: 'savings', component: ReportComponent, data: { title: 'Cost Savings' } },
  ] },
  { path: 'report', data: { title: 'Report Savings' }, children: [
    { path: '', redirectTo: 'savings', pathMatch: 'full' },
    { path: 'savings', component: ReportComponent, data: { title: 'Report Savings' } },
  ] },
  { path: 'claim', data: { title: 'Claim Savings' }, children: [
    { path: '', redirectTo: 'savings', pathMatch: 'full' },
    { path: 'savings', component: ReportComponent, data: { title: 'Claim Savings' } },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule { }

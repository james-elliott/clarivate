import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'azure-app', pathMatch: 'full' },
  { path: 'azure-app', data: { title: 'Azure App Services', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'service', pathMatch: 'full' },
      { path: 'service', component: ReportComponent, data: { title: 'Services', droptitle: true } },
      { path: 'plan', component: ReportComponent, data: { title: 'Service Plans', droptitle: true } },
      { path: 'environment', component: ReportComponent, data: { title: 'Service Environments', droptitle: true } },
    ] },
  ] },
  { path: 'azure-general', data: { title: 'Azure General', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'subscription', pathMatch: 'full' },
      { path: 'subscription', component: ReportComponent, data: { title: 'Subscriptions', droptitle: true } },
      { path: 'group', component: ReportComponent, data: { title: 'Resource Groups', droptitle: true } },
    ] },
  ] },
  { path: 'db', data: { title: 'DB Migrations', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'instance', pathMatch: 'full' },
      { path: 'instance', component: ReportComponent, data: { title: 'Replication Instances' } },
    ] },
  ] },
  { path: 'workspaces', data: { title: 'Workspaces', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'workspace', pathMatch: 'full' },
      { path: 'workspace', component: ReportComponent, data: { title: 'Workspaces' } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }

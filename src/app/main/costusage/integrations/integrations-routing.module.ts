import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'ansible', pathMatch: 'full' },
  { path: 'ansible', data: { title: 'Ansible', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'node', pathMatch: 'full' },
      { path: 'node', component: ReportComponent, data: { title: 'Nodes' } },
    ] },
  ] },
  { path: 'chef', data: { title: 'Chef', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'node', pathMatch: 'full' },
      { path: 'node', component: ReportComponent, data: { title: 'Nodes', droptitle: true } },
      { path: 'cookbook', component: ReportComponent, data: { title: 'Cookbooks', droptitle: true } },
      { path: 'environment', component: ReportComponent, data: { title: 'Environments', droptitle: true } },
      { path: 'filesystem', component: ReportComponent, data: { title: 'File Systems', droptitle: true } },
    ] },
  ] },
  { path: 'datadog', data: { title: 'DataDog', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'host', pathMatch: 'full' },
      { path: 'host', component: ReportComponent, data: { title: 'Hosts' } },
    ] },
  ] },
  { path: 'docker', data: { title: 'Docker', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'image', pathMatch: 'full' },
      { path: 'image', component: ReportComponent, data: { title: 'Images' } },
    ] },
  ] },
  { path: 'new-relic', data: { title: 'New Relic', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'server', pathMatch: 'full' },
      { path: 'server', component: ReportComponent, data: { title: 'Servers' } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationsRoutingModule { }

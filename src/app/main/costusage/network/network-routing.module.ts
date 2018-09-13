import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'aws', pathMatch: 'full' },
  { path: 'aws', data: { title: 'AWS', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'data', pathMatch: 'full' },
      { path: 'data', component: ReportComponent, data: { title: 'Data Transfer' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'data', pathMatch: 'full' },
      { path: 'data', component: ReportComponent, data: { title: 'Data Transfer' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'vpc', pathMatch: 'full' },
      { path: 'vpc', component: ReportComponent, data: { title: 'Virtual Private Clouds', droptitle: true } },
      { path: 'subnet', component: ReportComponent, data: { title: 'VPC Subnet', droptitle: true } },
      { path: 'nat', component: ReportComponent, data: { title: 'NAT Gateways', droptitle: true } },
      { path: 'zone', component: ReportComponent, data: { title: 'Route 53 Hosted Zones', droptitle: true } },
      { path: 'cdn', component: ReportComponent, data: { title: 'CDN Profiles', droptitle: true } },
      { path: 'express', component: ReportComponent, data: { title: 'Express Route Circuits', droptitle: true } },
    ] },
  ] },
  { path: 'azure', data: { title: 'Azure', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'network', pathMatch: 'full' },
      { path: 'network', component: ReportComponent, data: { title: 'Virtual Networks', droptitle: true } },
      { path: 'gateways', component: ReportComponent, data: { title: 'Virtual Network Gateways', droptitle: true } },
      { path: 'interface', component: ReportComponent, data: { title: 'Network Interfaces', droptitle: true } },
      { path: 'ip', component: ReportComponent, data: { title: 'IP Addresses', droptitle: true } },
      { path: 'app', component: ReportComponent, data: { title: 'App Gateways', droptitle: true } },
      { path: 'bus', component: ReportComponent, data: { title: 'Service Buses', droptitle: true } },
    ] },
  ] },
  { path: 'dc', data: { title: 'Data Center', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'network', pathMatch: 'full' },
      { path: 'network', component: ReportComponent, data: { title: 'Network Interfaces' } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }

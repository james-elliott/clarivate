import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';
import { TabsComponent } from '../../../layout/tabs/tabs.component';
import { DroptitleComponent } from '../../../layout/droptitle/droptitle.component';

const routes: Routes = [
  { path: '', redirectTo: 'elasticache', pathMatch: 'full' },
  { path: 'elasticache', data: { title: 'ElastiCache', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'node', pathMatch: 'full' },
      { path: 'node', component: ReportComponent, data: { title: 'Nodes', droptitle: true } },
      { path: 'amortized', component: ReportComponent, data: { title: 'Amortized Reservations', droptitle: true } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'node', pathMatch: 'full' },
      { path: 'node', component: ReportComponent, data: { title: 'Nodes' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'cluster', pathMatch: 'full' },
      { path: 'cluster', component: ReportComponent, data: { title: 'Clusters' } },
    ] },
  ] },
  { path: 'redshift', data: { title: 'Redshift', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'cluster', pathMatch: 'full' },
      { path: 'cluster', component: ReportComponent, data: { title: 'Clusters', droptitle: true } },
      { path: 'amortized', component: ReportComponent, data: { title: 'Amortized Reservations', droptitle: true } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'cluster', pathMatch: 'full' },
      { path: 'cluster', component: ReportComponent, data: { title: 'Clusters', droptitle: true } },
      { path: 'node', component: ReportComponent, data: { title: 'Reserved Nodes', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'cluster', pathMatch: 'full' },
      { path: 'cluster', component: ReportComponent, data: { title: 'Clusters', droptitle: true } },
      { path: 'node', component: ReportComponent, data: { title: 'Reserved Nodes', droptitle: true } },
      { path: 'snapshot', component: ReportComponent, data: { title: 'Snapshots', droptitle: true } },
    ] },
  ] },
  { path: 'emr', data: { title: 'Elastic Map Reduce', group: true }, children: [
    { path: '', redirectTo: 'usage', pathMatch: 'full' },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'hours', pathMatch: 'full' },
      { path: 'hours', component: ReportComponent, data: { title: 'Cluster Hours' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'cluster', pathMatch: 'full' },
      { path: 'cluster', component: ReportComponent, data: { title: 'Clusters', droptitle: true } },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances', droptitle: true } },
      { path: 'group', component: ReportComponent, data: { title: 'Instance Groups', droptitle: true } },
    ] },
  ] },
  { path: 'elasticsearch', data: { title: 'ElasticSearch', group: true }, children: [
    { path: '', redirectTo: 'usage', pathMatch: 'full' },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'hours', pathMatch: 'full' },
      { path: 'hours', component: ReportComponent, data: { title: 'Domain Hours' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'domain', pathMatch: 'full' },
      { path: 'domain', component: ReportComponent, data: { title: 'Domains', droptitle: true } },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances', droptitle: true } },
      { path: 'volume', component: ReportComponent, data: { title: 'Volumes', droptitle: true } },
    ] },
  ] },
  { path: 'kinesis', data: { title: 'Kinesis', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'stream', pathMatch: 'full' },
      { path: 'stream', component: ReportComponent, data: { title: 'Streams', droptitle: true } },
      { path: 'hose', component: ReportComponent, data: { title: 'Firehoses', droptitle: true } },
    ] },
  ] },
  { path: 'hdinsight', data: { title: 'HDInsight', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'workspace', pathMatch: 'full' },
      { path: 'workspace', component: ReportComponent, data: { title: 'Workspaces' } },
    ] },
  ] },
  { path: 'log-analytics', data: { title: 'Log Analytics', group: true }, children: [
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
export class AnalyticsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'compute', pathMatch: 'full' },
  { path: 'compute', data: { title: 'Compute', group: true }, children: [
    { path: '', redirectTo: 'ec2', pathMatch: 'full' },
    { path: 'ec2', data: { title: 'EC2' }, children: [
      { path: '', redirectTo: 'instance-perf', pathMatch: 'full' },
      { path: 'instance-perf', component: ReportComponent, data: { title: 'Instance Performance', droptitle: true } },
      { path: 'memory-perf', component: ReportComponent, data: { title: 'Memory Performance', droptitle: true } },
      { path: 'file-perf', component: ReportComponent, data: { title: 'File System Performance', droptitle: true } },
      { path: 'network-perf', component: ReportComponent, data: { title: 'Network Performance', droptitle: true } },
      { path: 'lb-perf', component: ReportComponent, data: { title: 'Load Balancer Performance', droptitle: true } },
      { path: 'memory-met', component: ReportComponent, data: { title: 'Memory Metrics', droptitle: true } },
      { path: 'file-met', component: ReportComponent, data: { title: 'File System Metrics', droptitle: true } },
      { path: 'lb-met', component: ReportComponent, data: { title: 'Load Balancer Metrics', droptitle: true } },
    ] },
    { path: 'azurevm', data: { title: 'Azure VM' }, children: [
      { path: '', redirectTo: 'instance-perf', pathMatch: 'full' },
      { path: 'instance-perf', component: ReportComponent, data: { title: 'Instance Performance', droptitle: true } },
      { path: 'memory-perf', component: ReportComponent, data: { title: 'Memory Performance', droptitle: true } },
      { path: 'disk-perf', component: ReportComponent, data: { title: 'Disk Performance', droptitle: true } },
      { path: 'network-perf', component: ReportComponent, data: { title: 'Network Performance', droptitle: true } },
    ] },
    { path: 'dc', data: { title: 'Data Center' }, children: [
      { path: '', redirectTo: 'server-perf', pathMatch: 'full' },
      { path: 'server-perf', component: ReportComponent, data: { title: 'Server Performance', droptitle: true } },
      { path: 'memory-perf', component: ReportComponent, data: { title: 'Memory Performance', droptitle: true } },
      { path: 'file-perf', component: ReportComponent, data: { title: 'File System Performance', droptitle: true } },
      { path: 'network-perf', component: ReportComponent, data: { title: 'Network Performance', droptitle: true } },
      { path: 'server-met', component: ReportComponent, data: { title: 'Server Metrics', droptitle: true } },
      { path: 'memory-met', component: ReportComponent, data: { title: 'Memory Metrics', droptitle: true } },
      { path: 'file-met', component: ReportComponent, data: { title: 'File System Metrics', droptitle: true } },
      { path: 'block-met', component: ReportComponent, data: { title: 'Block Device Metrics', droptitle: true } },
      { path: 'network-met', component: ReportComponent, data: { title: 'Network Metrics', droptitle: true } },
    ] },
  ] },
  { path: 'storage', data: { title: 'Storage', group: true }, children: [
    { path: '', redirectTo: 'ebs', pathMatch: 'full' },
    { path: 'ebs', data: { title: 'EBS' }, children: [
      { path: '', redirectTo: 'volume-perf', pathMatch: 'full' },
      { path: 'volume-perf', component: ReportComponent, data: { title: 'Volume Performance', droptitle: true } },
      { path: 'volume-met', component: ReportComponent, data: { title: 'Volume Metrics', droptitle: true } },
    ] },
    { path: 's3', data: { title: 'S3' }, children: [
      { path: '', redirectTo: 'storage-met', pathMatch: 'full' },
      { path: 'storage-met', component: ReportComponent, data: { title: 'Storage Metrics' } },
    ] },
  ] },
  { path: 'database', data: { title: 'Database', group: true }, children: [
    { path: '', redirectTo: 'azure-sql', pathMatch: 'full' },
    { path: 'azure-sql', data: { title: 'Azure SQL DB' }, children: [
      { path: '', redirectTo: 'database-met', pathMatch: 'full' },
      { path: 'database-met', component: ReportComponent, data: { title: 'Database Metrics' } },
    ] },
    { path: 'dynamodb', data: { title: 'DynamoDB' }, children: [
      { path: '', redirectTo: 'database-met', pathMatch: 'full' },
      { path: 'database-met', component: ReportComponent, data: { title: 'Database Metrics' } },
    ] },
    { path: 'rds', data: { title: 'RDS' }, children: [
      { path: '', redirectTo: 'instance-perf', pathMatch: 'full' },
      { path: 'instance-perf', component: ReportComponent, data: { title: 'Instance Performance', droptitle: true } },
      { path: 'instance-met', component: ReportComponent, data: { title: 'Instance Metrics', droptitle: true } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }

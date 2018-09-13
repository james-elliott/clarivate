import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';
import { TabsComponent } from '../../../layout/tabs/tabs.component';
import { DroptitleComponent } from '../../../layout/droptitle/droptitle.component';

const routes: Routes = [
  { path: '', redirectTo: 'ec2', pathMatch: 'full' },
  { path: 'ec2', data: { title: 'EC2', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'instance', pathMatch: 'full' },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances', droptitle: true } },
      { path: 'amortized', component: ReportComponent, data: { title: 'Amortized Reservations', droptitle: true } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'instance', pathMatch: 'full' },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances', droptitle: true } },
      { path: 'hours', component: ReportComponent, data: { title: 'Instance Hours', droptitle: true } },
      { path: 'snapshot', component: ReportComponent, data: { title: 'Snapshots', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'instance', pathMatch: 'full' },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances', droptitle: true } },
      { path: 'snapshot', component: ReportComponent, data: { title: 'Snapshots', droptitle: true } },
      { path: 'spots', component: ReportComponent, data: { title: 'Spot Requests', droptitle: true } },
      { path: 'eip', component: ReportComponent, data: { title: 'Elastic IPs', droptitle: true } },
      { path: 'dedicated', component: ReportComponent, data: { title: 'Dedicated Hosts', droptitle: true } },
      { path: 'lb', component: ReportComponent, data: { title: 'Load Balancers', droptitle: true } },
      { path: 'efs', component: ReportComponent, data: { title: 'Elastic File Systems', droptitle: true } },
      { path: 'images', component: ReportComponent, data: { title: 'Images', droptitle: true } },
      { path: 'asg', component: ReportComponent, data: { title: 'Auto Scale Groups', droptitle: true } },
    ] },
  ] },
  { path: 'azurevm', data: { title: 'Azure VM', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'vm', pathMatch: 'full' },
      { path: 'vm', component: ReportComponent, data: { title: 'Virtual Machines', droptitle: true } },
      { path: 'snapshot', component: ReportComponent, data: { title: 'Snapshots', droptitle: true } },
      { path: 'amortized', component: ReportComponent, data: { title: 'Amortized Reservations', droptitle: true } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'vm', pathMatch: 'full' },
      { path: 'vm', component: ReportComponent, data: { title: 'Virtual Machines', droptitle: true } },
      { path: 'snapshot', component: ReportComponent, data: { title: 'Snapshots', droptitle: true } },
      { path: 'disk', component: ReportComponent, data: { title: 'Disks', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'vm', pathMatch: 'full' },
      { path: 'vm', component: ReportComponent, data: { title: 'Virtual Machines', droptitle: true } },
      { path: 'snapshot', component: ReportComponent, data: { title: 'Snapshots', droptitle: true } },
      { path: 'disk', component: ReportComponent, data: { title: 'Disks', droptitle: true } },
      { path: 'scalesets', component: ReportComponent, data: { title: 'Scale Sets', droptitle: true } },
      { path: 'batchaccounts', component: ReportComponent, data: { title: 'Batch Accounts', droptitle: true } },
      { path: 'services', component: ReportComponent, data: { title: 'Cloud Services', droptitle: true } },
    ] },
  ] },
  { path: 'gcp', data: { title: 'Google Compute', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'instance', pathMatch: 'full' },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'instance', pathMatch: 'full' },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances', droptitle: true } },
      { path: 'hours', component: ReportComponent, data: { title: 'Instance Hours', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'instance', pathMatch: 'full' },
      { path: 'instance', component: ReportComponent, data: { title: 'Instances', droptitle: true } },
      { path: 'snapshot', component: ReportComponent, data: { title: 'Snapshots', droptitle: true } },
      { path: 'disk', component: ReportComponent, data: { title: 'Disks', droptitle: true } },
      { path: 'images', component: ReportComponent, data: { title: 'Images', droptitle: true } },
      { path: 'bucket', component: ReportComponent, data: { title: 'Buckets', droptitle: true } },
      { path: 'attached', component: ReportComponent, data: { title: 'Attached Disks', droptitle: true } },
    ] },
  ] },
  { path: 'containers', data: { title: 'Containers', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'containers', pathMatch: 'full' },
      { path: 'containers', component: ReportComponent, data: { title: 'Containers' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'ecs-allocation', pathMatch: 'full' },
      { path: 'ecs-allocation', component: ReportComponent, data: { title: 'ECS Allocation', droptitle: true } },
      { path: 'ecs-resources', component: ReportComponent, data: { title: 'ECS Resources', droptitle: true } },
      { path: 'k8s-allocation', component: ReportComponent, data: { title: 'Kubernetes Allocation', droptitle: true } },
      { path: 'k8s-resources', component: ReportComponent, data: { title: 'Kubernetes Resources', droptitle: true } },
      { path: 'mesos-allocation', component: ReportComponent, data: { title: 'Mesos Allocation', droptitle: true } },
      { path: 'mesos-resources', component: ReportComponent, data: { title: 'Mesos Resources', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'cluster', pathMatch: 'full' },
      { path: 'cluster', component: ReportComponent, data: { title: 'Clusters' } },
    ] },
  ] },
  { path: 'dc', data: { title: 'Data Center', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'server', pathMatch: 'full' },
      { path: 'server', component: ReportComponent, data: { title: 'Servers' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'server', pathMatch: 'full' },
      { path: 'server', component: ReportComponent, data: { title: 'Servers', droptitle: true } },
      { path: 'daily', component: ReportComponent, data: { title: 'Servers Daily', droptitle: true } },
    ] },
    { path: 'assets', component: ReportComponent, data: { title: 'Assets' } },
  ] },
  { path: 'lambda', data: { title: 'Lambda', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'function', pathMatch: 'full' },
      { path: 'function', component: ReportComponent, data: { title: 'Functions' } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputeRoutingModule { }

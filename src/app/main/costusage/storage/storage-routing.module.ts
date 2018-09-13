import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'ebs', pathMatch: 'full' },
  { path: 'ebs', data: { title: 'EBS', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'volume', pathMatch: 'full' },
      { path: 'volume', component: ReportComponent, data: { title: 'Volumes' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'volume', pathMatch: 'full' },
      { path: 'volume', component: ReportComponent, data: { title: 'Volumes', droptitle: true } },
      { path: 'hours', component: ReportComponent, data: { title: 'Volume Hours', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'volume', pathMatch: 'full' },
      { path: 'volume', component: ReportComponent, data: { title: 'Volumes' } },
    ] },
  ] },
  { path: 's3', data: { title: 'S3', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'bucket', pathMatch: 'full' },
      { path: 'bucket', component: ReportComponent, data: { title: 'Buckets' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 's3', pathMatch: 'full' },
      { path: 's3', component: ReportComponent, data: { title: 'S3 Storage' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'bucket', pathMatch: 'full' },
      { path: 'bucket', component: ReportComponent, data: { title: 'Buckets' } },
    ] },
  ] },
  { path: 'storsimple', data: { title: 'StorSimple', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'device', pathMatch: 'full' },
      { path: 'device', component: ReportComponent, data: { title: 'Device Managers' } },
    ] },
  ] },
  { path: 'backup', data: { title: 'Azure Backup', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'vault', pathMatch: 'full' },
      { path: 'vault', component: ReportComponent, data: { title: 'Backup Vaults' } },
    ] },
  ] },
  { path: 'recovery', data: { title: 'Azure Recovery Service', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'vault', pathMatch: 'full' },
      { path: 'vault', component: ReportComponent, data: { title: 'Service Vaults' } },
    ] },
  ] },
  { path: 'azuredisk', data: { title: 'Azure Disk', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'disk', pathMatch: 'full' },
      { path: 'disk', component: ReportComponent, data: { title: 'Disks' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'disk', pathMatch: 'full' },
      { path: 'disk', component: ReportComponent, data: { title: 'Disks' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'disk', pathMatch: 'full' },
      { path: 'disk', component: ReportComponent, data: { title: 'Disks' } },
    ] },
  ] },
  { path: 'storage-accounts', data: { title: 'Azure Storage Accounts', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: 'account', component: ReportComponent, data: { title: 'Storage Accounts' } },
    ] },
  ] },
  { path: 'dc', data: { title: 'Data Center', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'filesystem', pathMatch: 'full' },
      { path: 'filesystem', component: ReportComponent, data: { title: 'File Systems', droptitle: true } },
      { path: 'device', component: ReportComponent, data: { title: 'Block Devices', droptitle: true } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }

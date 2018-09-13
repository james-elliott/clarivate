import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'compute', pathMatch: 'full' },
  { path: 'compute', data: { title: 'Compute', group: true }, children: [
    { path: '', redirectTo: 'ec2', pathMatch: 'full' },
    { path: 'ec2', data: { title: 'EC2' }, children: [
      { path: '', redirectTo: 'rightsizing', pathMatch: 'full' },
      { path: 'rightsizing', component: ReportComponent, data: { title: 'Rightsizing', droptitle: true } },
      { path: 'perspective', component: ReportComponent, data: { title: 'Rightsizing by Perspective', droptitle: true } },
    ] },
    { path: 'azurevm', data: { title: 'Azure VM' }, children: [
      { path: '', redirectTo: 'rightsizing', pathMatch: 'full' },
      { path: 'rightsizing', component: ReportComponent, data: { title: 'Rightsizing', droptitle: true } },
      { path: 'perspective', component: ReportComponent, data: { title: 'Rightsizing by Perspective', droptitle: true } },
    ] },
    { path: 'dc', data: { title: 'Data Center' }, children: [
      { path: '', redirectTo: 'rightsizing', pathMatch: 'full' },
      { path: 'rightsizing', component: ReportComponent, data: { title: 'Rightsizing' } },
    ] },
  ] },
  { path: 'storage', data: { title: 'Storage', group: true }, children: [
    { path: '', redirectTo: 'ebs', pathMatch: 'full' },
    { path: 'ebs', data: { title: 'EBS' }, children: [
      { path: '', redirectTo: 'rightsizing', pathMatch: 'full' },
      { path: 'rightsizing', component: ReportComponent, data: { title: 'Rightsizing', droptitle: true } },
      { path: 'perspective', component: ReportComponent, data: { title: 'Rightsizing by Perspective', droptitle: true } },
    ] },
  ] },
  { path: 'database', data: { title: 'Database', group: true }, children: [
    { path: '', redirectTo: 'azure-sql', pathMatch: 'full' },
    { path: 'azure-sql', data: { title: 'Azure SQL DB' }, children: [
      { path: '', redirectTo: 'rightsizing', pathMatch: 'full' },
      { path: 'rightsizing', component: ReportComponent, data: { title: 'Rightsizing' } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightsizingRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'aws', pathMatch: 'full' },
  { path: 'aws', data: { title: 'AWS', group: true }, children: [
    { path: '', redirectTo: 'iam', pathMatch: 'full' },
    { path: 'iam', data: { title: 'IAM' }, children: [
      { path: '', redirectTo: 'groups', pathMatch: 'full' },
      { path: 'groups', component: ReportComponent, data: { title: 'IAM Groups', droptitle: true } },
      { path: 'users', component: ReportComponent, data: { title: 'IAM Users', droptitle: true } },
      { path: 'roles', component: ReportComponent, data: { title: 'IAM Roles', droptitle: true } },
      { path: 'policies', component: ReportComponent, data: { title: 'IAM Policies', droptitle: true } },
      { path: 'certs', component: ReportComponent, data: { title: 'IAM Server Certificates', droptitle: true } },
      { path: 'reports', component: ReportComponent, data: { title: 'IAM Credential Reports', droptitle: true } },
      { path: 'passwords', component: ReportComponent, data: { title: 'IAM Password Policies', droptitle: true } },
    ] },
    { path: 'ec2', data: { title: 'EC2' }, children: [
      { path: '', redirectTo: 'ports', pathMatch: 'full' },
      { path: 'ports', component: ReportComponent, data: { title: 'Open Ports', droptitle: true } },
      { path: 'groups', component: ReportComponent, data: { title: 'Security Groups', droptitle: true } },
      { path: 'rules', component: ReportComponent, data: { title: 'Security Rules', droptitle: true } },
    ] },
    { path: 'rds', data: { title: 'RDS' }, children: [
      { path: '', redirectTo: 'groups', pathMatch: 'full' },
      { path: 'groups', component: ReportComponent, data: { title: 'Security Groups' } },
    ] },

    { path: 'keyservice', data: { title: 'Key Management Service' }, children: [
      { path: '', redirectTo: 'keys', pathMatch: 'full' },
      { path: 'keys', component: ReportComponent, data: { title: 'Master Keys' } },
    ] },
  ] },
  { path: 'azure', data: { title: 'Azure', group: true }, children: [
    { path: '', redirectTo: 'keyvaults', pathMatch: 'full' },
    { path: 'keyvaults', data: { title: 'Azure Key Vaults' }, children: [
      { path: '', redirectTo: 'vaults', pathMatch: 'full' },
      { path: 'vaults', component: ReportComponent, data: { title: 'Key Vaults' } },
    ] },
    { path: 'networks', data: { title: 'Azure Networks' }, children: [
      { path: '', redirectTo: 'groups', pathMatch: 'full' },
      { path: 'groups', component: ReportComponent, data: { title: 'Security Groups', droptitle: true } },
      { path: 'rules', component: ReportComponent, data: { title: 'Security Rules', droptitle: true } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }

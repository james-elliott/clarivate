import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'clouds', pathMatch: 'full' },
  { path: 'clouds', data: { title: 'Cloud Providers', group: true }, children: [
    { path: '', redirectTo: 'aws', pathMatch: 'full' },
    { path: 'aws', data: { title: 'AWS' }, children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: 'account', component: ReportComponent, data: { title: 'Accounts', tabs: true } },
      { path: 'statement', component: ReportComponent, data: { title: 'Billing Statements', tabs: true } },
    ] },
    { path: 'azure', data: { title: 'Azure' }, children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'principal', component: ReportComponent, data: { title: 'Service Principals', tabs: true } },
      { path: 'enrollment', component: ReportComponent, data: { title: 'Enrollments', tabs: true } },
      { path: 'statement', component: ReportComponent, data: { title: 'Billing Statements', tabs: true } },
    ] },
    { path: 'gcp', data: { title: 'Google Cloud Platform' }, children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: 'account', component: ReportComponent, data: { title: 'Accounts', tabs: true } },
      { path: 'usage', component: ReportComponent, data: { title: 'Usage Statements', tabs: true } },
      { path: 'statement', component: ReportComponent, data: { title: 'Billing Statements', tabs: true } },
    ] },
  ] },
  { path: 'dc', data: { title: 'Data Centers', group: true }, children: [
    { path: '', redirectTo: 'dc', pathMatch: 'full' },
    { path: 'dc', component: ReportComponent, data: { title: 'Data Centers' } },
    { path: 'vmware', component: ReportComponent, data: { title: 'VMWare' } },
    { path: 'configurations', component: ReportComponent, data: { title: 'Configurations' } },
    { path: 'aggregators', component: ReportComponent, data: { title: 'Aggregators' } },
    { path: 'agents', component: ReportComponent, data: { title: 'Agents' } },
  ] },
  { path: 'integrations', data: { title: 'Integrations', group: true }, children: [
    { path: '', redirectTo: 'ansible', pathMatch: 'full' },
    { path: 'ansible', component: ReportComponent, data: { title: 'Ansible' } },
    { path: 'jira', component: ReportComponent, data: { title: 'JIRA' } },
    { path: 'slack', component: ReportComponent, data: { title: 'Slack' } },
    { path: 'new-relic', component: ReportComponent, data: { title: 'New Relic' } },
    { path: 'chef', component: ReportComponent, data: { title: 'Chef' } },
    { path: 'datadog', component: ReportComponent, data: { title: 'DataDog' } },
    { path: 'alert-logic', component: ReportComponent, data: { title: 'Alert Logic' } },
    { path: 'vmware', component: ReportComponent, data: { title: 'VMWare' } },
  ] },
  { path: 'containers', component: ReportComponent, data: { title: 'Containers Configuration' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }

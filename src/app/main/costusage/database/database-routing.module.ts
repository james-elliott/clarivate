import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'dynamodb', pathMatch: 'full' },
  { path: 'dynamodb', data: { title: 'DynamoDB', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: ReportComponent, data: { title: 'Tables' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: ReportComponent, data: { title: 'Tables' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: ReportComponent, data: { title: 'Tables' } },
    ] },
  ] },
  { path: 'azure-sql', data: { title: 'Azure SQL Database', group: true }, children: [
    { path: '', redirectTo: 'cost', pathMatch: 'full' },
    { path: 'cost', data: { title: 'Cost' }, children: [
      { path: '', redirectTo: 'db', pathMatch: 'full' },
      { path: 'db', component: ReportComponent, data: { title: 'Databases' } },
    ] },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'db', pathMatch: 'full' },
      { path: 'db', component: ReportComponent, data: { title: 'Databases', droptitle: true } },
      { path: 'hours', component: ReportComponent, data: { title: 'Database Hours', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'db', pathMatch: 'full' },
      { path: 'db', component: ReportComponent, data: { title: 'Databases', droptitle: true } },
      { path: 'warehouse', component: ReportComponent, data: { title: 'Data Warehouses', droptitle: true } },
      { path: 'server', component: ReportComponent, data: { title: 'Servers', droptitle: true } },
    ] },
  ] },
  { path: 'rds', data: { title: 'RDS', group: true }, children: [
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
      { path: 'subnet', component: ReportComponent, data: { title: 'Subnet Groups', droptitle: true } },
    ] },
  ] },
  { path: 'azure-redis', data: { title: 'Azure Redis', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'cache', pathMatch: 'full' },
      { path: 'cache', component: ReportComponent, data: { title: 'Redis Caches' } },
    ] },
  ] },
  { path: 'cosmosdb', data: { title: 'Cosmos DB', group: true }, children: [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'db', pathMatch: 'full' },
      { path: 'db', component: ReportComponent, data: { title: 'Databases' } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }

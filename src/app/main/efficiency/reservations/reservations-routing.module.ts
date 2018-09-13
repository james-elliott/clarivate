import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'ec2', pathMatch: 'full' },
  { path: 'ec2', data: { title: 'EC2', group: true }, children: [
    { path: '', redirectTo: 'pulse', pathMatch: 'full' },
    { path: 'pulse', component: ReportComponent, data: { title: 'Utilization Pulse' } },
    { path: 'analyzer', component: ReportComponent, data: { title: 'Analyzer' } },
    { path: 'modifier', component: ReportComponent, data: { title: 'Modifier' } },
    { path: 'criex', component: ReportComponent, data: { title: 'Exchanger' } },
    { path: 'optimizer', component: ReportComponent, data: { title: 'Optimizer' } },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'utilization', pathMatch: 'full' },
      { path: 'utilization', component: ReportComponent, data: { title: 'Reservation Utilization', droptitle: true } },
      { path: 'inventory', component: ReportComponent, data: { title: 'Reservation Inventory', droptitle: true } },
      { path: 'underutilized', component: ReportComponent, data: { title: 'Underutilized Reservations', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
      { path: 'reservation', component: ReportComponent, data: { title: 'Reservations', droptitle: true } },
      { path: 'mod', component: ReportComponent, data: { title: 'Reservation Modifications', droptitle: true } },
      { path: 'listing', component: ReportComponent, data: { title: 'Reservation Listings', droptitle: true } },
    ] },
  ] },
  { path: 'azurevm', data: { title: 'Azure VM', group: true }, children: [
    { path: '', redirectTo: 'optimizer', pathMatch: 'full' },
    { path: 'optimizer', component: ReportComponent, data: { title: 'Optimizer' } },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'utilization', pathMatch: 'full' },
      { path: 'utilization', component: ReportComponent, data: { title: 'Reservation Utilization', droptitle: true } },
      { path: 'inventory', component: ReportComponent, data: { title: 'Reservation Inventory', droptitle: true } },
      { path: 'underutilized', component: ReportComponent, data: { title: 'Underutilized Reservations', droptitle: true } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
      { path: 'reservation', component: ReportComponent, data: { title: 'Reservations', droptitle: true } },
      { path: 'order', component: ReportComponent, data: { title: 'Reservation Orders', droptitle: true } },
    ] },
  ] },
  { path: 'rds', data: { title: 'RDS', group: true }, children: [
    { path: '', redirectTo: 'optimizer', pathMatch: 'full' },
    { path: 'optimizer', component: ReportComponent, data: { title: 'Optimizer' } },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: ReportComponent, data: { title: 'Reservation Inventory' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
      { path: 'reservation', component: ReportComponent, data: { title: 'Reservations' } },
    ] },
  ] },
  { path: 'elasticache', data: { title: 'ElastiCache', group: true }, children: [
    { path: '', redirectTo: 'usage', pathMatch: 'full' },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: ReportComponent, data: { title: 'Reservation Inventory' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
      { path: 'reservation', component: ReportComponent, data: { title: 'Reservations' } },
    ] },
  ] },
  { path: 'redshift', data: { title: 'Redshift', group: true }, children: [
    { path: '', redirectTo: 'usage', pathMatch: 'full' },
    { path: 'usage', data: { title: 'Usage' }, children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: ReportComponent, data: { title: 'Reservation Inventory' } },
    ] },
    { path: 'assets', data: { title: 'Assets' }, children: [
      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
      { path: 'reservation', component: ReportComponent, data: { title: 'Reservations' } },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }

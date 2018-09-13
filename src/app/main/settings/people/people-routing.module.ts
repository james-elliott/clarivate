import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ReportComponent, data: { title: 'Users' } },
  { path: 'roles', component: ReportComponent, data: { title: 'Roles' } },
  { path: 'organizations', component: ReportComponent, data: { title: 'Organizations' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }

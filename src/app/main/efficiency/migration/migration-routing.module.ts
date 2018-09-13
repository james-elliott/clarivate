import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'assessments', pathMatch: 'full' },
  { path: 'assessments', component: ReportComponent, data: { title: 'Assessments' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MigrationRoutingModule { }

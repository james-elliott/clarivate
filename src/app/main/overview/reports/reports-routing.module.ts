import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from '../../../layout/pages/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'saved', pathMatch: 'full' },
  { path: 'saved', component: ReportComponent, data: { title: 'Saved' } },
  { path: 'saved/:id', component: ReportComponent },
  { path: 'custom', component: ReportComponent, data: { title: 'Custom' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

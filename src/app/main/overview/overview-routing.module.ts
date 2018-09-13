import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { ElvNavComponent } from '../../layout/elv-nav/elv-nav.component';
import { LayoutModule } from '../../layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', component: ElvNavComponent, data: { title: 'Dashboards', icon: 'view-quilt' } },
  { path: 'health-check', loadChildren: './healthcheck/healthcheck.module#HealthcheckModule', component: ElvNavComponent, data: { title: 'Health Check', icon: 'heart-pulse' } },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', component: ElvNavComponent, data: { title: 'Reports', icon: 'chart-areaspline' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { ElvNavComponent } from '../../layout/elv-nav/elv-nav.component';
import { LayoutModule } from '../../layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  { path: 'reservations', loadChildren: './reservations/reservations.module#ReservationsModule', data: { title: 'Reservations', icon: 'currency-usd' }, component: ElvNavComponent },
  { path: 'rightsizing', loadChildren: './rightsizing/rightsizing.module#RightsizingModule', data: { title: 'Rightsizing', icon: 'move-resize' }, component: ElvNavComponent },
  { path: 'migration', loadChildren: './migration/migration.module#MigrationModule', data: { title: 'Migration', icon: 'cube-send' }, component: ElvNavComponent },
  { path: 'performance', loadChildren: './performance/performance.module#PerformanceModule', data: { title: 'Performance', icon: 'chart-areaspline' }, component: ElvNavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EfficiencyRoutingModule { }

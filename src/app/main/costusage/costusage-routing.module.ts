import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { ElvNavComponent } from '../../layout/elv-nav/elv-nav.component';
import { LayoutModule } from '../../layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: 'cloud', pathMatch: 'full' },
  { path: 'cloud', loadChildren: './cloudcost/cloudcost.module#CloudcostModule', component: ElvNavComponent, data: { title: 'Cloud Cost', icon: 'cloud' } },
  { path: 'budget', loadChildren: './budget/budget.module#BudgetModule', data: { title: 'Budget', icon: 'currency-usd' }, component: ElvNavComponent },
  { path: 'savings', loadChildren: './savings/savings.module#SavingsModule', data: { title: 'Savings', icon: 'finance' }, component: ElvNavComponent },
  { path: 'compute', loadChildren: './compute/compute.module#ComputeModule', data: { title: 'Compute', icon: 'chip' }, component: ElvNavComponent },
  { path: 'storage', loadChildren: './storage/storage.module#StorageModule', data: { title: 'Storage', icon: 'dns' }, component: ElvNavComponent },
  { path: 'network', loadChildren: './network/network.module#NetworkModule', data: { title: 'Network', icon: 'network' }, component: ElvNavComponent },
  { path: 'database', loadChildren: './database/database.module#DatabaseModule', data: { title: 'Database', icon: 'database' }, component: ElvNavComponent },
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { title: 'Analytics', icon: 'chart-areaspline' }, component: ElvNavComponent },
  { path: 'services', loadChildren: './services/services.module#ServicesModule', data: { title: 'Services', icon: 'briefcase' }, component: ElvNavComponent },
  { path: 'ml', loadChildren: './machinelearning/machinelearning.module#MachinelearningModule', data: { title: 'Machine Learning', icon: 'brain' }, component: ElvNavComponent },
  { path: 'integrations', loadChildren: './integrations/integrations.module#IntegrationsModule', data: { title: 'Integrations', icon: 'google-circles-extended' }, component: ElvNavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostusageRoutingModule { }

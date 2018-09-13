import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './layout/pages/notfound/notfound.component';
import { SubnavComponent } from './layout/subnav/subnav.component';
import { ElvNavComponent } from './layout/elv-nav/elv-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', loadChildren: './main/overview/overview.module#OverviewModule', data: { title: "Overview" } },
  { path: 'cost-usage', loadChildren: './main/costusage/costusage.module#CostusageModule', data: {title: "Cost & Usage" } },
  { path: 'efficiency', loadChildren: './main/efficiency/efficiency.module#EfficiencyModule',  data: {title: "Efficiency" } },
  { path: 'security', loadChildren: './main/security/security.module#SecurityModule',  data: { title: "Security" } },
  { path: 'compliance', loadChildren: './main/compliance/compliance.module#ComplianceModule',  data: { title: "Compliance" } },
  { path: 'settings', loadChildren: './main/settings/settings.module#SettingsModule',  data: { title: "Settings" } },
  { path: '**',  component: NotfoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

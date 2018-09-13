import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { ElvNavComponent } from '../../layout/elv-nav/elv-nav.component';
import { LayoutModule } from '../../layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: 'recommendations', pathMatch: 'full' },
  { path: 'recommendations', loadChildren: './policies/policies.module#PoliciesModule', data: { title: 'Recommendations', icon: 'lightbulb-outline' }, component: ElvNavComponent },
  { path: 'awsconfig', loadChildren: './awsconfig/awsconfig.module#AwsconfigModule', data: { title: 'AWS Config', icon: 'settings-box' }, component: ElvNavComponent },
  { path: 'cloudformation', loadChildren: './cloudformation/cloudformation.module#CloudformationModule', data: { title: 'CloudFormation', icon: 'server' }, component: ElvNavComponent },
  { path: 'appinsights', loadChildren: './appinsights/appinsights.module#AppinsightsModule', data: { title: 'Azure App Insights', icon: 'file-find' }, component: ElvNavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceRoutingModule { }

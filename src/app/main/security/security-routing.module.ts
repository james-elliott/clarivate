import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { ElvNavComponent } from '../../layout/elv-nav/elv-nav.component';
import { LayoutModule } from '../../layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: 'recommendations', pathMatch: 'full' },
  { path: 'recommendations', loadChildren: './recommendations/recommendations.module#RecommendationsModule', data: { title: 'Recommendations', icon: 'lightbulb-outline' }, component: ElvNavComponent },
  { path: 'incidents', loadChildren: './incidents/incidents.module#IncidentsModule', data: { title: 'Incidents', icon: 'alert-circle-outline' }, component: ElvNavComponent },
  { path: 'logs', loadChildren: './logs/logs.module#LogsModule', data: { title: 'Logs', icon: 'file-alert' }, component: ElvNavComponent },
  { path: 'assets', loadChildren: './assets/assets.module#AssetsModule', data: { title: 'Assets', icon: 'dns' }, component: ElvNavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

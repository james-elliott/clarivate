import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { ElvNavComponent } from '../../layout/elv-nav/elv-nav.component';
import { LayoutModule } from '../../layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: 'perspectives', pathMatch: 'full' },
  { path: 'perspectives', loadChildren: './perspectives/perspectives.module#PerspectivesModule', data: { title: 'Perspectives', icon: 'lightbulb-outline' }, component: ElvNavComponent },
  { path: 'people', loadChildren: './people/people.module#PeopleModule', data: { title: 'People', icon: 'account-multiple' }, component: ElvNavComponent },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule', data: { title: 'Accounts', icon: 'cloud' }, component: ElvNavComponent },
  { path: 'actions', loadChildren: './actions/actions.module#ActionsModule', data: { title: 'Actions', icon: 'cube-send' }, component: ElvNavComponent },
  { path: 'accountsettings', loadChildren: './accountsettings/accountsettings.module#AccountsettingsModule', data: { title: 'Account Settings', icon: 'settings' }, component: ElvNavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

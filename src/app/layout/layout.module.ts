import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ReportComponent } from './pages/report/report.component';
import { SubnavComponent } from './subnav/subnav.component';
import { FullpageComponent } from './fullpage/fullpage.component';
import { TabsComponent } from './tabs/tabs.component';
import { DroptitleComponent } from './droptitle/droptitle.component';
import { ElvNavComponent } from './elv-nav/elv-nav.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule
  ],
  declarations: [
    SidenavComponent,
    NotfoundComponent,
    ReportComponent,
    SubnavComponent,
    FullpageComponent,
    TabsComponent,
    DroptitleComponent,
    ElvNavComponent,
    BreadcrumbsComponent
  ]
})
export class LayoutModule { }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sections = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // this.route.data.subscribe(v => console.log(v));
    // console.log(this.router.config);

    // console.log(this.route);

    if (this.route.routeConfig && this.route.routeConfig.hasOwnProperty('_loadedConfig')) {

      let routes = this.route.routeConfig['_loadedConfig'].routes;

      for(var i in routes) {
        // Gather the sections
        if (routes[i].data && routes[i].data.title) {
          let section = {
            path: routes[i].path,
            title: routes[i].data.title,
            group: routes[i].data.group ? routes[i].data.group : false,
            children: []
          };
          if (routes[i].data.group && routes[i].children) {
            // It has kids. let's make it a group
            let linkRoutes = routes[i].children;

            for(var i in linkRoutes) {
              if (linkRoutes[i].data && linkRoutes[i].data.title) {
                let link = {
                  path: linkRoutes[i].path,
                  title: linkRoutes[i].data.title
                };

                section.children.push(link);
              }
            }
          }

          this.sections.push(section);
        }
      }
    }
  }

}

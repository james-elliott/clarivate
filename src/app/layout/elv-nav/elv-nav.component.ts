import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-elv-nav',
  templateUrl: './elv-nav.component.html',
  styleUrls: ['./elv-nav.component.scss']
})
export class ElvNavComponent implements OnInit {

  sections = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // this.route.data.subscribe(v => console.log(v));
    // console.log(this.router.config);

    // console.log(this.route);

    let baseRoute = this.route.parent;

    if (baseRoute.routeConfig && baseRoute.routeConfig.hasOwnProperty('_loadedConfig')) {

      let sectionRoutes = baseRoute.routeConfig['_loadedConfig'].routes;

      for(var i in sectionRoutes) {
        // Gather the sections
        if (sectionRoutes[i].data && sectionRoutes[i].data.title) {
          let section = {
            path: sectionRoutes[i].path,
            title: sectionRoutes[i].data.title,
            group: sectionRoutes[i].data.group ? sectionRoutes[i].data.group : false,
            icon: sectionRoutes[i].data.icon ? 'mdi-' + sectionRoutes[i].data.icon : 'mdi-view-quilt',
            children: []
          };

          if (sectionRoutes[i]._loadedConfig && sectionRoutes[i]._loadedConfig.routes) {
            // It has kids. let's make it a group
            let linkRoutes = sectionRoutes[i]._loadedConfig.routes;

            for(var i in linkRoutes) {
              if (linkRoutes[i].data && linkRoutes[i].data.title) {
                let link = {
                  path: linkRoutes[i].path,
                  title: linkRoutes[i].data.title,
                  group: linkRoutes[i].data.group,
                  children: []
                };

                if (link.group && linkRoutes[i].children) {
                  let sublinks = linkRoutes[i].children;
                  for(var i in sublinks) {
                    if (sublinks[i].data && sublinks[i].data.title) {
                      let sublink = {
                        path: sublinks[i].path,
                        title: sublinks[i].data.title
                      };
                      link.children.push(sublink);
                    }

                  }

                }

                // console.log(link);
                section.children.push(link);
              }
            }
          }
          // console.log(section);
          this.sections.push(section);
        }
      }
    }
  }

}

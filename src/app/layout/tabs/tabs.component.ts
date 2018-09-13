import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs = [];
  title = 'default';

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    this.route.parent.data.subscribe(v => this.title = v.title);

    let baseRoute = this.route.parent;

    if (baseRoute.routeConfig && baseRoute.routeConfig.children) {

      let routes = baseRoute.routeConfig.children;

      for(var i in routes) {
        if (routes[i].data && routes[i].data.title) {
          let link = {
            path: routes[i].path,
            title: routes[i].data.title
          };

          this.tabs.push(link);
        }
      }
    }
  }

}

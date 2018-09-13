import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-droptitle',
  templateUrl: './droptitle.component.html',
  styleUrls: ['./droptitle.component.scss']
})
export class DroptitleComponent implements OnInit {

  links = [];
  title = 'default';
  droptitle = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(v => this.title = v.title);
    this.route.data.subscribe(v => this.droptitle = v.droptitle);

    let baseRoute = this.route.parent;

    if (baseRoute.routeConfig && baseRoute.routeConfig.children) {

      let routes = baseRoute.routeConfig.children;

      for(var i in routes) {
        if (routes[i].data && routes[i].data.title) {
          let link = {
            path: routes[i].path,
            title: routes[i].data.title
          };

          this.links.push(link);
        }
      }
    }
  }

}

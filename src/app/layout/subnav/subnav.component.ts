import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {

  links = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    if (this.route.routeConfig && this.route.routeConfig.hasOwnProperty('_loadedConfig')) {

      let routes = this.route.routeConfig['_loadedConfig'].routes;

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

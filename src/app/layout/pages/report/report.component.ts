import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  title = 'unknown';

  links = [];
  droptitle = false;
  tabs = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    this.route.data.subscribe(v => this.droptitle = v.droptitle);
    this.route.data.subscribe(v => this.tabs = v.tabs);

    if (this.route.routeConfig.data.dropdown && this.route.parent.routeConfig && this.route.parent.routeConfig.children) {

      let routes = this.route.parent.routeConfig.children;

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

    this.route.data.subscribe(v => this.title = v.title);

  }

}

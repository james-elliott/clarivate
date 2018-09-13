import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  links = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    let segments = this.route.pathFromRoot.slice(2);

    if (segments.length > 1) {
      // remove the terminal link
      segments.pop();

      for(var i in segments) {
        if (segments[i].routeConfig && segments[i].routeConfig.data.title) {
          let link = {
            path: segments[i].routeConfig.path,
            title: segments[i].routeConfig.data.title
          };

          this.links.push(link);
        }
      }
    }
  }

}

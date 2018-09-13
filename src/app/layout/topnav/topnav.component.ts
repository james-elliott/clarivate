import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  links = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // this.route.data.subscribe(v => console.log(v));
    // console.log(this.router.config);

    let routes = this.router.config;

    for(var i in routes) {
      // this.links[] = link;
      if (routes[i].data && routes[i].data.title) {
        this.links.push(routes[i]);
      }
    }

  }

}

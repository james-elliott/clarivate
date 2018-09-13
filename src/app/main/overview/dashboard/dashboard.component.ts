import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
     // this.route.data.subscribe(v => console.log(v));

    // let id = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => params.get('id'))
    // );
    // console.log(id);
  }
}

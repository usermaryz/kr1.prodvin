import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-route-test',
  templateUrl: './route-test.component.html',
  styleUrls: ['./route-test.component.css'],
})
export class RouteTestComponent implements OnInit {
  item;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    let id = route.snapshot.params['id'];

    if (id < 0) {
      router.navigate(['/item/0']);
    }

    let data = dataService.getData();
    if (id > data.length - 1) {
      let str = (data.length - 1).toString();
      router.navigate(['/item/' + str]);
    }

    this.item = data[id];
  }

  ngOnInit(): void {}
}

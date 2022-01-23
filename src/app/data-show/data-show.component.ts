import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css'],
})
export class DataShowComponent implements OnInit {
  items;
  constructor(private dataService: DataService) {
    this.items = dataService.getData();
  }

  ngOnInit(): void {}
}

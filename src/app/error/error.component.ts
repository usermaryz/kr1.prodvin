import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
type = 7;
  ngOnInit(): void {}

  changeTheme() {
    let type = 'dark';
  }
}


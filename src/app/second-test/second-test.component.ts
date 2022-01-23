import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.css'],
})
export class SecondTestComponent implements OnInit {
  itemGroup;
  constructor(private dataService: DataService) {
    this.itemGroup = new FormGroup({
      item: new FormControl('', [Validators.required]),
    });
  }

  addItem() {
    console.log(this.itemGroup.controls['item']);
    this.dataService.addToData(this.itemGroup.controls['item'].value);
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css'],
})
export class FormTestComponent implements OnInit {
  profileGroup;

  constructor() {
    this.profileGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(10), Validators.max(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  onSumbit() {
    console.log(this.profileGroup);
  }
}

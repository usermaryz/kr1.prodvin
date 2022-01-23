import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  personGroup: FormGroup;
  constructor(private peopleService: CarService) {
    this.personGroup = new FormGroup({
      mark: new FormControl('', [Validators.required, Validators.minLength(3),  Validators.maxLength(10)]),
      model: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      cost: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    });
  }

  ngOnInit(): void {}

  create() {
    console.log(this.personGroup.value);
    this.peopleService.addParticipant(
      this.personGroup.controls['mark'].value,
      this.personGroup.controls['model'].value,
      this.personGroup.controls['cost'].value,
    );
  }
}

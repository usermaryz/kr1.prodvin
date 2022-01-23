import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  people: Person[];
  constructor(private peopleService: CarService) {
    this.people = peopleService.getParticipants();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

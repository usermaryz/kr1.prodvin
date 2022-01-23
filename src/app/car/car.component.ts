import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  person: Person;
  constructor(
    private CarService: CarService,
    private route: ActivatedRoute
  ) {
    let id: number = route.snapshot.params['id'];
    this.person = CarService.getParticipant(id);
  }

  ngOnInit(): void {}
}
import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  people: Person[];
  constructor() {
    this.people = [
      {
        id: 0,
        mark: 'Ниссан',
        model: 'Кашкай',
        cost: 800000,
      },
      {
        id: 1,
        mark: 'Мерседез',
        model: 'Бенз',
        cost: 1500000,
      },
      {
        id: 2,
        mark: 'Порш',
        model: 'Кайен',
        cost: 4500000,
      },
      {
        id: 3,
        mark: 'Порш',
        model: 'Тайкан',
        cost: 4800000,
      },
    ];
  }

  getParticipants() {
    return this.people;
  }

  addParticipant(
    mark: string,
    model: string,
    cost: number,
  ) {
    let lastParticipant = this.people[this.people.length - 1];
    let newId = lastParticipant.id + 1;

    this.people.push({
      id: newId,
      mark: mark,
      model: model,
      cost: cost,
    });
  }

  getParticipant(index: number) {
    return this.people[index];
  }
}

import { Injectable } from '@angular/core';
import { Car } from './car';
import { CarComponent } from './car/car.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // lista vuota di auto
  private listCar: CarComponent[];

  // istanzia una lista vuota di auto
  constructor() {
    this.listCar = [];
  }

  // ritorna la lista di auto
  getCar(): CarComponent[] {
    return this.listCar;
  }

  // aggiunge un'auto alla lista
  addCar(car: CarComponent) {
    this.listCar.push(car);
  }

}

import { Injectable } from '@angular/core';
import { Car } from '../../shared/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  // lista vuota di auto

  //listCar: CarComponent[] = [];

  listCar: Car[] = [];

  // istanzia una lista vuota di auto
  constructor() {
    console.log(this.listCar)
  }

  // ritorna la lista di auto
  getCar(): Car[] {
    return this.listCar;
  }

  // aggiunge un'auto alla lista
  addCar(car: Car) {
    this.listCar.push(car);
  }

}

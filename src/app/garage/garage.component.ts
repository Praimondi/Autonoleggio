import { Component, OnInit } from '@angular/core';
import { CarComponent } from '../car/car.component';
@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
})
export class GarageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  cars: CarComponent[] = [];

  marca: string = '';
  modello: string = '';
  cambio: string = '';

  addAuto(nuovoAuto: CarComponent) {
    this.cars.push(nuovoAuto);
  }
}

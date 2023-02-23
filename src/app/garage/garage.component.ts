import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
  providers: [CarService],
})
export class GarageComponent implements OnInit {
  ngOnInit(): void {}

  // lista vuota di auto non ancora istanziata
  listCar;

  // istanzia una lista vuota di auto tramite il getCar del service
  constructor(private route: Router, private carService: CarService) {
    this.listCar = carService.getCar();
  }

  // aggiunge un'auto tramite addcar e
  // la ritorna in locale con il getCar del service
  addCar(sendedCar: CarComponent) {
    this.carService.addCar(sendedCar);
    this.listCar = this.carService.getCar();
  }


/*   cars: CarComponent[] = [];

  marca: string = '';
  modello: string = '';
  cambio: string = '';

  addAuto(nuovoAuto: CarComponent) {
    this.cars.push(nuovoAuto);
  } */
}

import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
})
export class GarageComponent implements OnInit {
  ngOnInit(): void {}
  mostra: boolean = false;
  aggiungi: boolean = false;

  // lista vuota di auto non ancora istanziata
  listCar: CarComponent[];

  // istanzia una lista vuota di auto tramite il getCar del service
  constructor(private route: Router, private carService: CarService) {
    this.listCar = carService.getCar();
  }

  // aggiunge un'auto tramite addcar e
  // la ritorna in locale con il getCar del service
  forEventCloseForm(sendedBool: boolean) {
    this.aggiungi = sendedBool
    this.listCar = this.carService.getCar();
  }

  onClickMostra(){
    this.mostra = !this.mostra
  }

  onClickAggiungi(){
    this.aggiungi = !this.aggiungi
  }

}

import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarComponent } from '../car/car.component';
import { Car } from '../interfaces/car';
import { CarAPIService } from '../car-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
})
export class GarageComponent implements OnInit {
  mostra: boolean = false;
  aggiungi: boolean = false;

  // lista vuota di auto non ancora istanziata
  // listCar: CarComponent[];
  listCar: Car[] = []
  //tempListCar: Car[] = []
  subscription: Subscription = new Subscription;

  // istanzia una lista vuota di auto tramite il getCar del service

  // constructor(private route: Router, private carService: CarService) {
  constructor(private carService: CarService, private listCarApi: CarAPIService) {
    // this.listCar = carService.getCar();

  }
  ngOnInit(): void {
    this.subscription = this.listCarApi.getCarList().subscribe((data: Car[]) => {
      this.listCar = data;
      this.listCar.forEach(car => {
        this.carService.addCar(car);
      })
      //this.listCar = data;
    });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // aggiunge un'auto tramite addcar e
  // la ritorna in locale con il getCar del service
  forEventCloseForm(sendedBool: boolean) {
    this.aggiungi = sendedBool
    this.listCar = this.carService.getCar();
  }

  pushCarsFromCarService(){
    this.listCar = this.carService.getCar();

  }

  onClickMostra(){
    this.mostra = !this.mostra
  }

  onClickAggiungi(){
    this.aggiungi = !this.aggiungi
  }

  showAlertMessage = false;

  showAlert(id: number) {
    for(let car of this.listCar){
      if(car.id === id){
        car.disponibile = !car.disponibile;
      }
    }
    // this.showAlertMessage = !this.showAlertMessage;
  }

}

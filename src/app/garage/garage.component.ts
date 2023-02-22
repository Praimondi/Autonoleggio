import { Component, Input, OnInit } from '@angular/core';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit{

  marca: string="";
  modello: string="";
  cambio: string="";


  cars: CarComponent[]=[];
  @Input()prenotabile = false;

  constructor(){}
  ngOnInit(): void {
  }

  addAuto(nuovaAuto: CarComponent){
    this.cars.push(nuovaAuto);
  }

  prenotaAuto() {
    this.prenotabile = !this.prenotabile;
  }
}

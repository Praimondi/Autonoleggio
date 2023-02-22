import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit{
  constructor(){

  };

  ngOnInit(): void {
  };

  @Input() marca: string = "";
  @Input() modello: string = "";
  @Input() cambio: string = "";

  @Output() car = new EventEmitter<CarComponent>();


    //input
    newCar(marca: string, modello: string, cambio: string){
      const auto = new CarComponent;
      auto.marca = marca;
      auto.modello = modello;
      auto.cambio = cambio;
      this.car.emit(auto);
    }
}

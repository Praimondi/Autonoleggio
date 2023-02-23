import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  marca: string;
  modello: string;
  cambio: string;

  constructor() {
    this.marca="";
    this.modello="";
    this.cambio="";
  }
  ngOnInit(): void {}

/*   marca: string = '';
  modello: string = '';
  cambio: string = '';

  constructor( marca: string, modello: string, cambio: string) {
    this.marca = marca;
    this.modello = modello;
    this.cambio = cambio;
  }
  ngOnInit(): void {} */

/*   @Input() marca: string = '';
  @Input() modello: string = '';
  @Input() cambio: string = '';

  @Output() car = new EventEmitter<CarComponent>();

  newCar = (marca: string, modello: string, cambio: string) => {
    const nuovaAuto = new CarComponent();
    nuovaAuto.marca = marca;
    nuovaAuto.modello = modello;
    nuovaAuto.cambio = cambio;
    this.car.emit(nuovaAuto);
  }; */
}

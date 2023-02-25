import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {}
/*   marca: string;
  modello: string;
  cambio: string;

  constructor() {
    this.marca="";
    this.modello="";
    this.cambio="";
  }
  ngOnInit(): void {} */
}

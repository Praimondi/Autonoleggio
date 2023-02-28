import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import { Car } from 'src/app/shared/car';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.scss']
})
export class CarPreviewComponent implements OnInit{
  mostra: boolean = false;
  listCar: Car[] = []

  constructor(private carService: CarService) { }
  ngOnInit(): void {
    this.listCar = this.carService.getCar();
  }

  showAlertMessage = false;
  showAlert(id: number) {
    for(let car of this.listCar){
      if(car.id === id){
        car.disponibile = !car.disponibile;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarAPIService } from 'src/app/core/services/car-api.service';
import { CarService } from 'src/app/core/services/car.service';
import { Car } from 'src/app/shared/car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export class ListCarComponent implements OnInit{
  listCar: Car[] = []
  subscription: Subscription = new Subscription;


  constructor(private carService: CarService, private listCarApi: CarAPIService) { }
  ngOnInit(): void {
    this.subscription = this.listCarApi.getCarList().subscribe((data: Car[]) => {
      this.listCar = data;
      this.listCar.forEach(car => {
        this.carService.addCar(car);
      })
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

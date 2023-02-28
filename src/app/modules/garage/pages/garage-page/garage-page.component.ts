import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/shared/car';
import { CarAPIService } from 'src/app/core/services/car-api.service';
import { CarService } from 'src/app/core/services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garage-page',
  templateUrl: './garage-page.component.html',
  styleUrls: ['./garage-page.component.scss']
})
export class GaragePageComponent implements OnInit{

  constructor(private carService: CarService, private router: Router) {}
  ngOnInit(): void {}


  go2Car(){
    this.router.navigate(['car']);
  }

  go2Preview(){
    this.router.navigate(['carPreview']);
  }
}

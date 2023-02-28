import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaragePageComponent } from './pages/garage-page/garage-page.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { CarPreviewComponent } from './components/car-preview/car-preview.component';
import { CarComponent } from './components/car/car.component';
import { CoreModule } from 'src/app/core/core.module';
import { CarFormReactiveComponent } from './components/car-form-reactive/car-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GarageRoutingModule } from './garage-routing.module';
import { MonthToDayPricePipe } from 'src/app/shared/pipes/month-to-day-price.pipe';

@NgModule({
  declarations: [
    GaragePageComponent,
    ListCarComponent,
    CarPreviewComponent,
    CarComponent,
    CarFormReactiveComponent,
    MonthToDayPricePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    GarageRoutingModule,
    ReactiveFormsModule
  ]
})
export class GarageModule { }

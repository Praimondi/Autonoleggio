import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageComponent } from './garage/garage.component';
import { CarComponent } from './car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarFormReactiveComponent } from './car-form-reactive/car-form-reactive.component';
import { HeaderComponent } from './header/header.component';
import { MonthToDayPricePipe } from 'src/pipes/month-to-day-price.pipe';
import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent,
    CarComponent,
    MonthToDayPricePipe,
    CarFormReactiveComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

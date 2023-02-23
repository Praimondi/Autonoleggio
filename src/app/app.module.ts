import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageComponent } from './garage/garage.component';
import { CarComponent } from './car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthToDayPricePipe } from './month-to-day-price.pipe';
import { CarFormReactiveComponent } from './car-form-reactive/car-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent,
    CarComponent,
    MonthToDayPricePipe,
    CarFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

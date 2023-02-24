import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormReactiveComponent } from './car-form-reactive/car-form-reactive.component';
import { GarageComponent } from './garage/garage.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'app-garage/mostra-auto', component: GarageComponent},
  {path:'app-garage', component: GarageComponent},
  {path:'app-car-form-reactive', component: CarFormReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

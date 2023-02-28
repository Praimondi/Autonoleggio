import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarPreviewComponent } from './components/car-preview/car-preview.component';
import { CarComponent } from './components/car/car.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { GaragePageComponent } from './pages/garage-page/garage-page.component';

const routes: Routes = [
  {
    path: '',
    component: GaragePageComponent,
    children:[
      {path:'car', component: CarComponent},
      {path:'carPreview', component: CarPreviewComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }

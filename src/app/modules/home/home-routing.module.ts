import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaragePageComponent } from '../garage/pages/garage-page/garage-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

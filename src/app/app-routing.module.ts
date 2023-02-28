import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { GarageModule } from './modules/garage/garage.module';
import { GaragePageComponent } from './modules/garage/pages/garage-page/garage-page.component';
import { HomeModule } from './modules/home/home.module';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [

  {
    path: '',
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'garagePage',
    loadChildren:() => import('./modules/garage/garage.module').then(m => m.GarageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

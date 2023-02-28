import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaragePageComponent } from './pages/garage-page/garage-page.component';
/* import { MailerPageComponent } from './pages/mailer-page/mailer-page.component';
import { MailComponent, MailPreviewComponent } from './components'; */

const routes: Routes = [
  {
    path: '',
    component: GaragePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }

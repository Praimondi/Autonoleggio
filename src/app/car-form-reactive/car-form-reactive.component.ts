import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
/* import { CarComponent } from '../car/car.component';
 */
import { Car } from 'src/app/car';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-car-form-reactive',
  templateUrl: './car-form-reactive.component.html',
  styleUrls: ['./car-form-reactive.component.scss']
})
export class CarFormReactiveComponent {
  @Output() sendedCar = new EventEmitter();
  newCar: Car = {marca: '', modello: '', cambio: ''};

  nuovaAuto = new CarComponent();

  myForm: FormGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      txtMarca: ['',[Validators.required]],
      txtModello: ['',[Validators.required]],
      txtCambio: ['',[Validators.required]],
    })
  }

  addNewCar(){
    this.nuovaAuto.marca = this.myForm.get('txtMarca')!.value
    this.nuovaAuto.modello = this.myForm.get('txtModello')!.value
    this.nuovaAuto.cambio = this.myForm.get('txtCambio')!.value

    this.myForm.reset();
    this.sendedCar.emit(this.nuovaAuto);
    
/*     this.newCar.marca = this.myForm.get('txtMarca')!.value
    this.newCar.modello = this.myForm.get('txtModello')!.value
    this.newCar.cambio = this.myForm.get('txtCambio')!.value

    this.myForm.reset();
    this.sendedCar.emit(this.newCar); */

/*     const newCar = new CarModule(
      this.myForm.get('txtMarca')!.value,
      this.myForm.get('txtModello')!.value,
      this.myForm.get('txtCambio')!.value,
    ); */
  }


}

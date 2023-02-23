import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-car-form-reactive',
  templateUrl: './car-form-reactive.component.html',
  styleUrls: ['./car-form-reactive.component.scss']
})
export class CarFormReactiveComponent {
  @Output() sendedCar = new EventEmitter();

  myForm: FormGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      txtMarca: ['',[Validators.required]],
      txtModello: ['',[Validators.required]],
      txtCambio: ['',[Validators.required]],
    })
  }

  addNewCar(){
    const nuovaAuto = new CarComponent();
    nuovaAuto.marca = this.myForm.get('txtMarca')!.value
    nuovaAuto.modello = this.myForm.get('txtModello')!.value
    nuovaAuto.cambio = this.myForm.get('txtCambio')!.value

    this.myForm.reset();
    this.sendedCar.emit(nuovaAuto);
  }
}

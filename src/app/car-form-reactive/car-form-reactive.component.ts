import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { CarComponent } from '../car/car.component';
import { Car } from '../interfaces/car'

@Component({
  selector: 'app-car-form-reactive',
  templateUrl: './car-form-reactive.component.html',
  styleUrls: ['./car-form-reactive.component.scss'],
})
export class CarFormReactiveComponent {
  @Output() sendedCar = new EventEmitter();

  myForm: FormGroup;

  constructor(fb: FormBuilder, private route: Router, private carService: CarService){
    this.myForm = fb.group({
      txtMarca: ['',[Validators.required]],
      txtModello: ['',[Validators.required]],
      txtAnno: ['',[Validators.required]],
      txtColore: ['',[Validators.required]],
      numPrezzoMensile: [,[Validators.required]]
    })
  }

  addNewCar(){
/*     const nuovaAuto = new CarComponent();
 */
    let amountOfCars = this.carService.getCar().length
    let nuovaAuto: Car = {
      marca: this.myForm.get('txtMarca')!.value,
      modello: this.myForm.get('txtModello')!.value,
      anno: this.myForm.get('txtAnno')!.value,
      colore: this.myForm.get('txtColore')!.value,
      prezzoMensile: this.myForm.get('numPrezzoMensile')!.value,
      disponibile: true,
      id: amountOfCars+1
    }

/*     nuovaAuto.marca = this.myForm.get('txtMarca')!.value
    nuovaAuto.modello = this.myForm.get('txtModello')!.value
    nuovaAuto.cambio = this.myForm.get('txtCambio')!.value */

    this.carService.addCar(nuovaAuto);


    this.myForm.reset();
    this.sendedCar.emit(false);

  }
}

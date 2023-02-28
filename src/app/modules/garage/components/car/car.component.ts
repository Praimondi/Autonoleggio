import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit{

  mostraForm: boolean = true;

  constructor() { }
  ngOnInit(): void {
  }

  forEventCloseForm(sendedBool: boolean) {
    this.mostraForm = sendedBool;
  }
}

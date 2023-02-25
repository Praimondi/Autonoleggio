import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarAPIService {

  private BASE_URL = '';

  constructor(private http: HttpClient) { }

  getCarList(): Observable<Car[]> {
    return this.http.get<Car[]>('https://demo2195363.mockable.io');
  }

}

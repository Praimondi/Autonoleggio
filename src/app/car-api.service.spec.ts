import { TestBed } from '@angular/core/testing';

import { CarAPIService } from './car-api.service';

describe('CarAPIService', () => {
  let service: CarAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

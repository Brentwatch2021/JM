import { TestBed } from '@angular/core/testing';

import { VehiclesAPIService } from './vehicles-api.service';

describe('VehiclesAPIService', () => {
  let service: VehiclesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

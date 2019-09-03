import { TestBed } from '@angular/core/testing';

import { LedVehicleService } from './led-vehicle.service';

describe('LedVehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LedVehicleService = TestBed.get(LedVehicleService);
    expect(service).toBeTruthy();
  });
});

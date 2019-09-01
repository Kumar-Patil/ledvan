import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedVehicleComponent } from './led-vehicle.component';

describe('LedVehicleComponent', () => {
  let component: LedVehicleComponent;
  let fixture: ComponentFixture<LedVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

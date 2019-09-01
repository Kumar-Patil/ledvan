import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedVehicleTabComponent } from './led-vehicle-tab.component';

describe('LedVehicleTabComponent', () => {
  let component: LedVehicleTabComponent;
  let fixture: ComponentFixture<LedVehicleTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedVehicleTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedVehicleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

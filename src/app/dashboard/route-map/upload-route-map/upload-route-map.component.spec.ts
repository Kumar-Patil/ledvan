import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRouteMapComponent } from './upload-route-map.component';

describe('UploadRouteMapComponent', () => {
  let component: UploadRouteMapComponent;
  let fixture: ComponentFixture<UploadRouteMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRouteMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRouteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

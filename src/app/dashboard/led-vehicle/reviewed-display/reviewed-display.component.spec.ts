import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedDisplayComponent } from './reviewed-display.component';

describe('ReviewedDisplayComponent', () => {
  let component: ReviewedDisplayComponent;
  let fixture: ComponentFixture<ReviewedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

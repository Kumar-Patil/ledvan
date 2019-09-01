import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreviewedDisplayComponent } from './unreviewed-display.component';

describe('UnreviewedDisplayComponent', () => {
  let component: UnreviewedDisplayComponent;
  let fixture: ComponentFixture<UnreviewedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreviewedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreviewedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

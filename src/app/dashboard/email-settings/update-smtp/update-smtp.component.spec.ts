import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSmtpComponent } from './update-smtp.component';

describe('UpdateSmtpComponent', () => {
  let component: UpdateSmtpComponent;
  let fixture: ComponentFixture<UpdateSmtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSmtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSmtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

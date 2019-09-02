import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePanelUsersComponent } from './create-panel-users.component';

describe('CreatePanelUsersComponent', () => {
  let component: CreatePanelUsersComponent;
  let fixture: ComponentFixture<CreatePanelUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePanelUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePanelUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

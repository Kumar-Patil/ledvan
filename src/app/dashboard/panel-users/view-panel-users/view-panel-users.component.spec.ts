import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPanelUsersComponent } from './view-panel-users.component';

describe('ViewPanelUsersComponent', () => {
  let component: ViewPanelUsersComponent;
  let fixture: ComponentFixture<ViewPanelUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPanelUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPanelUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

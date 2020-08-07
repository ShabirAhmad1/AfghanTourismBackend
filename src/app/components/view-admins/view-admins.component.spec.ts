import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminsComponent } from './view-admins.component';

describe('ViewAdminsComponent', () => {
  let component: ViewAdminsComponent;
  let fixture: ComponentFixture<ViewAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

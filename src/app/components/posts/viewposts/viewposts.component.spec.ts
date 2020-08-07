import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostsComponent } from './viewposts.component';

describe('ViewpostsComponent', () => {
  let component: ViewpostsComponent;
  let fixture: ComponentFixture<ViewpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

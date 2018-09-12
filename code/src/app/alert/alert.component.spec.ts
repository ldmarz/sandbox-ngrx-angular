import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSucessComponent } from './alert.component';

describe('AlertSucessComponent', () => {
  let component: AlertSucessComponent;
  let fixture: ComponentFixture<AlertSucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

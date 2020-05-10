import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplePasswordComponent } from './apple-password.component';

describe('ApplePasswordComponent', () => {
  let component: ApplePasswordComponent;
  let fixture: ComponentFixture<ApplePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

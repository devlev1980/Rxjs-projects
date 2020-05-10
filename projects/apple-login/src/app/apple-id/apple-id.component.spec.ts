import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleIdComponent } from './apple-id.component';

describe('AppleIdComponent', () => {
  let component: AppleIdComponent;
  let fixture: ComponentFixture<AppleIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

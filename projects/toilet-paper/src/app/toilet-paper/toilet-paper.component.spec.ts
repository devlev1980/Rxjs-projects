import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletPaperComponent } from './toilet-paper.component';

describe('ToiletPaperComponent', () => {
  let component: ToiletPaperComponent;
  let fixture: ComponentFixture<ToiletPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

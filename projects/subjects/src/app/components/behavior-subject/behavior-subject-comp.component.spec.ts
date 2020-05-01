import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectComp } from './behavior-subject-comp.component';

describe('Comp2Component', () => {
  let component: BehaviorSubjectComp;
  let fixture: ComponentFixture<BehaviorSubjectComp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectComp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSubjectComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

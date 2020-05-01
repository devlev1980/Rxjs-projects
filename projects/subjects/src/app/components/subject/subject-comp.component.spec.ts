import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComp } from './subject-comp.component';

describe('Comp1Component', () => {
  let component: SubjectComp;
  let fixture: ComponentFixture<SubjectComp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectComp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

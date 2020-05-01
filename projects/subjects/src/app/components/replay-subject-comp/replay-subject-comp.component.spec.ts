import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectCompComponent } from './replay-subject-comp.component';

describe('ReplaySubjectCompComponent', () => {
  let component: ReplaySubjectCompComponent;
  let fixture: ComponentFixture<ReplaySubjectCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaySubjectCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubjectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

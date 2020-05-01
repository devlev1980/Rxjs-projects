import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectCompComponent } from './async-subject-comp.component';

describe('AsyncSubjectCompComponent', () => {
  let component: AsyncSubjectCompComponent;
  let fixture: ComponentFixture<AsyncSubjectCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncSubjectCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSubjectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

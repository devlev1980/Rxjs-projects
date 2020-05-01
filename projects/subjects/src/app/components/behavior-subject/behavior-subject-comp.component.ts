import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../../models/student';

@Component({
  selector: 'yl-behavior-subject-comp',
  templateUrl: './behavior-subject-comp.component.html',
  styleUrls: ['./behavior-subject-comp.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class BehaviorSubjectComp implements OnInit {
@Input()behaviorSubjectStudents: Array<IStudent>;
  constructor() { }

  ngOnInit(): void {
  }

}

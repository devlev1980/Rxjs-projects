import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Observable} from 'rxjs';
import {IStudent} from '../../models/student';

@Component({
  selector: 'yl-subject-comp',
  templateUrl: './subject-comp.component.html',
  styleUrls: ['./subject-comp.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class SubjectComp implements OnInit {


  constructor(private subjectService: SubjectService) {
  }

  ngOnInit(): void {



  }


}

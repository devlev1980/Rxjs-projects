import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IStudent} from '../../models/student';
import {SubjectService} from '../../services/subject.service';

@Component({
  selector: 'yl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private subjectStudents$: Observable<IStudent>;
  private behaviorSubjectStudents$: Observable<IStudent>;
  private asyncSubjectStudents$: Observable<IStudent>;
  private replaySubjectStudents$: Observable<IStudent>;
  subjectStudents = [];
  behaviorSubjectStudents = [];
  asyncSubjectStudents = [];
  replaySubjectStudents = [];

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subjectStudents$ = this.subjectService.subjectObservable$;
    this.behaviorSubjectStudents$ = this.subjectService.behaviorSubjectObservable$;
    this.asyncSubjectStudents$ = this.subjectService.asyncSubjectObservable$;
    this.replaySubjectStudents$ = this.subjectService.replaySubjectObservable$;

    this.subjectStudents$.subscribe(student => {
      this.subjectStudents.push(student);
      console.log(this.subjectStudents);

    });


    this.behaviorSubjectStudents$.subscribe(student => {
      setTimeout(() => {
        this.behaviorSubjectStudents.push(student);
        console.log(this.behaviorSubjectStudents);
      }, 6000);

    });
    this.asyncSubjectStudents$.subscribe(student => {
      setTimeout(() => {
        this.asyncSubjectStudents.push(student);
        console.log(this.asyncSubjectStudents);
      }, 9000);
    });

    this.replaySubjectStudents$.subscribe(student => {
      setTimeout(() => {
        this.replaySubjectStudents.push(student);
        console.log(this.replaySubjectStudents);
      }, 12000);
    });
  }

  onSendSubject() {
    this.subjectService.sendData();
  }

}

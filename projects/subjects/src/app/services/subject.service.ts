import {Injectable, OnInit} from '@angular/core';
import {AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {IStudent} from '../models/student';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subject$: Subject<IStudent>;
  subjectObservable$: Observable<IStudent>;

  private behaviorSubject$: BehaviorSubject<IStudent>;
  behaviorSubjectObservable$: Observable<IStudent>;

  private asyncSubject$: AsyncSubject<IStudent>;
  asyncSubjectObservable$: Observable<IStudent>;

  private replaySubject$: ReplaySubject<IStudent>;
  replaySubjectObservable$: Observable<IStudent>;
  private todos$: Observable<IStudent[]>;
  private users: IStudent[] = [];
  private count: number = 0;


  constructor(private http: HttpClient) {


    this.initSubjects();
  }


  initSubjects() {
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();

    this.behaviorSubject$ = new BehaviorSubject(null);
    this.behaviorSubjectObservable$ = this.behaviorSubject$.asObservable();

    this.asyncSubject$ = new AsyncSubject();
    this.asyncSubjectObservable$ = this.asyncSubject$.asObservable();

    this.replaySubject$ = new ReplaySubject();
    this.replaySubjectObservable$ = this.replaySubject$.asObservable();
  }

  sendData() {
    this.todos$ = this.http.get<IStudent[]>('https://jsonplaceholder.typicode.com/users');
    this.todos$.subscribe(data => {
      this.users = data;
      setInterval(() => {
        this.subject$.next(this.users[this.count]);
        this.behaviorSubject$.next(this.users[this.count]);
        this.asyncSubject$.next(this.users[this.count]);
        this.replaySubject$.next(this.users[this.count]);
        this.count++;
        if (this.count >= 5) {
          this.count = 0;
          this.subject$.complete();
          this.behaviorSubject$.complete();
          this.asyncSubject$.complete();
          this.replaySubject$.complete();
        }
      }, 1000);
    });
  }
}

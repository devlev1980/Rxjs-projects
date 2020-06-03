import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private behaviorSubject: BehaviorSubject<string>;
  data$: Observable<string>;

  constructor() {
    this.behaviorSubject = new BehaviorSubject<string>('');
    this.data$ = this.behaviorSubject.asObservable();
  }

  sendPassword(password: string) {
    this.behaviorSubject.next(password);
  }
}

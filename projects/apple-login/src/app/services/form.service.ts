import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {



  private password: BehaviorSubject<IUser>;
  passwordObservable$: Observable<IUser>;

  constructor() {
    this.password = new BehaviorSubject<IUser>(null);
  }

  getPassword(): Observable<IUser> {
    return this.passwordObservable$ = this.password.asObservable();
  }

  setPassword(value) {
    this.password.next(value);
  }
}
export interface IUser {
  username: string;
  password: string;
}

import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private user: Observable<firebase.User>;

  isAuthenticated: boolean = false;

  constructor(private firebaseAuth: AngularFireAuth) {
    // this.user = firebaseAuth.authState;
  }

  isLoggedIn(): Observable<boolean> {
    return this.firebaseAuth.authState.pipe(
      map((auth) => {
        if (auth == null) {
          return false;
        } else {
          return true;
        }
      }));


  }


  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Nice, it worked!');

      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });

  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}

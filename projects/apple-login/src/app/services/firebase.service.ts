import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from 'firebase';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private user: Observable<firebase.User>;


  constructor(private firebaseAuth: AngularFireAuth) {
  }


  login(email: string, password: string): Observable<any> {
    return fromPromise(this.firebaseAuth.auth.signInWithEmailAndPassword(email, password));
    // this.firebaseAuth
    //   .auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((value) => {
    //     console.log('Nice, it worked!');
    //
    //   })
    //   .catch(err => {
    //     console.log('Something went wrong:', err.message);
    //   });

  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  isLoggedIn(): Observable<boolean> {
    return this.firebaseAuth.authState.pipe(map(data => {
      if (data) {
        return true;
      } else {
        return false;
      }
    }));
  }

}

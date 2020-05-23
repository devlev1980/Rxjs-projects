import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  forwardRef,
  OnInit,
  Optional,
  Renderer2,
  SkipSelf,
  ViewChild
} from '@angular/core';
import {AppleIdComponent} from '../apple-id/apple-id.component';
import {ControlContainer, ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {FormService, IUser} from '../services/form.service';
import {FirebaseService} from '../services/firebase.service';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import {map, reduce} from 'rxjs/operators';

@Component({
  selector: 'app-apple-password',
  templateUrl: './apple-password.component.html',
  styleUrls: ['./apple-password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ApplePasswordComponent),
      multi: true
    },
    {provide: ControlContainer, useExisting: FormGroupDirective}
  ]


})
export class ApplePasswordComponent implements OnInit, AfterViewInit {
  showLoader: boolean = false;
  @ViewChild('inputApplePasswordRef') inputApplePasswordRef: ElementRef;
  disabled: boolean;
  passwordControl: FormControl;
  user: firebase.User;
  showIcon: boolean = true;
  showTooltip: boolean = false;

  constructor(private renderer: Renderer2,
              public formGroupDirective: FormGroupDirective,
              private formService: FormService,
              private firebaseService: FirebaseService,
              private firebaseAuth: AngularFireAuth,
              private cdr: ChangeDetectorRef) {


  }

  ngOnInit(): void {
    this.passwordControl = new FormControl();

  }


  updateValue(insideValue: string) {
    this.passwordControl.patchValue(insideValue);
  }


  ngAfterViewInit(): void {
  }

  onSubmitApplePassword() {

    const username = this.formGroupDirective.form.get('username').value;
    const password = this.passwordControl.value;
    // this.showIcon = false;
    // this.showLoader = true;
    this.firebaseService.login(username, password).subscribe(
      success => {
        if (success) {
          this.showLoader = false;
          alert('Good');
        } else {
          this.showTooltip = true;
        }

      },
    );


    // let name, email, photoUrl, uid, emailVerified;
    //
    // if (user != null) {
    //   name = user.displayName;
    //   email = user.email;
    //   photoUrl = user.photoURL;
    //   emailVerified = user.emailVerified;
    //   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    //                    // this value to authenticate with your backend server, if
    //                    // you have one. Use User.getToken() instead.
    //
    //   console.log(name, email, uid);
    // }

  }

  onFocusApplePassword() {
    this.renderer.addClass(this.inputApplePasswordRef.nativeElement, 'isPasswordActive');
  }


}

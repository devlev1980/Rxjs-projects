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
import * as firebase from 'firebase';
import {Observable} from 'rxjs';

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
  value: string = ''; // this is the updated value that the class accesses
  disabled: boolean;
  onChange: (value: any) => {};
  onTouched: () => {};
  passwordControl: FormControl;
  user: IUser;
  showIcon: boolean = true;
  showTooltip: boolean = false;
  authenticated: boolean;
  isLoggedIn$: Observable<boolean>;

  constructor(private renderer: Renderer2,
              public formGroupDirective: FormGroupDirective,
              private formService: FormService,
              private firebaseService: FirebaseService,
              private cdr: ChangeDetectorRef) {
    this.isLoggedIn$ = this.firebaseService.isLoggedIn();

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
    this.showIcon = false;

    this.showLoader = true;
    const username = this.formGroupDirective.form.get('username').value;
    const password = this.passwordControl.value;

    // this.formGroupDirective.form.addControl('password', new FormControl(this.passwordControl.value, Validators.required));
    // this.formService.setPassword(this.formGroupDirective.form.value);
    this.firebaseService.login(username, password);
    this.isLoggedIn$.subscribe(res => {
      if (res) {
        console.log('is logged in');
      } else {
        console.log('is not logged in');
      }
    });
    // if (this.firebaseService.isAuthorized) {
    //   alert('is authorized');
    // }else{
    //   this.showLoader = true;
    //   this.showTooltip = true;
    //   this.cdr.detectChanges();
    // }


    // setTimeout(() => {
    //   this.showLoader = false;
    //   this.showIcon = true;
    //
    // }, 1000);


    // console.log(this.formGroupDirective);


  }

  onFocusApplePassword() {

    this.renderer.addClass(this.inputApplePasswordRef.nativeElement, 'isPasswordActive');
  }


}

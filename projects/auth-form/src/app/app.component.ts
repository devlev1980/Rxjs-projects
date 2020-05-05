import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {IInputElement} from './generic-form/models/input-element';
import {ISelectElement} from './generic-form/models/select-element';
import {FormGroup, Validators} from '@angular/forms';
import {FormService} from './generic-form/services/form.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  loginFormData: Array<IInputElement>;
  loginForm: FormGroup;

  constructor(private formService: FormService) {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.loginFormData = [
      {
        element: 'input',
        label: 'username',
        type: 'text',
        formControlName: 'username',
        validators: [Validators.required],
        placeholder: '',
        errorMessage: 'Username required',
        disabled: false,
        icon: '',
        value: 'Yevgeny'
      },
      {
        element: 'input',
        label: 'Password',
        type: 'password',
        formControlName: 'password',
        validators: [Validators.required, Validators.minLength(6)],
        placeholder: '',
        errorMessage: 'Password required',
        disabled: false,
        icon: '',
        value: ''
      }
    ];
    this.loginForm = this.formService.createFormGroup(this.loginFormData);
  }

}



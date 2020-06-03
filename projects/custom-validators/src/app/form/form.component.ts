import {AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {matchPasswords, passwordValidator, UsernameValidator} from './custom-validators/name-validator';
import {DataService} from '../services/data.service';

@Component({
  selector: 'yl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  form: FormGroup;
  newPassword: string;


  constructor(private fb: FormBuilder, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, UsernameValidator.cannotContainSpace]],
      password: ['', [Validators.required, passwordValidator]],
      confirmPassword: ['', [Validators.required, matchPasswords]]
    });
    this.form.get('password').valueChanges.subscribe(value => this.form.get('confirmPassword').updateValueAndValidity());
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


  onInputPassword(value: any) {
    if (value.length <= 20) {
      this.dataService.sendPassword(value);
    }
  }
}

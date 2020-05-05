import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {IInputElement} from '../models/input-element';
import {ISelectElement} from '../models/select-element';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) {
  }

  createFormGroup(formObject: Array<ISelectElement> | Array<IInputElement>, validator?: ValidatorFn) {
    const form = {};
    formObject.forEach((control: IInputElement | ISelectElement) => {
      if (control.element === 'input') {
        form[control.formControlName] = [{value: control.value ? control.value : '', disabled: control.disabled}, control.validators];
      } else if (control.element === 'select') {
        form[control.formControlName] = ['', control.validators];
      }
    });
    if (validator) {
      return new FormBuilder().group(form, {validators: validator});
    } else {
      return new FormBuilder().group(form);
    }


  }

  confirmPasswordMatch: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? {passwordMatch: true} : null;
  };
}

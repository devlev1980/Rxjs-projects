import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    const regex = RegExp(/[0-9]/);
    if ((control.value as string).indexOf(' ') >= 0 || regex.test(control.value)) {
      return {cannotContainSpace: true};
    }
    return null;
  }
}

export function matchPasswords(control: AbstractControl) {
  if (control && control.value !== null || control.value !== undefined) {
    const confirmPassword = control.value;
    const passwordControl = control.root.get('password'); // get the password control
    if (passwordControl) {
      const password = passwordControl.value;
      if (password !== confirmPassword) {
        return {
          isError: true
        };
      }

    }
  }
  return null;

}

export function passwordValidator(control: AbstractControl) {
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/);
  if (control && control.value !== null || control.value !== undefined) {
    if (!regex.test(control.value)) {
      return {
        isError: true
      };
    }
  }
  return null;
}

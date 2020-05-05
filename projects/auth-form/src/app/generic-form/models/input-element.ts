import {Validators} from '@angular/forms';

export interface IInputElement {
  element: string;
  type: string;
  formControlName: string;
  validators: Array<Validators>;
  errorMessage: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: string;
  value?: string | number;
  matFormFieldCss?: string;
  event?: string;
  cssClass?: string;
  group?: Array<string>;
}

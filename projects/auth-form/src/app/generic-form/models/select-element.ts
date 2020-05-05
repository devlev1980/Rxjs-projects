import {Validators} from '@angular/forms';

export interface ISelectElement {
  element: string;
  type: string;
  formControlName: string;
  validators: Array<Validators>;
  options: Array<string>;
  errorMessage: string;
  value?: string;
  disabled?: boolean;
  matFormFieldCss?: string;
  event?: string;
  label?: string;
  cssClass?: string;
  placeholder?: string;
  hideRequired?: boolean;
  icon?: string;
}

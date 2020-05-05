import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {IInputElement} from '../models/input-element';
import {ISelectElement} from '../models/select-element';
import {ErrorStateMatcher} from '@angular/material/core';

export class GenericErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}


@Component({
  selector: 'yl-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericFormComponent implements OnInit {
  @Input() genericFormGroup: FormGroup ;
  @Input() genericFormConfig: IInputElement | ISelectElement;
  matcher = new GenericErrorStateMatcher();

  constructor() {
  }


  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

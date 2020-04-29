import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[ylColor]'
})
export class BorderDirective implements OnInit {


  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }




}

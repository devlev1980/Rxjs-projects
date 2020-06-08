import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {


  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid red');
  }
}

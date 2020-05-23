import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ylBorder]'
})
export class BorderDirective implements OnInit {


  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid red');
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
  }

}

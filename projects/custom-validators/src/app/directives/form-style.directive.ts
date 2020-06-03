import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ylFormStyle]'
})
export class FormStyleDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid #3f51b5');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '1rem 2rem');
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '10px');

  }
}

import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

import {TinyColor} from '@ctrl/tinycolor';


@Directive({
  selector: '[ylRandomColor]'
})
export class RandomColorDirective implements OnInit {
  bgColors: any[] = [];

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.getColor());
    const randomColors = this.getColor();
    this.bgColors.push(randomColors);
    this.bgColors.forEach(color => {
      this.checkDarkOrLightColor(color);


    });


  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  getColor() {
    return '#' + Math.random().toString(16).substr(-6);
  }

  checkDarkOrLightColor(color) {
    const color1 = new TinyColor(color);

    const brightness = color1.getBrightness();
    if (brightness <= 187) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');

    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#000');
    }
  }


}

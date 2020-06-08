import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-breath',
  templateUrl: './breath.component.html',
  styleUrls: ['./breath.component.scss']
})
export class BreathComponent implements OnInit, AfterViewInit {
  @ViewChild('containerRef') containerRef: ElementRef;
  @ViewChild('text') textRef: ElementRef;
  @ViewChild('pointer') pointerRef: ElementRef;
  totalTime: number;
  breathTime: number;
  holdTime: number;

  constructor(private renderer: Renderer2) {
    this.totalTime = 7500;
    this.breathTime = (this.totalTime / 5) * 2;
    this.holdTime = this.totalTime / 2;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.pointerRef.nativeElement, 'transition', 'all 0.3s ease-in');
    this.renderer.setStyle(this.textRef.nativeElement, 'color', '#255957');
    this.renderer.setStyle(this.textRef.nativeElement, 'transition', 'all 500ms ease-in-out');

    this.breathAnimation(this.textRef.nativeElement, this.containerRef.nativeElement);

  }

  breathAnimation(textRef, containerRef) {
    textRef.textContent = 'Breath in!';
    this.renderer.addClass(containerRef, 'grow');

    setTimeout(() => {
      textRef.textContent = 'Hold';
      this.renderer.setStyle(this.pointerRef.nativeElement, 'background', '#fff');
      this.renderer.setStyle(textRef, 'color', '#fff');
      setTimeout(() => {
        textRef.textContent = 'Breath out';
        this.renderer.removeClass(containerRef, 'grow');
        this.renderer.addClass(containerRef, 'shrink');
        this.renderer.setStyle(this.pointerRef.nativeElement, 'background', '#FEDC97');
        this.renderer.setStyle(textRef, 'color', '#FEDC97');
      }, this.holdTime / 2);
    }, this.breathTime);

    setInterval(() => {
      this.renderer.setStyle(this.pointerRef.nativeElement, 'background', '#255957');
      this.renderer.setStyle(textRef, 'color', '#255957');
      this.ngAfterViewInit();
    }, this.totalTime);

  }

  loadMore(textRef, containerRef) {


  }


}

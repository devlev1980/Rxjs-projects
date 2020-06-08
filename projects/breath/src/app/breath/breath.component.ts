import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-breath',
  templateUrl: './breath.component.html',
  styleUrls: ['./breath.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.renderer.setStyle(this.pointerRef.nativeElement, 'transition', '200ms all ease-in-out');
    this.breathAnimation(this.textRef.nativeElement, this.containerRef.nativeElement);
    this.initApp();


  }

  initApp() {
    setInterval(() => {
      this.breathAnimation(this.textRef.nativeElement, this.containerRef.nativeElement);
    }, this.totalTime);
  }

  breathAnimation(textRef, containerRef) {
    this.renderer.addClass(containerRef, 'grow');
    this.renderer.removeClass(containerRef, 'shrink');
    this.renderer.setStyle(this.pointerRef.nativeElement, 'background', '#255957');
    this.renderer.setStyle(textRef, 'color', '#255957');
    textRef.textContent = 'Breath in!';

    setTimeout(() => {
      textRef.innerHTML = 'Hold';
      this.renderer.setStyle(this.pointerRef.nativeElement, 'background', '#fff');
      this.renderer.setStyle(textRef, 'color', '#fff');
      this.onHold(textRef, containerRef);
    }, this.breathTime);


  }

  onHold(textRef, containerRef) {
    setTimeout(() => {
      textRef.innerHTML = 'Breath out';
      this.renderer.addClass(containerRef, 'shrink');
      this.renderer.removeClass(containerRef, 'grow');
      this.renderer.setStyle(this.pointerRef.nativeElement, 'background', '#FEDC97');
      this.renderer.setStyle(textRef, 'color', '#FEDC97');
      this.renderer.setStyle(this.pointerRef.nativeElement, 'transition', '200ms all ease-in-out');
    }, this.holdTime / 2);
  }


}

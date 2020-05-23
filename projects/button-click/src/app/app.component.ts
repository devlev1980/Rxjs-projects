import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'button-click';

  click$: Observable<Event>;
  @ViewChild('button') button: ElementRef;
  count = 0;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.click$ = fromEvent(this.button.nativeElement, 'click');

    this.click$.subscribe(click => {
      this.count++;
      console.log(this.count);
      if (this.count % 2 === 0) {
        this.renderer.addClass(this.button.nativeElement, 'btn-primary');
        this.renderer.removeClass(this.button.nativeElement, 'btn-info');
      } else {
        this.renderer.addClass(this.button.nativeElement, 'btn-info');
      }

    });
  }

  ngOnInit(): void {

  }

}

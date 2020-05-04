import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {IResult, PaperService} from '../services/paper.service';
import {fromEvent, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'yl-toilet-paper',
  templateUrl: './toilet-paper.component.html',
  styleUrls: ['./toilet-paper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToiletPaperComponent implements OnInit, AfterViewInit {
  @ViewChild('paperRoll') paperRoll: ElementRef;
  @ViewChild('buttonRollDown') buttonRollDown: ElementRef;
  @ViewChild('buttonRollUp') buttonRollUp: ElementRef;
  paperRollHeight: number;
  clicksRollDown$: Observable<Event>;
  clicksRollUp$: Observable<Event>;
  data$: Observable<IResult>;
  data: IResult[] = [];

  constructor(private paperService: PaperService,
              private renderer: Renderer2,
              private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {

    this.clicksRollDown$ = fromEvent(this.buttonRollDown.nativeElement, 'click');
    if (this.paperRoll.nativeElement) {
      this.paperRollHeight = this.paperRoll.nativeElement.scrollHeight;

    }

    this.clicksRollDown$.pipe(
      switchMap((data) => {
        this.data$ = this.paperService.createPaperData();
        return this.data$;
      })
    ).subscribe((data) => {
      console.log(data);

      this.data.push(data);
      this.paperRollHeight += 70;
      this.cdr.detectChanges();

    });

    this.clicksRollUp$ = fromEvent(this.buttonRollUp.nativeElement, 'click');
    this.clicksRollUp$.subscribe(data => {
        if (this.paperRollHeight > 100) {
          this.paperRollHeight -= 70;
          this.data.splice(this.data.length - 1, 1);
        } else {
          return;

        }
        this.cdr.detectChanges();
      });


  }

  ngOnInit(): void {
  }



}

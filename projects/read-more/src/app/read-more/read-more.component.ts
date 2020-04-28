import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {combineLatest, forkJoin, from, fromEvent, merge, Observable, of, Subscription} from 'rxjs';
import {
  bufferCount,
  combineAll,
  concatMap,
  filter,
  map,
  mergeAll,
  mergeMap,
  scan,
  shareReplay,
  switchMap,
  take,
  takeUntil,
  tap
} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {fromArray} from 'rxjs/internal/observable/fromArray';

@Component({
  selector: 'yl-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit, AfterViewInit {
  @ViewChild('buttonElement') button: ElementRef;

  clicks$: Observable<IPhoto[]>;


  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click').pipe(
      switchMap((data: IPhoto[]) => this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')),
      shareReplay(1),
      map((el: IPhoto[]) => {
        const newPhotosArr = [];
        for (let i = 0; i < 10; i++) {
          const randomElement = el[Math.floor(Math.random() * el.length)];
          newPhotosArr.push(randomElement);
        }
        return newPhotosArr;
      })
    );


  }

  ngOnInit(): void {
  }



}

interface IPhoto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

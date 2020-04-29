import {Component, OnInit} from '@angular/core';
import {interval, Observable, range, timer} from 'rxjs';
import {map, mergeMap, switchMap, takeWhile, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'yl-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  private http$: Observable<ITodo[]>;
  counter: number = 10;
  data: ITodo[] = [];
  randomBg: string;
  borderCount: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http$ = this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
    interval(1000)
      .pipe(
        map(() => this.counter--),
        map(() => this.borderCount = this.borderCount + 10),
        takeWhile(() => {
          if (this.counter < 0) {
            this.counter = 10;
            this.borderCount = 0;
            this.randomBg = '#' + Math.random().toString(16).substr(-6);

            this.http$.pipe(
              map((el: ITodo[]) => {
                const newPhotosArr = [];
                for (let i = 0; i < 10; i++) {
                  const randomElement = el[Math.floor(Math.random() * el.length)];
                  newPhotosArr.push(randomElement);
                  el[i].background = this.randomBg;
                }
                return newPhotosArr;
              })
            ).subscribe((data: ITodo[]) => this.data = data);
            return true;
          }
          return true;
        }),
      ).subscribe(res => console.log(res));


  }

}

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  background: string;
}

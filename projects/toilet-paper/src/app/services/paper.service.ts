import {Injectable} from '@angular/core';
import {from, Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  private quotes$: Observable<any>;
  private quote: IQuote;
  private content: IResult;


  constructor(private http: HttpClient) {
    this.quotes$ = this.http.get('https://api.quotable.io/quotes');
    this.quotes$.pipe(
      map((data) => data),
    ).subscribe(data => {
      this.quote = data;
      console.log('---', data);
      this.quote.results = this.quote.results.filter((quote) => quote.content.length < 70);
      console.log(this.quote.results);


    });
  }

  createPaperData(): Observable<IResult> {
    this.quote.results.forEach((quote) => {
      this.content = quote;
      this.content = this.quote.results[Math.floor(Math.random() * this.quote.results.length)];

    });

    return of(this.content);
  }
}

interface IQuote {
  count: number;
  lastItemIndex: number;
  results: IResult[];
}

export interface IResult {
  author: string;
  content: string;

}

import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent, Observable, of, throwError} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent implements OnInit, AfterViewInit {
  @ViewChild('passwordMeter') passwordMeter: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  @ViewChild('reasons') reasons: ElementRef;
  password$: Observable<any>;
  password: string = '';
  weaknesses: IWeakness[] = [];
  divMeter: ElementRef;
  private strength: number;
  private message: string;
  hideMeter: boolean;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.weaknesses = [];


  }

  ngAfterViewInit(): void {
    // Adding div to Password Meter element(div)
    this.divMeter = this.renderer.createElement('div');
    this.renderer.addClass(this.divMeter, 'meter');
    this.renderer.appendChild(this.passwordMeter.nativeElement, this.divMeter);
    let span = ElementRef;
    span = this.renderer.createElement('span');
    this.renderer.appendChild(this.reasons.nativeElement, span);
    // -----------------------------------------------------------------------------
    // Create observable from Input Event
    this.password$ = fromEvent(this.passwordInput.nativeElement, 'input');
    this.password$.pipe(
      map((event) => this.passwordMeter = event),
      switchMap((event) => {
        tap((data) => console.log('**', data));
        this.password = event.target.value;
        return this.lengthWeakness(this.password);
      }),
      catchError(err => throwError(err))
    ).subscribe(data => {
      if (data !== null || data) {
        this.weaknesses.push(data);
      }
      this.strength = 100;
      this.weaknesses.forEach((weakness: IWeakness) => {
        this.message = '';
        this.message += weakness.message;
        this.renderer.setProperty(span, 'innerHTML', `${this.message}`);
        this.renderer.addClass(span, 'reasons__text');
        this.renderer.setStyle(this.divMeter, 'width', (this.strength - weakness.deduction) + '%');
        this.renderer.setStyle(this.divMeter, 'background', weakness.background);
        this.renderer.setStyle(this.divMeter, 'transition', '1s');
      });
    });
  }

  lengthWeakness(password: string): Observable<any> {
    const lowerCaseRegex = /[a-z]/g;
    const upperCaseRegex = /[A-Z]/g;
    const numberCaseRegex = /[0-9]/g;
    const specialCharacterCaseRegex = /[^0-9a-zA-z]/g;
    const lowerCaseMatches = password.match(lowerCaseRegex) || [];
    const upperCaseMatches = password.match(upperCaseRegex) || [];
    const numberCaseMatches = password.match(numberCaseRegex) || [];
    const specialCaseMatches = password.match(specialCharacterCaseRegex) || [];
    const length = password.length;

    if (length === 0) {
      // Return observable of object
      return of({
        message: 'Please enter password with min 6 characters',
        deduction: 0,
        background: ''
      });
    }
    if (lowerCaseMatches.length <= 2) {
      return of({
        message: 'Password could user more  lowercase characters ',
        deduction: 95,
        background: 'red'
      });

    }
    if (numberCaseMatches.length <= 2) {
      return of({
        message: 'Password could use more numbers ',
        deduction: 85,
        background: 'red'
      });
    }
    if (upperCaseMatches.length <= 2) {
      return of({
        message: 'Password could use more uppercase characters ',
        deduction: 75,
        background: 'red'
      });
    }
    if (specialCaseMatches.length === 0) {
      return of({
        message: 'Password could use special characters ',
        deduction: 65,
        background: 'orange'
      });
    }
    if (specialCaseMatches.length <= 2) {
      return of({
        message: 'Password could use more special characters ',
        deduction: 55,
        background: 'orange'
      });
    }

    if (length <= 5) {
      return of({
        message: 'Your password is too short',
        deduction: 45,
        background: 'red'
      });
    }
    if (length <= 10 && length > 5) {
      return of({
        message: 'Password must be longer',
        deduction: 35,
        background: 'orange'
      });
    }
    if (length >= 10
      && lowerCaseMatches.length > 2
      && upperCaseMatches.length > 2
      && numberCaseMatches.length > 2
      && specialCaseMatches.length > 2) {
      return of({
        message: 'Good password',
        deduction: 0,
        background: 'green'
      });
    }
  }

}

interface IWeakness {
  message: string;
  deduction: number;
  background: string;
}

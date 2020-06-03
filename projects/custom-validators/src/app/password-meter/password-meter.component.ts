import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../services/data.service';

@Component({
  selector: 'yl-password-meter',
  templateUrl: './password-meter.component.html',
  styleUrls: ['./password-meter.component.scss']
})
export class PasswordMeterComponent implements OnInit {
  passwordMeter: string;
  @Input()password: string;

  constructor(private dataService: DataService) {
  }

  data$: Observable<string>;

  ngOnInit(): void {
    this.data$ = this.dataService.data$;
    this.data$.subscribe(passwordForMeter => {
      this.passwordMeter = passwordForMeter;
    });
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  seconds = 10;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParamMap
    .subscribe(next => {
      this.seconds = isNaN(Number(next.get('duration'))) ? 10 : Number(next.get('duration'));
      this.reset();
      this.start();
    });
  }

  clearTimer(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start(): void {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop(): void {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset(): void {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      if (this.remainingTime <= 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.remainingTime -= 1;
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}

import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  interval$ = interval(1000);

  currentCount: number = 0;

  subscription: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.interval$.subscribe(val => {
      this.currentCount = val;
    });
  }
}

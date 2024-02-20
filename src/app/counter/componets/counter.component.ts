import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class Counter {
  title = 'bases chulas';
  counter = 20;

  increaseBy(value: number) {
    this.counter = this.counter + value;
  }

  reset() {
    this.counter = 20;
  }
}

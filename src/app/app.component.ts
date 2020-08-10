import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'as83';
  odds: number[] = [];
  evens: number[] = [];

  onTick(value: number): void {
    if (value % 2) {
      this.odds.push(value);
    } else {
      this.evens.push(value);
    }
  }
}

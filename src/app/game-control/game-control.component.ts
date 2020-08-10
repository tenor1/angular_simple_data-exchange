import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.less']
})
export class GameControlComponent implements OnInit {
  currentNumber = 0;
  interval: number;
  @Output() tick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.currentNumber += 1;
      this.tick.emit(this.currentNumber);
    }, 1000);
  }

  onStopGame(): void {
    console.log('Game stopped!');
    clearInterval(this.interval);
  }

  incCurrentNumber(): void {
    this.currentNumber = this.currentNumber + 1;
    console.log('new currentNumber=', this.currentNumber);
  }

}

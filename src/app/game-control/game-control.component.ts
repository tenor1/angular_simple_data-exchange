import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.less']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    console.log('Game started!');
  }

  onStopGame(): void {
    console.log('Game stopped!');
  }

}

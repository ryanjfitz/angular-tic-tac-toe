import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  game: Game;

  get squares(): string[] {
    return this.game.squares;
  }

  get status(): string {
    return this.game.status;
  }

  constructor() {
    this.game = new Game();
  }

  markSquare(squareIndex: number) {
    this.game.markSquare(squareIndex);
  }

}

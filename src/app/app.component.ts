import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  game: Game;

  get squares(): (string | null)[] {
    return this.game.squares;
  }

  get status(): string {
    return this.game.status;
  }

  get moves(): number[] {
    return Array.from(Array(this.game.history.length).keys());
  }

  constructor() {
    this.game = new Game();
  }

  markSquare(squareIndex: number) {
    this.game.markSquare(squareIndex);
  }

  goToMove(moveIndex: number) {
    this.game.goToMove(moveIndex);
  }

}

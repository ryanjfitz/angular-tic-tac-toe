import { Component } from '@angular/core';
import { Game } from '../model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  game: Game;

  get squares(): (string | null)[] {
    return this.game.squares;
  }

  get status(): string {
    return this.game.status;
  }

  get moveIndexes(): number[] {
    return [...Array(this.game.history.length).keys()];
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

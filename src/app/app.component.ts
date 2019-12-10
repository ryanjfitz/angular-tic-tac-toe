import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  squares: string[];
  nextPlayer: string;
  winner: string;

  constructor() {
    this.squares = Array(9).fill(null);
    this.nextPlayer = this.getNextPlayer();
    this.winner = null;
  }

  markSquare(squareIndex: number) {
    if (this.squares[squareIndex] != null || this.getWinner() != null)
      return;

    this.squares[squareIndex] = this.nextPlayer;

    this.nextPlayer = this.getNextPlayer();

    this.winner = this.getWinner();
  }

  private getNextPlayer(): string {
    return this.nextPlayer === "X" ? "O" : "X";
  }

  private getWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] != null && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return "Winner: " + this.squares[a];
      }
    }
    return null;
  }

}

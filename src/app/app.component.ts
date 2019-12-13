import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  squares: string[];
  history: History;
  status: string;
  currentPlayer: string;
  currentMoveIndex: number;

  constructor() {
    this.squares = Array(9).fill(null);
    this.history = new History();
    this.history.addSnapshot(this.squares);
    this.status = this.getStatus();
    this.currentPlayer = this.getNextPlayer();
    this.currentMoveIndex = 0;
  }

  markSquare(squareIndex: number) {
    if (this.squares[squareIndex] != null || this.getWinner() != null) {
      return;
    }

    this.history.truncateToSnapshot(this.currentMoveIndex);

    this.currentMoveIndex += 1;

    this.squares[squareIndex] = this.currentPlayer;

    this.history.addSnapshot(this.squares.slice());

    this.status = this.getStatus();

    this.currentPlayer = this.getNextPlayer();
  }

  goToMove(moveIndex: number) {
    this.squares = this.history.getSnapshot(moveIndex);

    this.currentMoveIndex = moveIndex;
  }

  private getStatus(): string {
    const winner: string | null = this.getWinner();

    if (winner != null) {
      return 'Winner: ' + winner;
    } else {
      return 'Next Player: ' + this.getNextPlayer();
    }
  }

  private getNextPlayer(): string {
    return this.currentPlayer === 'X' ? 'O' : 'X';
  }

  private getWinner(): string | null {
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
    for (const line of lines) {
      const [a, b, c] = line;
      if (this.squares[a] != null && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

}

class History {

  snapshots: string[][];

  constructor() {
    this.snapshots = [];
  }

  addSnapshot(snapshot: string[]) {
    this.snapshots.push(snapshot);
  }

  getSnapshot(snapshotIndex: number): string[] {
    return this.snapshots[snapshotIndex];
  }

  truncateToSnapshot(snapshotIndex: number) {
    this.snapshots = this.snapshots.slice(0, snapshotIndex + 1).map(snapshot => snapshot.slice());
  }

}

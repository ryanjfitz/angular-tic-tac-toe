interface Snapshot {
    squares: (string | null)[];
    currentPlayer: string;
}

export class Game {

    currentPlayer: string;
    squares: (string | null)[];
    winner: string | null;
    history: Snapshot[];
    currentMoveIndex: number;

    get status(): string {
        return this.winner !== null ? 'Winner: ' + this.winner : this.currentPlayer + '\'s turn.';
    }

    constructor() {
        this.currentPlayer = 'X';
        this.squares = Array(9).fill(null);
        this.winner = null;
        this.history = [{ squares: this.squares.slice(), currentPlayer: this.currentPlayer }];
        this.currentMoveIndex = 0;
    }

    markSquare(squareIndex: number) {
        if (this.squares[squareIndex] !== null || this.winner !== null) {
            return;
        }

        this.squares[squareIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.winner = this.getWinner();
        this.history = this.history.slice(0, this.currentMoveIndex + 1);
        this.history.push({ squares: this.squares.slice(), currentPlayer: this.currentPlayer });
        this.currentMoveIndex += 1;
    }

    goToMove(moveIndex: number) {
        const snapshot = this.history[moveIndex];

        if (snapshot == null) {
            return;
        }

        this.squares = snapshot.squares.slice();
        this.currentPlayer = snapshot.currentPlayer;
        this.currentMoveIndex = moveIndex;
    }

    private getWinner(): string | null {
        const winnableLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const line of winnableLines) {
            const [a, b, c] = line;

            if (this.squares[a] === null) {
                continue;
            }

            if (this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
                return this.squares[a];
            }
        }

        if (this.squares.every(square => square !== null)) {
            return 'Draw';
        }

        return null;
    }
}

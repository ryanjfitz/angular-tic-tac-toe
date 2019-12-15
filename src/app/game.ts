export class Game {

    currentPlayer: string;
    squares: string[];
    winner: string | null;
    status: string;

    constructor() {
        this.currentPlayer = 'X';
        this.squares = Array(9).fill(null);
        this.winner = null;
        this.status = this.getStatus();
    }

    markSquare(squareIndex: number) {
        if (this.squares[squareIndex] !== null || this.winner !== null) {
            return;
        }

        this.squares[squareIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.winner = this.getWinner();
        this.status = this.getStatus();
    }

    private getStatus(): string {
        return this.winner !== null ? 'Winner: ' + this.winner : this.currentPlayer + '\'s turn.';
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

        return null;
    }
}

import { Game } from './game';

describe('Game', () => {
    it('should initialize state correctly', () => {
        const game = new Game();

        expect(game.currentPlayer).toBe('X');
        expect(game.squares).toEqual([null, null, null, null, null, null, null, null, null]);
        expect(game.winner).toBeNull();
        expect(game.status).toBe('X\'s turn.');
    });

    it('should handle first move', () => {
        const game = new Game();

        game.markSquare(0);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual(['X', null, null, null, null, null, null, null, null]);
        expect(game.winner).toBeNull();
    });

    it('should handle second move', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(1);

        expect(game.currentPlayer).toBe('X');
        expect(game.squares).toEqual(['X', 'O', null, null, null, null, null, null, null]);
        expect(game.winner).toBeNull();
    });

    it('should only let each square be marked once', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(0);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual(['X', null, null, null, null, null, null, null, null]);
        expect(game.winner).toBeNull();
    });

    it('row 1 win', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(6);
        game.markSquare(1);
        game.markSquare(7);
        game.markSquare(2);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual(['X', 'X', 'X', null, null, null, 'O', 'O', null]);
        expect(game.winner).toBe('X');
    });

    it('row 2 win', () => {
        const game = new Game();

        game.markSquare(3);
        game.markSquare(6);
        game.markSquare(4);
        game.markSquare(7);
        game.markSquare(5);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual([null, null, null, 'X', 'X', 'X', 'O', 'O', null]);
        expect(game.winner).toBe('X');
    });

    it('row 3 win', () => {
        const game = new Game();

        game.markSquare(6);
        game.markSquare(0);
        game.markSquare(7);
        game.markSquare(1);
        game.markSquare(8);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual(['O', 'O', null, null, null, null, 'X', 'X', 'X']);
        expect(game.winner).toBe('X');
    });

    it('column 1 win', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(1);
        game.markSquare(3);
        game.markSquare(2);
        game.markSquare(6);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual(['X', 'O', 'O', 'X', null, null, 'X', null, null]);
        expect(game.winner).toBe('X');
    });

    it('column 2 win', () => {
        const game = new Game();

        game.markSquare(1);
        game.markSquare(2);
        game.markSquare(4);
        game.markSquare(3);
        game.markSquare(7);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual([null, 'X', 'O', 'O', 'X', null, null, 'X', null]);
        expect(game.winner).toBe('X');
    });

    it('column 3 win', () => {
        const game = new Game();

        game.markSquare(2);
        game.markSquare(1);
        game.markSquare(5);
        game.markSquare(3);
        game.markSquare(8);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual([null, 'O', 'X', 'O', null, 'X', null, null, 'X']);
        expect(game.winner).toBe('X');
    });

    it('diagonal 1 win', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(1);
        game.markSquare(4);
        game.markSquare(2);
        game.markSquare(8);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual(['X', 'O', 'O', null, 'X', null, null, null, 'X']);
        expect(game.winner).toBe('X');
    });

    it('diagonal 2 win', () => {
        const game = new Game();

        game.markSquare(2);
        game.markSquare(0);
        game.markSquare(4);
        game.markSquare(1);
        game.markSquare(6);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares).toEqual(['O', 'O', 'X', null, 'X', null, 'X', null, null]);
        expect(game.winner).toBe('X');
    });

    it('should update status', () => {
        const game = new Game();

        expect(game.status).toBe('X\'s turn.');
        game.markSquare(0);
        expect(game.status).toBe('O\'s turn.');
        game.markSquare(3);
        expect(game.status).toBe('X\'s turn.');
        game.markSquare(1);
        expect(game.status).toBe('O\'s turn.');
        game.markSquare(4);
        expect(game.status).toBe('X\'s turn.');
        game.markSquare(2);
        expect(game.status).toBe('Winner: X');
    });

    it('should not allow more moves after a win', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(3);
        game.markSquare(1);
        game.markSquare(4);
        game.markSquare(2);

        expect(game.winner).toBe('X');

        game.markSquare(5);

        expect(game.squares).toEqual(['X', 'X', 'X', 'O', 'O', null, null, null, null]);
        expect(game.winner).toBe('X');
    });

    it('should handle draw', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(3);
        game.markSquare(6);
        game.markSquare(2);
        game.markSquare(5);
        game.markSquare(8);
        game.markSquare(1);
        game.markSquare(4);
        game.markSquare(7);

        expect(game.winner).toBe('Draw');
        expect(game.status).toBe('Winner: Draw');
    });

    it('should handle history', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(1);
        game.markSquare(2);
        expect(game.squares).toEqual(['X', 'O', 'X', null, null, null, null, null, null]);

        game.goToMove(0);
        expect(game.squares).toEqual([null, null, null, null, null, null, null, null, null]);
        expect(game.currentPlayer).toBe('X');
        expect(game.status).toBe('X\'s turn.');
        game.goToMove(1);
        expect(game.squares).toEqual(['X', null, null, null, null, null, null, null, null]);
        expect(game.currentPlayer).toBe('O');
        expect(game.status).toBe('O\'s turn.');
        game.goToMove(2);
        expect(game.squares).toEqual(['X', 'O', null, null, null, null, null, null, null]);
        expect(game.currentPlayer).toBe('X');
        expect(game.status).toBe('X\'s turn.');
        game.goToMove(3);
        expect(game.squares).toEqual(['X', 'O', 'X', null, null, null, null, null, null]);
        expect(game.currentPlayer).toBe('O');
        expect(game.status).toBe('O\'s turn.');
    });
});

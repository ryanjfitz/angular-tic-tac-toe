import { Game } from './game';

describe('Game', () => {
    it('should initialize state correctly', () => {
        const game = new Game();

        expect(game.currentPlayer).toBe('X');
        expect(game.squares[0]).toBeNull();
        expect(game.squares[1]).toBeNull();
        expect(game.squares[2]).toBeNull();
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBeNull();
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBeNull();
        expect(game.winner).toBeNull();
    });

    it('should handle first move', () => {
        const game = new Game();

        game.markSquare(0);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares[0]).toBe('X');
        expect(game.squares[1]).toBeNull();
        expect(game.squares[2]).toBeNull();
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBeNull();
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBeNull();
        expect(game.winner).toBeNull();
    });

    it('should handle second move', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(1);

        expect(game.currentPlayer).toBe('X');
        expect(game.squares[0]).toBe('X');
        expect(game.squares[1]).toBe('O');
        expect(game.squares[2]).toBeNull();
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBeNull();
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBeNull();
        expect(game.winner).toBeNull();
    });

    it('should only let each square be marked once', () => {
        const game = new Game();

        game.markSquare(0);
        game.markSquare(0);

        expect(game.currentPlayer).toBe('O');
        expect(game.squares[0]).toBe('X');
        expect(game.squares[1]).toBeNull();
        expect(game.squares[2]).toBeNull();
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBeNull();
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBeNull();
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
        expect(game.squares[0]).toBe('X');
        expect(game.squares[1]).toBe('X');
        expect(game.squares[2]).toBe('X');
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBe('O');
        expect(game.squares[7]).toBe('O');
        expect(game.squares[8]).toBeNull();
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
        expect(game.squares[0]).toBeNull();
        expect(game.squares[1]).toBeNull();
        expect(game.squares[2]).toBeNull();
        expect(game.squares[3]).toBe('X');
        expect(game.squares[4]).toBe('X');
        expect(game.squares[5]).toBe('X');
        expect(game.squares[6]).toBe('O');
        expect(game.squares[7]).toBe('O');
        expect(game.squares[8]).toBeNull();
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
        expect(game.squares[0]).toBe('O');
        expect(game.squares[1]).toBe('O');
        expect(game.squares[2]).toBeNull();
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBe('X');
        expect(game.squares[7]).toBe('X');
        expect(game.squares[8]).toBe('X');
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
        expect(game.squares[0]).toBe('X');
        expect(game.squares[1]).toBe('O');
        expect(game.squares[2]).toBe('O');
        expect(game.squares[3]).toBe('X');
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBe('X');
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBeNull();
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
        expect(game.squares[0]).toBeNull();
        expect(game.squares[1]).toBe('X');
        expect(game.squares[2]).toBe('O');
        expect(game.squares[3]).toBe('O');
        expect(game.squares[4]).toBe('X');
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBeNull();
        expect(game.squares[7]).toBe('X');
        expect(game.squares[8]).toBeNull();
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
        expect(game.squares[0]).toBeNull();
        expect(game.squares[1]).toBe('O');
        expect(game.squares[2]).toBe('X');
        expect(game.squares[3]).toBe('O');
        expect(game.squares[4]).toBeNull();
        expect(game.squares[5]).toBe('X');
        expect(game.squares[6]).toBeNull();
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBe('X');
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
        expect(game.squares[0]).toBe('X');
        expect(game.squares[1]).toBe('O');
        expect(game.squares[2]).toBe('O');
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBe('X');
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBeNull();
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBe('X');
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
        expect(game.squares[0]).toBe('O');
        expect(game.squares[1]).toBe('O');
        expect(game.squares[2]).toBe('X');
        expect(game.squares[3]).toBeNull();
        expect(game.squares[4]).toBe('X');
        expect(game.squares[5]).toBeNull();
        expect(game.squares[6]).toBe('X');
        expect(game.squares[7]).toBeNull();
        expect(game.squares[8]).toBeNull();
        expect(game.winner).toBe('X');
    });
});

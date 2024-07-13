const { checkWinner } = require('./script');

test('Player X wins with top row', () => {
    const board = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(checkWinner(board)).toBe(true);
});

test('Player O wins with diagonal', () => {
    const board = ['O', '', '', '', 'O', '', '', '', 'O'];
    expect(checkWinner(board)).toBe(true);
});

test('No winner', () => {
    const board = ['X', 'O', 'X', 'X', 'O', '', '', 'X', 'O'];
    expect(checkWinner(board)).toBe(false);
});

test('Game is a draw', () => {
    const board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(checkWinner(board)).toBe(false);
});

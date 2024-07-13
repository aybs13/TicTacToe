const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = (board) => {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
};

// Hanya ekspor fungsi checkWinner untuk pengujian
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkWinner };
} else {
    // Code ini hanya akan dijalankan dalam lingkungan browser
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const handleCellClick = (e) => {
        const cell = e.target;
        const cellIndex = parseInt(cell.getAttribute('data-index'));

        if (board[cellIndex] !== '' || !gameActive) {
            return;
        }

        board[cellIndex] = currentPlayer;
        cell.innerHTML = currentPlayer;
        cell.classList.add('occupied', currentPlayer);

        if (checkWinner(board)) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (!board.includes('')) {
            alert('Game is a draw!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    };

    const resetGame = () => {
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.classList.remove('occupied', 'X', 'O');
        });
    };

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
}

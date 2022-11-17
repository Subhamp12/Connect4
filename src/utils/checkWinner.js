export const checkWinner = (board) => {
  // Check Horizontal
  for (const row of board) {
    for (let i = 0; i < row.length - 3; i++) {
      // if (row[i] !== null && row[i] === row[i+1] && row[i] === row[i+2] && row[i] === row[i+3]) {
      if (checkLine(row[i], row[i + 1], row[i + 2], row[i + 3])) {
        return true
      }
    }
  }

  // Check Vertical
  for (let i = 0; i < board.length - 3; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (checkLine(board[i][j], board[i + 1][j], board[i + 2][j], board[i + 3][j])) {
        return true
      }
    }
  }

  // Check Diagonal down-right
  for (let i = 0; i < board.length - 3; i++) {
    for (let j = 0; j < board[i].length - 3; j++) {
      if (checkLine(board[i][j], board[i + 1][j + 1], board[i + 2][j + 2], board[i + 3][j + 3])) {
        return true
      }
    }
  }

  // Check Diagonal down-left
  for (let i = board.length - 3; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 3; j++) {
      if (checkLine(board[i][j], board[i - 1][j + 1], board[i - 2][j + 2], board[i - 3][j + 3])) {
        return true
      }
    }
  }

  return false;
}

const checkLine = (a, b, c, d) => {
  return a !== null && a === b && a === c && a === d;
}
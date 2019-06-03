export const BOARD_SQUARE = {
  X: "X",
  O: "O",
  EMPTY: ""
};

export const GAME_STATUS = {
  IN_PROGRESS: "Game is still in progress",
  WINNER_X: "X Wins",
  WINNER_O: "O Wins",
  TIE: "It's a tie"
};

export const BOARD_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

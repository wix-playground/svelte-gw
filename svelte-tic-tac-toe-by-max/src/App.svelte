<script>
  import { BOARD_SQUARE, GAME_STATUS, BOARD_LINES } from "./consts.js";
  import Board from "./Board.svelte";

  let board = new Array(9).fill(BOARD_SQUARE.EMPTY);
  let history = [];
  let turn = 0;

  $: gameStatus = calculateWinner(board);

  function calculateWinner(board) {
    for (let i = 0; i < BOARD_LINES.length; i++) {
      const [a, b, c] = BOARD_LINES[i];
      if (
        board[a] !== BOARD_SQUARE.EMPTY &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a] === BOARD_SQUARE.X
          ? GAME_STATUS.WINNER_X
          : GAME_STATUS.WINNER_O;
      }
    }
    if (turn === 9) {
      return GAME_STATUS.TIE;
    }
    return GAME_STATUS.IN_PROGRESS;
  }

  function handleClick(i) {
    if (
      gameStatus !== GAME_STATUS.IN_PROGRESS ||
      board[i] !== BOARD_SQUARE.EMPTY
    ) {
      return;
    }
    history = history.slice(0, turn);
    history.push(board);
    board = board.slice();
    board[i] = turn % 2 ? BOARD_SQUARE.O : BOARD_SQUARE.X;
    turn += 1;
  }

  function goToMove(n) {
    board = history[n];
    turn = n;
  }
</script>

<style>
  .game {
    display: flex;
    flex-direction: row;
  }

  .game-info {
    margin-left: 20px;
  }

  ol {
    padding-left: 30px;
  }
</style>

<div>
  <div class="game">
    <Board {board} onclick={handleClick} />

    <div class="game-info">
      <div>Next player: {turn % 2 ? 'O' : 'X'}</div>

      {#if gameStatus !== GAME_STATUS.IN_PROGRESS}
        <div>{gameStatus}</div>
      {/if}

      <ol>
        {#each history as move, i}
          <li>
            <button on:click={() => goToMove(i)}>
               {i === 0 ? `Go to start` : `Go to move #${i}`}
            </button>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</div>

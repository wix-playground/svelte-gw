<script>
  import Board from './Board.svelte';
  import PastMoves from './PastMoves.svelte';
  import { calculateWinner } from './utils.js';

  let history = [{
    squares: Array(9).fill(null)
  }];
  let xIsNext = true;

  let status, winner, current;
  let currentIndex = history.length - 1;
  $: current = history[currentIndex];
  $: winner = calculateWinner(current.squares);
  $: if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function handleSquareClick(i) {
    if (current[i] || winner) {
      return;
    }
    let squares = current.squares.slice();
    squares[i] = xIsNext ? 'X' : 'O';
    // history.push doesn't yet work ;(
    history = [
      ...history.slice(0, currentIndex + 1),
      { squares }
    ];
    xIsNext = !xIsNext;
    currentIndex = history.length - 1;
  }

  function handleMoveClick(moveNumber) {
    currentIndex = moveNumber;
    xIsNext = (moveNumber % 2) === 0;
  }

</script>
<style>
  .game-logo {
    display: flex;
    margin: 0 auto 20px;
    width: 350px;
    font-size: 30px;
    line-height: 50px;
  }
  .game-logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
	.game {
	  margin: auto;
	  width: 350px;
    display: flex;
    flex-direction: row;
  }
  .game-info {
    margin-left: 20px;
  }
</style>
<div class="game-logo">
  <img src="https://image.flaticon.com/icons/svg/1527/1527318.svg" alt="Tic Tac Toe"> Tic Tac Toe
</div>
<div class="game">
  <Board squares={current.squares} handleClick={handleSquareClick} />
  <div class="game-info">
    <div>{status}</div>
    <PastMoves history={history} handleClick={handleMoveClick} />
  </div>
</div>

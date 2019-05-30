<script>
  import Board from './Board.svelte';

  let squares = Array(9).fill(null);
  let xIsNext = true;

  $: status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
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
  <Board squares={squares} handleClick={handleClick} />
  <div class="game-info">
    <div>{status}</div>
    <ol><!-- TODO --></ol>
  </div>
</div>

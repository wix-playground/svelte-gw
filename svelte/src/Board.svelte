<script>
  import Square from './Square.svelte';
  export let squares;
  export let handleClick;
</script>
<style>
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }
</style>
<div class="game-board">
  <div class="board-row">
    {#each [0, 1, 2] as i}
      <Square value={squares[i]} handleClick={() => handleClick(i)} />
    {/each}
  </div>
  <div class="board-row">
    {#each [3, 4, 5] as i}
      <Square value={squares[i]} handleClick={() => handleClick(i)} />
    {/each}
  </div>
  <div class="board-row">
    {#each [6, 7, 8] as i}
      <Square value={squares[i]} handleClick={() => handleClick(i)} />
    {/each}
  </div>
</div>
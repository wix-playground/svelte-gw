<script>
  import Square from "./Square.svelte";

  export let board;
  export let isInProgress;
  export let onclick;
</script>

<style>
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }
</style>

<div class="game-board">
  {#each [0, 3, 6] as i}
    <div class="board-row">
      {#each [0, 1, 2] as j}
        <Square value={board[i + j]} onclick={() => onclick(i + j)} />
      {/each}
    </div>
  {/each}
</div>

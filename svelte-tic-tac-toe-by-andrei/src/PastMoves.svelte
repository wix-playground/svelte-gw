<script>
  export let history;
  export let handleClick;
</script>
<ol>
  {#each history as moves, i}
    <li>
      <button on:click={() => handleClick(i)}>
        {#if i === 0}
          Go to game start
        {:else}
          Go to move #{i+1}
        {/if}
      </button>
    </li>
  {/each}
</ol>
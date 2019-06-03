<script>
  import { BOARD_SQUARE } from "./consts.js";
  export let value;
  export let onclick;
</script>

<style>
  button {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    margin-bottom: 0px;
    padding: 0;
    text-align: center;
    width: 34px;
  }

  button:focus {
    outline: none;
  }
</style>

<button class="square" on:click={onclick}> {value} </button>

<script>
  export let hidden         = false;
  export let lightmode      = false;
  export let header         = "";
  export let bordered       = false;
</script>


<div class="gcard" class:lightmode class:hide={hidden === true} class:bordered={bordered}>
  {#if header != "" }
    <div class="card-header">{header}</div>
    <div class="ui divider" />
  {/if}
  <slot />
</div>

<style>
  @keyframes slideIn {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .gcard {
    display: flex;
    width: var(--card-width,100%);
    padding: var(--card-padding,1em);
    height: 100%;
    animation: 0.3s ease-in 0s 1 slideIn;
    transition: all 0.5s ease-in-out;
    margin: 0em;
    margin-left: var(--card-margin-left, 0em);
    font-size: large;
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  @supports (backdrop-filter: none) {
    .gcard {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }
  .gcard::-webkit-scrollbar {
    display: none;
  }
  .hide {
    display: none;
    width: 0;
  }
  .lightmode {
    color: black;
    background-color: rgb(220, 220, 220);
  }
  @supports (backdrop-filter: none) {
    .lightmode {
      background-color: rgba(250, 250, 250, 0.8);
      backdrop-filter: blur(10px) brightness(100%);
    }
  }
  .divider {
    width: 100%;
    margin-top: 0;
  }
  .card-header {
    margin: 1em;
    margin-top: 0px;
    text-align: center;
    width: 100%;
    font-size: 1em;
    font-weight: 600;
  }
  .bordered {
    border-style: solid;
    border-color: var(--theme-color, rgb(125, 14, 158))
  }

</style>

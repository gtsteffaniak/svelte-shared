<script>
  export let hidden = false;
  export let lightmode = false;
</script>

<wrapper class:hide={hidden === true}>
  <div class="card" class:lightmode>
    <slot />
  </div>
</wrapper>

<style>
  @keyframes slideIn {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }
  wrapper {
    display: flex;
    height: 100%;
    width: fit-content;
    animation: 0.3s ease-in 0s 1 slideIn;
    transition: all 0.5s ease-in-out;
    margin-right: 0.5em;
  }
  .card {
    font-size: large;
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    overflow: hidden;
    border-radius: 15px;
    color: white;
    width: 15em;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  @supports (backdrop-filter: none) {
    .card {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }
  .card::-webkit-scrollbar {
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
</style>

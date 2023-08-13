<script setup>
import Home from './components/Home.vue'

</script>

<template>
  <div class='app'>
    <Home />
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */

.app {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: url(@/assets/background.cur), default;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  //box-sizing: inherit;
  box-sizing: border-box;
  font-size: 62.5%;
  /* // 1rem = 10px    100% = 16px */
}
</style>

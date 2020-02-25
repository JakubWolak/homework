<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>

export default {
};
</script>

<style lang="scss">
body {
  margin: 0;
  min-width: 20vh;
}
#app {
  font-family: 'Mukta';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

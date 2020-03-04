<template>
  <div id="app">
    <timer></timer>
  </div>
</template>

<script>
import Timer from "@/views/Timer";

export default {
  components: { Timer }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Mukta";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

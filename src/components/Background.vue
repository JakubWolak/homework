<template>
  <div class="wrapper">
    <div class="image" />
  </div>
</template>

<script>
export default {
  name: 'Background',
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: fixed;
  z-index: -5;
  top: 0;
  left: 0;
}
.image {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/background.jpg');
  background-position: 15% 70%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div class="image" />
</template>

<script>
export default {
  name: 'Background',
};
</script>

<style lang="scss" scoped>
.image {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 0%;
}
</style>

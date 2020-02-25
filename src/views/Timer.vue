<template>
  <div class="innerWrapper">
    <Background />
  </div>
</template>

<script>
import Background from "@/components/Background.vue";

export default {
  name: "Timer",
  components: {
    Background
  }
};
</script>

<style lang="scss" scoped>
.innerWrapper {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 5;
}
</style>

<template>
  <div class="wrapper">
    <TimerWrapper />
    <Background />
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import TimerWrapper from "@/components/TimerWrapper.vue";

export default {
  name: "Timer",
  components: {
    Background,
    TimerWrapper
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  position: relative;
  width: 100%;
  justify-content: center;
}
</style>

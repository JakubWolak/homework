<template>
  <div class="home">
    <Background />
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src

import Background from "@/components/Background.vue";
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Background,
    Welcome
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
}
</style>

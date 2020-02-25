<template>
  <div class="home">
    <Background />
    <Welcome />
  </div>
</template>

<script>
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

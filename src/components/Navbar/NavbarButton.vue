<template>
  <button @click="handleClick()">
    <span v-if="open">🞬</span>
    <span v-else>☰</span>
  </button>
</template>

<script>
export default {
  name: "NavbarButton",
  data: () => {
    return {
      open: true
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
      this.$emit("buttonClicked", this.open);
    }
  }
};
</script>

<style lang="scss" scoped>
$backgroundColor: magenta;

button {
  display: none;
  grid-column: 3;
}

@media only screen and (max-width: 678px) {
  button {
    align-self: flex-end;
    display: block;
    padding: 1.25vh;
    font-size: 18px;
    border: none;
    background-color: darken($backgroundColor, 9%);
    outline: none;
    cursor: pointer;
  }
}
</style>

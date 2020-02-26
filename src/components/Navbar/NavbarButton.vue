<template>
  <button @click="handleClick()">
    <span v-if="closed">☰</span>
    <span v-else>🞬</span>
  </button>
</template>

<script>
export default {
  name: "NavbarButton",
  data: () => {
    return {
      closed: true
    };
  },
  methods: {
    handleClick() {
      this.closed = !this.closed;
      this.$emit("buttonClicked", !this.closed);
    }
  }
};
</script>

<style lang="scss" scoped>
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
    background-color: darken($navbarColor, 9%);
    outline: none;
    cursor: pointer;
  }
}
</style>

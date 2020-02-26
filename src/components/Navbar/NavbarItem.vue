<template>
  <li>
    <a v-bind:href="item.href">{{ item.text }}</a>
  </li>
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["item"]
};
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
  margin: 0 0.6vw;
  font-size: 18px;
}

a:hover {
  background-color: lighten($navbarColor, 25%);
}

a {
  text-decoration: none;
  color: black;
  padding: calc(3px + 0.68vw);
}

@media only screen and (max-width: 678px) {
  li {
    margin: 3.75px 0 0 0;
  }

  a {
    display: block;
  }
}
</style>

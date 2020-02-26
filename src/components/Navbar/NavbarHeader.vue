<template>
  <li>
    <a v-bind:href="href">{{ title }}</a>
  </li>
</template>

<script>
export default {
  name: "NavbarHeader",
  props: ["title", "href"]
};
</script>

<style lang="scss" scoped>
$backgroundColor: magenta;

li {
  list-style-type: none;
  margin: 0 0.6vw;
  font-size: 20px;
  grid-column: 2;
  grid-row: 1;
}

a:hover {
  background-color: lighten($backgroundColor, 25%);
}

a {
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 678px) {
  li {
    margin: none;
    align-self: center;
  }

  a {
    display: block;
  }
}
</style>

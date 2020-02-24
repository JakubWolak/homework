<template>
  <nav>
    <ul>
      <button>🞬</button>
      <li><a class="header" href="#">Maturka</a></li>
      <li><a href="#">Dupa</a></li>
      <li><a href="#">Dupa</a></li>
      <li><a href="#">Dupa</a></li>
      <li><a href="#">Dupa</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
$backgroundColor: magenta;

nav {
  width: 100vw;
  background-color: $backgroundColor;
  margin: 0 0 calc(20px + 1rem);
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  padding: calc(10px + 0.5rem);
}

li {
  list-style-type: none;
  margin: 0 0.6vw;
  font-size: 18px;
}

a {
  text-decoration: none;
  color: black;
  padding: calc(3px + 0.68vw);
}

a:hover {
  background-color: lighten($backgroundColor, 25%);
}

button {
  display: none;
}

@media only screen and (max-width: 678px) {
  ul {
    flex-direction: column;
    padding: 0 10px 0;
  }

  li {
    margin: 3.75px 0 0 0;
  }

  a {
    display: block;
  }

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

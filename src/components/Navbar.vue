<template>
  <nav>
    <ul>
      <button>🞬</button>
      <navbar-header :title="'Maturka'" :href="'#'"></navbar-header>
      <navbar-item
        v-for="item in links"
        :key="item.text"
        :item="item"
      ></navbar-item>
    </ul>
  </nav>
</template>

<script>
import NavbarHeader from "@/components/Navbar/NavbarHeader";
import NavbarItem from "@/components/Navbar/NavbarItem";

export default {
  name: "Navbar",
  components: { NavbarItem, NavbarHeader },
  data: () => {
    return {
      links: [
        {
          text: "Dupa",
          href: "#"
        },
        {
          text: "Dupa2",
          href: "#"
        }
      ]
    };
  }
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

button {
  display: none;
}

@media only screen and (max-width: 678px) {
  ul {
    flex-direction: column;
    padding: 0 10px 0;
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

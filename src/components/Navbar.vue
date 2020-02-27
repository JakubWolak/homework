<template>
  <nav>
    <ul>
      <div class="navbar-header">
        <navbar-button @buttonClicked="drawer = $event"></navbar-button>
        <navbar-header :title="'Maturka'" :href="'/'"></navbar-header>
      </div>
      <div class="drawer" :class="{ mobileHidden: !drawer }">
        <navbar-item v-for="item in links" :key="item.text" :item="item"></navbar-item>
      </div>
    </ul>
  </nav>
</template>

<script>
import NavbarHeader from "@/components/Navbar/NavbarHeader";
import NavbarItem from "@/components/Navbar/NavbarItem";
import NavbarButton from "@/components/Navbar/NavbarButton";

export default {
  name: "Navbar",
  components: { NavbarItem, NavbarHeader, NavbarButton },
  data: () => {
    return {
      drawer: false,
      links: [
        {
          text: "Odliczanie",
          href: "/Timer"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  background-color: $navbarColor;
  margin: 0 0 calc(20px + 1rem);
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  padding: calc(10px + 0.5rem);
}

.drawer {
  display: flex;
}

@media only screen and (max-width: 678px) {
  .navbar-header {
    display: grid;
    grid-template-columns: 25% 50% 25%;
  }

  .drawer {
    flex-direction: column;
    padding: 0 10px 0;
  }

  ul {
    flex-direction: column;
    padding: 5px;
  }

  .mobileHidden {
    display: none;
  }
}
</style>

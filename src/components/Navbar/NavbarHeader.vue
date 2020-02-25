<template>
  <navbar-item :item="{ text: title, href }" class="header"></navbar-item>
</template>

<script>
import NavbarItem from "@/components/Navbar/NavbarItem";
export default {
  name: "NavbarHeader",
  components: { NavbarItem },
  props: ["title", "href"]
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 20px;
}
</style>

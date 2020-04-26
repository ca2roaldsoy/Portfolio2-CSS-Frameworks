<template>
  <div>
    <b-navbar toggleable="md" role="navigation">
      <b-navbar-brand href="/">January Island Escapes</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/">Home</router-link>
          <router-link to="./AboutPage">About</router-link>
          <router-link to="./ContactPage">Contact Us</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {
  BNavbar,
  BNavbarNav,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse
} from "bootstrap-vue";

export default {
  name: "NavbarComponent",
  components: { BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle, BCollapse }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Arkipelago-MxRJ";
  src: url("~@/assets/fonts/Arkipelago-MxRJ.otf");
}

.navbar-brand {
  font-family: "Arkipelago-MxRJ", serif;
  font-size: 32px;
}

ul > a {
  color: black;
  padding-left: 15px;
}

.navbar {
  background-color: #ff9a44;
}
</style>

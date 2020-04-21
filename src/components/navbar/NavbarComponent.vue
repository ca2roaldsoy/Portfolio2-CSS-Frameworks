<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-brand href="/">January Island Escape</b-navbar-brand>

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
  BCollapse,
} from "bootstrap-vue";

export default {
  name: "NavbarComponent",
  components: { BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle, BCollapse },
};
</script>

<style scoped>
ul > a {
  color: white;
  padding-left: 15px;
}
</style>

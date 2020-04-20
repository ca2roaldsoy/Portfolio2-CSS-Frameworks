<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/">January Island Escape</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Contact Us</b-nav-item>
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
<template>
  <div id="app">
    <NavBarComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import NavBarComponent from "./components/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";

export default {
  name: "App",
  components: {
    NavBarComponent,
    FooterComponent,
  },
};
</script>

<style></style>

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
    FooterComponent
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,800"); // Open Sans

h1,
h3,
a,
p {
  font-family: "Open Sans", sans-serif;
}
</style>

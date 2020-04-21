<template>
  <div id="app">
    <NavBarComponent />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "./components/navbar/NavbarComponent";

export default {
  name: "App",
  components: {
    NavBarComponent
  }
};
</script>

<style></style>

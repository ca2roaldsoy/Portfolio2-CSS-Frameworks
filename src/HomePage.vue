<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <CarouselComponent />
    <div class="row">
      <div v-for="num in 4" v-bind:key="num">
        <PackagesComponent v-bind:num="num"></PackagesComponent>
      </div>
    </div>
  </div>
</template>

<script>
import PackagesComponent from "./components/PackagesComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import CarouselComponent from "./components/CarouselComponent.vue";

export default {
  name: "HomePage",
  components: {
    PackagesComponent,
    NavbarComponent,
    CarouselComponent,
  },
};
</script>

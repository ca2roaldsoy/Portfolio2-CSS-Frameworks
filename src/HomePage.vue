<template>
  <div>
    <NavbarComponent />
    <CarouselComponent />
    <main role="main" class="card-group container">
      <h1>Welcome to January Island Escapes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia consequuntur, explicabo officiis sunt. Doloremque quas rem corrupti, odit quasi qui quod nihil fuga. Sint, dolorem magni vero architecto dolore ab!</p>
      <div v-for="num in 4" v-bind:key="num" class="col-sm-6 col-md-4 col-lg-3 package pl-0">
        <PackagesComponent v-bind:num="num" />
      </div>
    </main>
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
    CarouselComponent
  }
};
</script>

<style>
.package,
main {
  margin-top: 20px;
}
</style>
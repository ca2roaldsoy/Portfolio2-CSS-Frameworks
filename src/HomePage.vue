<template>
  <div>
    <CarouselComponent />
    <main role="main" class="card-group container">
      <h1>Welcome to January Island Escapes</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        consequuntur, explicabo officiis sunt. Doloremque quas rem corrupti,
        odit quasi qui quod nihil fuga. Sint, dolorem magni vero architecto
        dolore ab!
      </p>
      <section v-for="num in 4" v-bind:key="num" class="col-sm-6 col-md-4 col-lg-3 package pl-0">
        <PackagesComponent v-bind:num="num" />
      </section>
    </main>
  </div>
</template>

<script>
import PackagesComponent from "./components/home/PackagesComponent.vue";
import CarouselComponent from "./components/home/CarouselComponent.vue";

export default {
  name: "HomePage",
  components: {
    PackagesComponent,
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

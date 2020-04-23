<template>
  <div class="container">
    <h1>Packages</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
      consequuntur, explicabo officiis sunt. Doloremque quas rem corrupti, odit
      quasi qui quod nihil fuga. Sint, dolorem magni vero architecto dolore ab!
    </p>
    <main role="main" class="card-group">
      <section v-for="n in 9" v-bind:key="n" class="col-sm-6 col-md-4 pl-0">
        <AboutPackages v-bind:n="n" />
      </section>
    </main>
  </div>
</template>

<script>
import AboutPackages from "./components/about/AboutPackages";

export default {
  name: "AboutPage",
  components: { AboutPackages }
};
</script>

<style scoped>
h1 {
  margin-top: 20px;
}
</style>

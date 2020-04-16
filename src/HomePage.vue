<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="container-fluid">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide v-for="(img, index) in images" :key="index" :img-src="img.image"></b-carousel-slide>
      </b-carousel>
    </div>
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

export default {
  name: "HomePage",
  components: {
    PackagesComponent,
    NavbarComponent
  },

  data() {
    return {
      slide: 0,
      images: [
        { image: require("./assets/images/banner1.jpg") },
        { image: require("./assets/images/banner2.jpg") },
        { image: require("./assets/images/banner3.jpg") }
      ]
    };
  }
};
</script>

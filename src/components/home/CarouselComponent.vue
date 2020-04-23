<template>
  <div class="container-fluid p-0">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators>
      <b-carousel-slide
        v-for="(img, index) in images"
        :key="index"
        :img-src="img.image"
        :img-alt="img.alt"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";

export default {
  name: "CarouselComponent",
  components: {
    BCarousel,
    BCarouselSlide
  },

  data() {
    return {
      slide: 0,
      images: [
        {
          image: require("../../assets/images/banner2.jpg"),
          alt: "island with boat on sea and palm trees on beach"
        },
        {
          image: require("../../assets/images/banner3.jpg"),
          alt: "island with cabins, and a long wooden bridge"
        },
        {
          image: require("../../assets/images/banner1.jpg"),
          alt: "island with palm trees. Sunbeds and a wagon"
        }
      ]
    };
  }
};
</script>

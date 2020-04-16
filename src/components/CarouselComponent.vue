<template>
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
      <b-carousel-slide
        v-for="(img, i) in banner"
        :key="i"
        :img-src="img.image"
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
    BCarouselSlide,
  },

  data() {
    return {
      slide: 0,
      banner: [
        { image: "../assets/images/banner1.jpg" },
        { image: "../assets/images/banner2.jpg" },
        { image: "../assets/images/banner3.jpg" },
      ],
    };
  },
};
</script>

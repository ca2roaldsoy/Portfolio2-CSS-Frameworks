<template>
  <div>
    <h3 class="card-title">Package {{num}}</h3>
    <p class="card-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      omnis beatae aut, odio maxime sapiente, inventore quae fugit suscipit
      repellendus fuga, iure molestias labore amet! Placeat corporis quidem
      molestias, provident!
    </p>
    <b-button role="button">Find out more</b-button>
  </div>
</template>

<script>
export default {
  name: "PackagesComponent",
  props: ["num"]
};
</script>

<style lang="scss" scoped>
.package {
  margin-top: 20px;
}

.btn {
  background-color: #ff9a44;
  color: black;
}
</style>

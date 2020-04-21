<template>
  <div class="card">
    <h3 class="card-title">Package {{ n }}</h3>
    <p class="card-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur omnis
      beatae aut, odio maxime sapiente, inventore quae fugit suscipit
      repellendus fuga, iure molestias labore amet! Placeat corporis quidem
      molestias, provident!
    </p>
    <b-button variant="warning">Find out more</b-button>
  </div>
</template>

<script>
export default {
  name: "AboutPackages",
  props: ["n"],
};
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 20px 20px 0px;
  padding: 10px;
  border: 1px solid #ffb01d;

  &:hover {
    background-color: #f7dfb5;
    cursor: pointer;
  }
}
</style>

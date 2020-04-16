<template>
  <div class="card">
    <div class="col-sm-6 col-lg-3">
      <h3>Package {{ num }}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        omnis beatae aut, odio maxime sapiente, inventore quae fugit suscipit
        repellendus fuga, iure molestias labore amet! Placeat corporis quidem
        molestias, provident!
      </p>
      <button class="btn btn-warning">Find out more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackagesComponent",
  props: ["num"],
};
</script>

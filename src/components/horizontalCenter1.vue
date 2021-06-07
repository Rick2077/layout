<template>
  <div>
    <div class="wrap">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center1.vue"
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 200px;
  background-color: aqua;
  text-align: center;
}
.content {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  display: inline-block;
}
</style>
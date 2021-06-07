<template>
<div>
  <div class="w">
    <div class="l">定宽</div>
    <div class="r">自适应</div>
  </div>
</div>
</template>

<script>
export default {
  name: "twoCol3.vue"
}
</script>

<style scoped>
.w {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.l, .r {
  display: table-cell;
  height: 600px;
}
.l {
  width: 400px;
  background-color: aqua;
}
.r {
  background-color: blueviolet;
}
</style>
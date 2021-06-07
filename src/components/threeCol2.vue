<template>
<div>
  <div class="w">
    <div class="l">定宽</div>
    <div class="c">定宽</div>
    <div class="r">自适应</div>
  </div>
</div>
</template>

<script>
export default {
  name: "threeCol2"
}
</script>

<style scoped>
.w {
  display: flex;
  height: 600px;
}
.l {
  width: 400px;
  background-color: aqua;
}
.c {
  width: 400px;
  background-color: blueviolet;
}
.r {
  flex: 1;
  background-color: brown;
}
</style>
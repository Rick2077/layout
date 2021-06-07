<template>
<div>
  <div class="w">
    <div class="l">定宽</div>
    <div class="c">自适应</div>
    <div class="r">定宽</div>
  </div>
</div>
</template>

<script>
export default {
  name: "threeCol6"
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
  flex: 1;
  background-color: blueviolet;
}
.r {
  width: 400px;
  background-color: brown;
}
</style>
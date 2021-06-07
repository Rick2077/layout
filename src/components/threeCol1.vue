<template>
<div>
  <div class="l">定宽</div>
  <div class="c">定宽</div>
  <div class="r">自适应</div>
</div>
</template>

<script>
export default {
  name: "threeCol1"
}
</script>

<style scoped>
.l, .c, .r {
  height: 600px;
}
.l {
  width: 400px;
  background-color: aqua;
  float: left;
}
.c {
  width: 400px;
  background-color: blueviolet;
  float: left;
}
.r {
  background-color: brown;
  overflow: hidden;
}
</style>
<template>
<div>
  <div class="l">定宽</div>
  <div class="r">定宽</div>
  <div class="c">自适应</div>
</div>
</template>

<script>
export default {
  name: "threeCol3"
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
  background-color: blueviolet;
  margin-left: 400px;
  margin-right: 400px;
}
.r {
  width: 400px;
  background-color: brown;
  float: right;
}
</style>
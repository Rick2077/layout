<template>
<div>
  <div class="c">
    <div class="i">自适应</div>
  </div>
  <div class="l">定宽</div>
  <div class="r">定宽</div>
</div>
</template>

<script>
export default {
  name: "threeCol5"
}
</script>

<style scoped>
.l, .c, .r {
  height: 600px;
  float: left;
}
.l {
  width: 400px;
  background-color: aqua;
  /* 为了让l元素从当前行移动到第一行同一位置*/
  margin-left: -100%;
}
.c {
  width: 100%;
  background-color: blue;
}
.i {
  height: 600px;
  background-color: blueviolet;
  margin-left: 400px;
  margin-right: 400px;
}
.r {
  width: 400px;
  background-color: brown;
  /* 为了让r元素移动到第一行*/
  margin-left: -400px;
}
</style>
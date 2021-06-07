<template>
<div>
  <div class="w">
    <div class="col col1"></div>
    <div class="col col2"></div>
    <div class="col col3"></div>
    <div class="col col4"></div>
    <div class="col col5"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "multiCol3"
}
</script>

<style scoped>
.w {
  /* 指定列数 */
  column-count: 5;
  /* 指定列与列之间的间隙，默认1em */
  column-gap: 0;
}
.col {
  height: 300px;
}
.col1 {
  background-color: blue;
}
.col2 {
  background-color: blueviolet;
}
.col3 {
  background-color: aqua;
}
.col4 {
  background-color: beige;
}
.col5 {
  background-color: salmon;
}
</style>
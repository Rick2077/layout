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
  name: "multiCol2"
}
</script>

<style scoped>
.w {
  display: table;
  /* 列宽由表格宽度和列宽度设定 */
  table-layout: fixed;
  width: 100%;
}
.col {
  display: table-cell;
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
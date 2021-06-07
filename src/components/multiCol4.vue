<template>
<div>
  <div class="w">
    <div class="col col1"></div>
    <div class="col col2"></div>
    <div class="col col3"></div>
    <div class="col col4"></div>
    <div class="col col5">1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/></div>
  </div>
</div>
</template>

<script>
export default {
  name: "multiCol4"
}
</script>

<style scoped>
.w {
  display: flex;
}
.col {
  height: 300px;
  flex: 1;
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
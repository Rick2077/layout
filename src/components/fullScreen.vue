<template>
<div>
  <div class="header"></div>
  <div class="w">
    <div class="l"></div>
    <div class="r"></div>
  </div>
  <div class="footer"></div>
</div>
</template>

<script>
export default {
  name: "fullScreen"
}
</script>

<style scoped>
html, body {
  margin: 0;
  overflow: hidden;
}

.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 100px;
  background-color: salmon;
}

.w {
  position: fixed;
  left: 0;
  right: 0;
  top: 100px;
  bottom: 100px;
  overflow: auto;
  background-color: palevioletred;
}

.w .l {
  width: 400px;
  /* height: 100%; */
  position: fixed;
  left: 0;
  top: 100px;
  bottom: 100px;
  background-color: greenyellow;
}

.w .r {
  position: fixed;
  left: 400px;
  right: 0;
  top: 100px;
  bottom: 100px;
  background-color: blueviolet;
}

.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  background-color: goldenrod;
}
</style>
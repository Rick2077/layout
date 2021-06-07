<template>
<div>
  <div class="wrap">
    <div class="content"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "verticalCenter1"
}
</script>

<style scoped>
.wrap {
  position: relative;
  width: 200px;
  height: 600px;
  background-color: aqua;
}
.content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>
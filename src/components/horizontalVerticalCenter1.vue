<template>
  <div>
    <div class="wrap">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "horizontalVerticalCenter1"
}
</script>

<style scoped>
.wrap {
  position: relative;
  width: 1200px;
  height: 800px;
  background-color: aqua;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>
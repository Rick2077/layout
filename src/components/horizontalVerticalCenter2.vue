<template>
  <div>
    <div class="wrap">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "horizontalVerticalCenter2"
}
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 800px;
  background-color: aqua;
}
.content {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>
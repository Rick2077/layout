<template>
  <div>
    <div class="wrap">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "horizontalVerticalCenter3"
}
</script>

<style scoped>
.wrap {
    margin: 0 auto;
    width: 600px;
    height: 600px;
    position: relative;
    background-color: aqua;
}
.content {
    position: absolute;
    margin: auto;
    width: 300px;
    height: 300px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: blueviolet;
}
</style>
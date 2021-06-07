<template>
<div>
  <div class="wrap">
    <div class="content"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "center3"
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 200px;
  background-color: aqua;
}
.content {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  display: table;
  margin: 0 auto;
}
</style>
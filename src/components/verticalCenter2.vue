<template>
<div>
  <div class="wrap">
    <div class="content"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "verticalCenter2"
}
</script>

<style scoped>
.wrap {
  display: table-cell;
  vertical-align: middle;
  width: 200px;
  height: 600px;
  background-color: aqua;
}
.content {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>
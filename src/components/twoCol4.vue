<template>
<div>
  <div class="p">
    <div class="l">定宽</div>
    <div class="r">自适应</div>
  </div>
</div>
</template>

<script>
export default {
  name: "twoCol4.vue"
}
</script>

<style scoped>
.p {
  display: flex;
  height: 600px;
}
.l {
  background-color: aqua;
  width: 400px;
}
.r {
  flex: 1;
  background-color: blueviolet;
}
</style>
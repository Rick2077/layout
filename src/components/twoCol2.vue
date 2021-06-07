<template>
<div>
  <div class="l">定宽</div>
  <div class="r">自适应</div>
</div>
</template>

<script>
export default {
  name: "twoCol2.vue"
}
</script>

<style scoped>
.l, .r {
    height: 600px;
}
.l {
    width: 400px;
    background-color: aqua;
    float: left;
}
.r {
    background-color: blueviolet;
    overflow: hidden;
}
</style>
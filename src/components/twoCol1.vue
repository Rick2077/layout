<template>
<div>
  <div class="l">定宽</div>
  <div class="r">自适应</div>
</div>
</template>

<script>
export default {
  name: "twoCol1.vue"
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
    margin-left: 400px;
}
</style>
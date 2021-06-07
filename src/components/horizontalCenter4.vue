<template>
<div>
  <div class="parent">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</div>
</template>

<script>
export default {
  name: "center4"
}
</script>

<style scoped>
.parent{
  display: flex;
  justify-content: center;
}
.parent > div {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>
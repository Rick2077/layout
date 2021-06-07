<template>
  <div id="app">
    <div class="navBar">
      <router-link to="/">主页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body, html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*.navBar {*/
/*  position: fixed;*/
/*  z-index: 999999;*/
/*  top: 500px;*/
/*}*/

a {
  display: block;
  width: 150px;
  padding: 5px;
  text-decoration: none;
}
</style>

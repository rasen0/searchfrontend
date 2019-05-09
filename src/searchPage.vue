<template>
  <div id="searchPage">
    <img src="./assets/logo.jpg" width="900" height="400">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'searchPage'
}
</script>

<style>
#searchPage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  transform:scale(0.4);
}
</style>

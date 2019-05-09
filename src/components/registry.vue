<template>
    <div id="registry">
        <button @click="searchLink">search link</button>
        <img src="@/assets/logo.jpg"  width="900" height="400">
    <router-view/>
    <form action="提交地址" method="post">
        <label for="username">username:</label>
        <input type="text" id="username" name="username" /><br>
        <label for="password">password:</label>
        <input type="text" id="password" name="password" />
        <input type="submit" value="提交">
   </form>
    </div>
</template>

<script>
export default {
  name: 'registry',
  data () {
  },
  methods: {
    searchLink () {
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
div{
  margin: 0 auto;
}
a {
  color: #42b983;
}
</style>

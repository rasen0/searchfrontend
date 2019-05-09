<template>
  <div class="searchEntry">
    <h1>{{ msg }}</h1>
    <h2>Search Entry</h2>
    <form @submit.prevent="submit" :model="form">
    <input  v-model="form.content" placeholder="输入搜索内容">
    <input type="submit" value="search"/>
    </form>
    <p>{{ form.content }}</p>
   <br>
   <button @click="registryLink">注册</button>
  </div>
</template>

<script>
import axios from 'axios'
import ElementUI from 'element-ui'
axios.defaults.baseURL = 'http://127.0.0.1:5535'
export default {
  el: 'form',
  name: 'searchEntry',
  data () {
    return {
      msg: 'Welcome to Your onesearch',
      form: {
        content: ''
      }
    }
  },
  methods: {
    submit () {
      axios({
        method: 'post',
        url: 'account/v1/search',
        headers: {
          'Content-type': 'multipart/form-data'
        },
        data: this.form
      })
      axios.post('account/v1/search4', this.form).then(function (response) {
        if (response.data.text) {
          ElementUI.Message.error(response.data.text)
          this.form.content = response.data.text
          return response
        } else {
          return response
        }
      }).catch(function (err) {
        if (err === 'Error: Request failed with status code 405') {
          this.deleteCookie('sid', '/')
        }
        ElementUI.Message.error(err)
      })

      // console.log(this.content)
      // this.$http.post('/v1/onesearch', this.content).then((response) => {
      //   console.log('success')
      // }, (response) => {
      //   console.log('fail')
      // })
    },
    registryLink () {
      this.$router.push({
        name: 'registry'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  margin: 0 auto;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

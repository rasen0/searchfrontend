// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import searchPage from './searchPage'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#searchPage',
  router,
  components: { searchPage },
  // template: '<searchPage/>'
  render: h => h(searchPage)
})

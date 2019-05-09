import Vue from 'vue'
import Router from 'vue-router'
import registry from '@/components/registry'
import searchEntry from '@/components/searchEntry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchEntry',
      component: searchEntry
    },
    {
      path: '/registry',
      name: 'registry',
      component: registry
    }
  ]
})

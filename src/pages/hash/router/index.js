import Vue from 'vue'
import Router from 'vue-router'
import Hash from '@/module/hash/hash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hash',
      component: Hash
    }
  ]
})

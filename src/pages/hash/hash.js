/**
 * Created by jinhua on 2018/9/7.
 */
import Vue from 'vue'
import router from './router'
import hash from './hash.vue'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<hash/>',
  components: { hash }
})

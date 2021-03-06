// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index'
import router from './router'
import Resource from 'vue-resource'
import css from './css/index.css'

Vue.config.productionTip = false
Vue.use(Resource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  css,
  template: '<index/>',
  components: { index }
})

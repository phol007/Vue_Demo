import Vue from 'vue'
import Router from 'vue-router'
import Vat7 from '@/components/Vat7'
import Login from '@/components/login'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/vat7',
          component: Vat7
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Words from '@/pages/Words'
import UpdWord from '@/pages/UpdWord'
import UpdatePassword from '@/pages/UpdatePassword'
import AddWord from '@/pages/AddWord'

// import VueResource from 'vue-resource'

Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Words',
      name: 'Words',
      component: Words
    },
    {
      path: '/UpdWord',
      name: 'UpdWord',
      component: UpdWord
    },
    {
      path: '/UpdatePassword',
      name: 'UpdatePassword',
      component: UpdatePassword
    },
    {
      path: '/AddWord',
      name: 'AddWord',
      component: AddWord
    }
  ]
})

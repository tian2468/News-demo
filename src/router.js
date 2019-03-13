import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Home from './views/home.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: 'list',
      name: 'list',
      component: () => import( /* webpackChunkName: "list" */ './views/list.vue')
    }, {
      path: 'user',
      name: 'user',
      component: () => import( /* webpackChunkName: "user" */ './views/user.vue')
    }]
  }, {
    path: '/add',
    name: 'add',
    component: () => import( /* webpackChunkName: "add" */ './views/add.vue')
  }, {
    path: '/info',
    name: 'info',
    component: () => import( /* webpackChunkName: "info" */ './views/info.vue')
  }]
})

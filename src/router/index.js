import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import(/* webpackChunkName: "main" */ '../components/Main')

const AjaxTest = () => import(/* webpackChunkName: "test" */ '../components/AjaxTest')

let routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/test/ajax',
    name: 'AjaxTest',
    component: AjaxTest
  }
]

export default new Router({
  base: '/',
  mode: 'history',
  routes: routes,
  onError (error) {
    if (/Loading chunk \d* failed./i.test(error.message)) {
      console.warn('[vue router on error] chunk failed error')
      window.location.reload()
    }
  }
})
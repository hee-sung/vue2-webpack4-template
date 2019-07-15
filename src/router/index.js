import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import(/* webpackChunkName: "main" */ '../components/Main')

let routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
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
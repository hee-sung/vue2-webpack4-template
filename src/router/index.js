import Vue from 'vue';
import Router from 'vue-router';

import { BrowserUtils } from "../js/utils/BrowserUtils";

import { commonRoutes } from "./common";
import { mobileRoutes } from "./mobile";
import { devRoutes } from "./dev";

Vue.use(Router);

let routes = [];

const subDomain = BrowserUtils.getSubDomain();
if (['m', 'mobile'].indexOf(subDomain) > -1 || BrowserUtils.isMobile()) {
  routes = routes.concat(mobileRoutes);
} else {
  routes = routes.concat(commonRoutes);
}

if (process.env.NODE_ENV === 'development') {
  routes = routes.concat(devRoutes);
}

export default new Router({
  base: '/',
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    // scroll top when route navigation
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};

      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash;

        // specify offset of the element
        if (to.hash === '#anchor2') {
          position.offset = { y: 100 };
        }

        // bypass #1number check
        if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
          return position;
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false;
      }

      return new Promise(resolve => {
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          position.x = 0;
          position.y = 0;
        }

        // wait for the out transition to complete (if necessary)
        this.app.$root.$once('triggerScroll', () => {
          // if the resolved position is falsy or an empty object,
          // will retain current scroll position.
          resolve(position);
        })
      })
    }
  },
  onError (error) {
    if (/Loading chunk \d* failed./i.test(error.message)) {
      console.warn('[vue router on error] chunk failed error')
      window.location.reload();
    }
  }
})
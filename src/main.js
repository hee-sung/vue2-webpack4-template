import Vue from 'vue';
import VueCookie from 'vue-cookie';
import VueLazyload from 'vue-lazyload';
import Croppa from 'vue-croppa';

import App from './App';
import router from './router';
import i18n from './setup/i18n-setup';

import { Logger } from "./js/utils/Logger";

Vue.config.productionTip = false;

Vue.use(VueCookie);
Vue.use(VueLazyload);
Vue.use(Croppa);

Vue.prototype.$Logger = Logger;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  i18n
});
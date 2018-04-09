// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import global from '@/api/config';
import axios from 'axios';

// css
// import '../@/static/css/reset.css';
import '&/css/reset.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = global.BASE_URL;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

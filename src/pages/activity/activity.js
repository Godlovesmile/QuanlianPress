// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import axios from 'axios';

import '&/css/reset.css';

Vue.config.productionTip = false;
// axios.defaults.baseURL = global.BASE_URL;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});

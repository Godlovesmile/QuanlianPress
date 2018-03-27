import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Activity from '@/views/Activity';
import Info from '@/views/Info';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }
  ]
});

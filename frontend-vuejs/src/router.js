import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/lockscreen',
      name: 'lockscreen',
      component: () => import('./views/Lockscreen.vue')
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: () => import('./views/Authentication.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('./views/Tasks.vue')
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('./views/Transactions.vue')
    }
  ]
});

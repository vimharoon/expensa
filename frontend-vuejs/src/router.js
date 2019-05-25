import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
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
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('./views/ForgotPassword.vue')
    },
    {
      path: '/dashboard/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/dashboard/tasks',
      name: 'tasks',
      component: () => import('./views/Tasks.vue')
    },
    {
      path: '/dashboard/transactions',
      name: 'transactions',
      component: () => import('./views/Transactions.vue')
    }
  ]
});

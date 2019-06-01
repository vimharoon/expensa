import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('./views/Tasks.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('./views/Transactions.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/lockscreen',
      name: 'lockscreen',
      components: {
        auth: () => import('./views/Lockscreen.vue')
      }
    },
    {
      path: '/authentication',
      name: 'authentication',
      components: {
        auth: () => import('./views/Authentication.vue')
      }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      components: {
        auth: () => import('./views/ForgotPassword.vue')
      }
    }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next();
      return;
    }
    next('/authentication');
  } else {
    next();
  }
});

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'notify-page',
      component: require('@/components/NotifyPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

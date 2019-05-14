import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2eNVsaaaYwBeFBlMGblbFqc8jZRnbRl8',
  authDomain: 'fir-vue-chat-8092e.firebaseapp.com',
  databaseURL: 'https://fir-vue-chat-8092e.firebaseio.com',
  projectId: 'fir-vue-chat-8092e',
  storageBucket: 'fir-vue-chat-8092e.appspot.com',
  messagingSenderId: '373785443513',
  appId: '1:373785443513:web:e408ebdf5c85325c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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

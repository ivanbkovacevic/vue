import Vue from 'vue'
import App from './App.vue';
import Home from './Home.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import {store} from './store/store';

Vue.use(VueResource);
Vue.use(VueRouter);

const router= new VueRouter({
  routes
})

Vue.component('app-server-status',Home);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

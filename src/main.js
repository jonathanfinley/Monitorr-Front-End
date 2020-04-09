import Vue from 'vue';
import VueMaterial from 'vue-material'
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(VueMaterial)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

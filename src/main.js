import Vue from 'vue';
import { Switch } from 'vant';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Switch);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

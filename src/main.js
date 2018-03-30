import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

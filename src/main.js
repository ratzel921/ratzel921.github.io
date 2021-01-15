import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
Vue.component('ValidationProvider', ValidationProvider);
import { ValidationObserver } from 'vee-validate';
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

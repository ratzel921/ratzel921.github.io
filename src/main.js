import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
Vue.component('ValidationProvider', ValidationProvider);
import { ValidationObserver } from 'vee-validate';
Vue.component('ValidationObserver', ValidationObserver);

import i18n from './i18n'


// FlagIcon
import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

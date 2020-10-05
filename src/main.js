import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import emailjs from 'emailjs-com';
Vue.use(emailjs)

import{ init } from 'emailjs-com';
init("user_VGQM4dJPV57Heymmcui95");

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
 
// Register it globally
// main.js or any entry file.
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

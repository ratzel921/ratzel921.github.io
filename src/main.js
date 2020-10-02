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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

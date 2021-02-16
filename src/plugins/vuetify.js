import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from "vue-i18n";
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import { Ripple } from 'vuetify/lib/directives';


Vue.use(Vuetify);
Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localStorage.getItem('Language') || "de", // set locale
  fallbackLocale: localStorage.getItem('Language') || "de",
  silentTranslationWarn: true,
  silentFallbackWarn: true,
});

Vue.config.disableNoTranslationWarning = true;

Vue.prototype.$locale = {

  // Changes the current i18n language and also safes the change in the localStorage
  change(language) {
    i18n.locale = language;
    localStorage.setItem('Language', language)
  },

  // Checks if the language is set in the localstorage, if yes then return
  // the localStorage, otherwise it returns the i18n.locale variable
  currentLanguage() {
    return localStorage.getItem('Language') !== null
        ? localStorage.getItem('Language') : i18n.locale;
  }
};



export default new Vuetify({
  // theme: {
  //     options: {
  //       customProperties: true,
  //     },
  //   themes: {
  //     light: {
  //       primary: '#ee44aa',
  //       secondary: '#424242',
  //       accent: '#82B1FF',
  //       error: '#FF5252',
  //       info: '#2196F3',
  //       success: '#4CAF50',
  //       warning: '#FFC107'
  //     },
  //   },
  // },
  icons: {
    iconfont: 'fa' || 'mdi' || 'md' || 'fa4' || 'faSvg' || 'fas',
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },

  directives: {
    Ripple
  }
});

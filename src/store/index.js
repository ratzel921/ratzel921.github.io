import Vue from 'vue'
import Vuex from 'vuex'

import language from './modules/language/language';
import style from "@/store/modules/style/style";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    language,
    style,
  }
})

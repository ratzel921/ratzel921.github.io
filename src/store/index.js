import Vue from 'vue'
import Vuex from 'vuex'

import projects from './modules/projects/projects';
import language from './modules/language/language';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    projects,
    language
  }
})

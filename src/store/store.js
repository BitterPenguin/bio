import Vuex from 'vuex'
import Vue from 'vue'
import moduleHeader from './header/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    a: moduleHeader
  }
})

export default store
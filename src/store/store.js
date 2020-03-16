import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cms from './cms/module'

const store = new Vuex.Store({
  modules: {
    cms
  }
})

export default store
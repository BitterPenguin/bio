import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  store,
  created() {
    this.$store.dispatch('init')
  },
  render: h => h(App),
}).$mount('#app')

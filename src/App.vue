<template>
  <div id="app">
    <Header :scrollState='scrollState'/>
    <Content />
  </div>
</template>

<script>

import debounce from 'lodash.debounce'
import Header from './components/Header.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content
  },
  data: function() {
    return {
      scrollState: 'top',
    }
  },
  methods: {
    setScrollState () {
      if (window.pageYOffset === 0) {
        this.scrollState = 'top'
      } else {
        this.scrollState = 'scroll'
      }
    },
    scrollListener () {
      const callback = this.setScrollState()
      debounce(() => {callback}, 300)
    }
  },
  mounted: function(){
    this.$nextTick(function() {
      window.addEventListener('scroll', () => {
        this.scrollListener()
      })
    })
  }
}
</script>

<style lang="scss">
  @import './styles/index';
</style>
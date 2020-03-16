<template>
  <header>
    <nav>
      <ul>
        <li v-for="item in primaryNavigation" :key="item.link_title"><a :href="item.link_url.url">{{item.link_title}}</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'primaryNavigation'
    ])
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style lang="scss" scoped>
</style>
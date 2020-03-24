<template>
  <main id="Main">
    <Hero :hero="getModules.hero[0]"/>

    <section 
      v-for="module in getModules.body"
      :key="module.slice_type"
      :class="sanitizeClass(module.slice_type)">
        <Quote v-if="module.slice_type === 'quote'" :data="module"/>
        <SoundCloud v-if="module.slice_type === 'soundcloud'" :data="module"/>
        <Landscape v-if="module.slice_type === 'landscape_image'" :data="module"/>
        <News v-if="module.slice_type === 'news'" :data="module"/>
    </section>

  </main>
</template>

<script>
import {mapGetters} from 'vuex'
import Hero from '../modules/hero'
import Quote from '../modules/quote'
import SoundCloud from '../modules/soundcloud'
import Landscape from '../modules/landscape'
import News from '../modules/news'

export default {
  name: 'Content',
  components: {
    Hero,
    Quote,
    SoundCloud,
    Landscape,
    News
  },
  computed: {
    ...mapGetters([
      'getModules'
    ])
  },
  methods: {
    sanitizeClass: function(string) {
      return (string.charAt(0).toUpperCase() + string.slice(1)).replace('_', '__')
    }
  }
}
</script>

<style lang="scss" scoped>
  .Hero {
    &__content {
      a {
        color: var(--textColorVar);

        &:before {
          background-color: var(--textColorVar);
        }

        &:hover,
        &:focus {
          &:after {
            background-color: var(--textColorVar);
          }
          &:before {
            background-color: transparent;
          }
        }
      }
    }
  }
</style>
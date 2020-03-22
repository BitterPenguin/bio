<template>
  <main id="Main">
    <section class="Hero">
      <img :src="getModules.hero[0].image.url" class="Hero__image">
      <div class="Hero__content">
          <h1
            v-if="getModules.hero[0].header[0].text"
            :style="{color: getModules.hero[0].text_color}">
              {{getModules.hero[0].header[0].text}}
          </h1>

          <p
            v-if="getModules.hero[0].content[0].text"
            :style="{color: getModules.hero[0].text_color}">
              {{getModules.hero[0].content[0].text}}
          </p>
          <a
            v-if="getModules.hero[0].link_url.url && getModules.hero[0].link_text"
            :href="getModules.hero[0].link_url.url"
            :style="{'--textColorVar': getModules.hero[0].text_color}">
              {{getModules.hero[0].link_text}}
          </a>
      </div>
    </section>

    <!-- {{getModules.body}} -->

  </main>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Content',
  computed: {
    ...mapGetters([
      'getModules'
    ])
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
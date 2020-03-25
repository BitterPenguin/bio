<template>
  <header class="Header" :class="scrollState">
    <nav>
      <ul class="Header__menu" role="menubar" aria-label="Main navigation">
        <li v-for="item in primaryNavigation" :key="item.link_title" class="Header__menu-item" role="none">
          <a
            :href="item.link_url.url"
            role="menuitem"
            :style="{'--primaryNavigationColor': primaryNavigationColor}">
              {{item.link_title}}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'primaryNavigation',
      'primaryNavigationColor'
    ])
  },
  props: ['scrollState']
}
</script>

<style lang="scss" scoped>
  .Header {
    &__menu {
      a {
        color: var(--primaryNavigationColor);

        &:before {
          background-color: var(--primaryNavigationColor);
        }

        &:hover,
        &:focus {
          &:after {
            background-color: var(--primaryNavigationColor);
          }
          &:before {
            background-color: transparent;
          }
        }
      }
    }
  }
</style>
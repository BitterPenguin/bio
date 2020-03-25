<template>
  <section class="Hero">
    <img :src="hero.image.url" class="Hero__image">
    <div class="Hero__content">
        <h1
          animateup
          v-if="hero.header[0].text"
          :style="{color: hero.text_color}"
          class="animateup">
            {{hero.header[0].text}}
        </h1>

        <p
          animateup
          v-if="hero.content[0].text"
          :style="{color: hero.text_color}"
          class="animateup">
            {{hero.content[0].text}}
        </p>
        <a
          animateup
          v-if="hero.link_url.url && hero.link_text"
          :href="hero.link_url.url"
          :style="{'--textColorVar': hero.text_color}"
          class="animateup">
            {{hero.link_text}}
        </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Hero',
    props: ['hero']
  }
</script>

<style lang="scss" scoped>
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
</style>
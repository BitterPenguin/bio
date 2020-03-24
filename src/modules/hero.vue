<template>
  <section class="Hero">
    <img :src="hero.image.url" class="Hero__image">
    <div class="Hero__content">
        <h1
          v-if="hero.header[0].text"
          :style="{color: hero.text_color}">
            {{hero.header[0].text}}
        </h1>

        <p
          v-if="hero.content[0].text"
          :style="{color: hero.text_color}">
            {{hero.content[0].text}}
        </p>
        <a
          v-if="hero.link_url.url && hero.link_text"
          :href="hero.link_url.url"
          :style="{'--textColorVar': hero.text_color}">
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
<template>
  <div animateup v-html="data.primary.soundcloud_embed_code" class="animateup"></div>
</template>

<script>
  export default {
    name: 'SoundCloud',
    props: ['data']
  }
</script>
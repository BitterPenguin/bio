<template>
  <div v-html="data.primary.soundcloud_embed_code" class="module"></div>
</template>

<script>
  export default {
    name: 'SoundCloud',
    props: ['data']
  }
</script>
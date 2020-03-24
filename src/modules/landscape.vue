<template>
  <div class="module">
    <img :src="data.primary.image.url">
    <div v-if="data.primary.content[0].text" class="Landscape__image-content">
      <p :style="{color: data.primary.text_color}">{{data.primary.content[0].text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Landscape',
    props: ['data']
  }
</script>
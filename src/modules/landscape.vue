<template>
  <div>
    <div class="Landscape__image-wrapper">
      <img :src="data.primary.image.url">

      <div v-if="data.primary.content[0].text" class="Landscape__image-overlay"></div>
      
      <div v-if="data.primary.content[0].text" class="Landscape__image-content">
        <p animateup :style="{color: data.primary.text_color}" class="animateup">{{data.primary.content[0].text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Landscape',
    props: ['data']
  }
</script>
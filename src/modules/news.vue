<template>
  <div>
    <h2 class="h1">{{ data.primary.header[0].text }}</h2>
    
    <div animateup v-for="item in data.items" :key="item.header[0].text" class="News__item animateup">
      <h3 v-if="item.header[0].text" class="h2 content">{{item.header[0].text}}</h3>
      <p v-if="item.content[0].text" class="content">{{item.content[0].text}}</p>
      <a 
        v-if="item.link_url.url && item.link_text"
        :href="item.link_url.url">
          {{item.link_text}}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'News',
    props: ['data']
  }
</script>
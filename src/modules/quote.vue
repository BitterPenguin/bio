<template>
  <div>
    <h1 animateup class="animateup">{{ data.primary.quote[0].text }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Quote',
    props: ['data']
  }
</script>
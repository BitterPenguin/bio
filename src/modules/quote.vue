<template>
  <div class="module">
    <h1>{{ data.primary.quote[0].text }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Quote',
    props: ['data']
  }
</script>
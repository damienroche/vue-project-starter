<template lang="pug">
  .home
    h1 Home page
    hello-world
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue'

  @Component({
    components: {
      HelloWorld,
    }
  })
  export default class Home extends Vue {}
</script>

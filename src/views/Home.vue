<template lang="pug">
  .home
    h1.has-text-primary Home page
    hello-world
    select
      option 1
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

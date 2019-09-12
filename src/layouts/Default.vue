<template lang="pug">
  div
    div Default Layout
    main-nav
    slot
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  import MainNav from '@/views/partials/MainNav.vue'

  @Component({
    components: {
      MainNav
    }
  })
  export default class Default extends Vue {}
</script>

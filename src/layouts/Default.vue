<template lang="pug">
  .container.u-flex.u-flex-start-start.u-gap-20
    .main-nav
      main-nav
    .page-content.flex-1
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

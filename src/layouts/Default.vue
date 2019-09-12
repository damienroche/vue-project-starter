<template lang="pug">
  div
    main-nav
    .page-content.container
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

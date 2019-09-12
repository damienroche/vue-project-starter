<template lang="pug">
  .hello
    | Hello world
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string
  }
</script>

<style scoped lang="sass">
  .hello
    color: var(--primary-color)
</style>

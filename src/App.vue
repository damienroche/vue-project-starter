<template lang="pug">
  #app(:style="cssVars")
    component(:is="layout")
      router-view
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import { Getter } from 'vuex-class'

  @Component
  export default class App extends Vue {
    default: string = 'default'

    get layout(): string {
      return `${this.$route.meta.layout || this.default}-layout`
    }

    get cssVars() {
      return {
        '--primary-color': '#006c8c'
      }
    }
  }
</script>

<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
</style>

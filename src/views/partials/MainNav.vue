<template lang="pug">
  div
    span Main Nav
    router-link(:to="{ name: 'home' }") Home
    router-link(:to="{ name: 'about' }") About
</template>

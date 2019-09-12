<template lang="pug">
  aside.menu
    p.menu-label Main Nav
    ul.menu-list
      li
        router-link(:to="{ name: 'home' }") Home
      li
        router-link(:to="{ name: 'about' }") About
</template>

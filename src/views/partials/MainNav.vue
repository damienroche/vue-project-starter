<template lang="pug">
  nav.navbar.has-shadow(role="navigation" aria-label="main navigation")
    .container
      .navbar-menu
        .navbar-start
          router-link.navbar-item(:to="{ name: 'home' }") Home
          router-link.navbar-item(:to="{ name: 'about' }") About
</template>

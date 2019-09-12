// Assets
import '@/assets/stylesheets/main.sass'

// Libs
import Vue from 'vue'
import VueMq from 'vue-mq'

// App
import App from './views/App.vue'
import router from './router/index'
import store from './store/index'

// Layouts
import Default from './layouts/Default.vue'
Vue.component('default-layout', Default)

// Plugins
Vue.use(VueMq, {
  breakpoints: {
    sm: 769,
    md: 1024,
    lg: 1216,
    xl: Infinity
  }
}) // fits with bulma variables -> https://bulma.io/documentation/customize/variables/

// Config
Vue.config.productionTip = false

// Init
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// Assets
import '@/assets/stylesheets/main.sass'

// Libs
import Vue from 'vue'
import VueMq from 'vue-mq'

// App
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// Layouts
import Default from './layouts/Default.vue'
Vue.component('default-layout', Default)

// Plugins
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1024,
    lg: Infinity,
  }
})

// Config
Vue.config.productionTip = false

// Init
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

import Vue from "https://cdn.skypack.dev/vue"
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render:h=>h(App),
}).$mount('#app')
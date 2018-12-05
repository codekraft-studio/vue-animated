import Vue from 'vue'
import App from './App.vue'

import VueAnimated from '../lib/index'

Vue.config.productionTip = false

Vue.use(VueAnimated, {
  functional: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')

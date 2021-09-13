import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import { MapsPlugin } from '@syncfusion/ej2-vue-maps'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import store from './store'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueCompositionAPI)
Vue.use(MapsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

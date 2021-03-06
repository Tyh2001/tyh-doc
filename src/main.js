import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
import './style/icon.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import AtComponents from 'at-ui'
import 'at-ui-style'

Vue.use(ElementUI)
// Vue.use(AtComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

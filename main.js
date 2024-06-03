import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

import router from './Router/router'

// const app = new Vue({
//   router,
//   render: h => h(App)
// })

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	router,
	// render: h => h(App)
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
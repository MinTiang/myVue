// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { DatetimePicker } from 'vant'

Vue.config.productionTip = false
Vue.use(DatetimePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 相当于 router: router
  components: {
    App
  },
  template: '<App/>'
})

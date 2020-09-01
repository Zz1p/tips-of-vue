import Vue from 'vue'
import App from './App.vue'
import {init, bind} from '../custom-life-cycle'

Vue.config.productionTip = false

init()
const vm = new Vue({
  render: h => h(App),
}).$mount('#app')

bind(vm)


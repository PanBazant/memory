 import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "../node_modules/nes.css/css/nes.min.css"

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

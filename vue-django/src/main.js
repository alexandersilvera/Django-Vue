import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify'
import router from "./router"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {BootstrapVue,BootstrapVueIcons} from "bootstrap-vue"
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import store from "./store";


Vue.use(Vuetify)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

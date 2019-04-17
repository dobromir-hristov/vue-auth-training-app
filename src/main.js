import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import en from '@/lang/en'
import Api from '@/services/ApiService'
import Swal from '@/services/NotifyService'

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.prototype.$api = Api
Vue.prototype.$notify = Swal

const i18n = new VueI18n({
  locale: 'en',
  messages: { en }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

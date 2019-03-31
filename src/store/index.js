import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

// Restore the Token from localStorage to Vuex
store.commit('STORE_TOKEN', window.localStorage.getItem('TOKEN') || '')

export default store

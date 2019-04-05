import { AuthService } from '@/services/AuthService'
import { notifyService } from '@/services/notifyService'

// State of the module
const state = {
  token: '',
  user: null
}

const getters = {
  // whether the user is logged in
  isLoggedIn (state) {
    return !!state.token
  }
}

const mutations = {
  // stores the token in the store and in localStorage
  STORE_TOKEN (state, token) {
    state.token = token
    window.localStorage.setItem('TOKEN', token)
  }
}

const actions = {
  tryIt () {
    return notifyService
  },
  login ({ commit }, form) {
    return AuthService.login(form)
      .then((response) => {
        commit('STORE_TOKEN', response.data.token)
      })
  },
  logout () {
    window.localStorage.removeItem('TOKEN')
    window.location.reload()
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

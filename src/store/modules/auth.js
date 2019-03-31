import { AuthService } from '@/services/AuthService'

const state = {
  token: '',
  user: null
}

const getters = {
  isLoggedIn (state) {
    return !!state.token
  }
}

const mutations = {
  STORE_TOKEN (state, token) {
    state.token = token
    window.localStorage.setItem('TOKEN', token)
  }
}

const actions = {
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

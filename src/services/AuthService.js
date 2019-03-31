import ApiService from './ApiService'

export const AuthService = {
  login ({ username, password }) {
    return ApiService.post('/login', { username, password })
  },
  logout () {
    return ApiService.post('/logout')
  },
  register ({ email, password }) {
    return ApiService.post('/register', { email, password })
  }
}

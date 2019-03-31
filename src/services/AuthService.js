import ApiService from './ApiService'

// Creates a new Authentication Api service. To be used everywhere to work with Auth api
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

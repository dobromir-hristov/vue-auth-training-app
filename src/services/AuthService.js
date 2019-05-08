import ApiService from './ApiService'

// Creates a new Authentication Api service. To be used everywhere to work with Auth api
export const AuthService = {
  login ({ email, password }) {
    return ApiService.post('/login', { email, password })
  },
  logout () {
    return ApiService.post('/logout')
  },
  register ({ email, password }) {
    return ApiService.post('/register', { email, password })
  }
}

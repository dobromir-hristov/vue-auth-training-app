import store from '@/store'

/**
 * Helper to return if you have access to a route or not
 * @param {boolean} rule
 * @return {boolean}
 */
export const canAccess = function (rule) {
  if (rule === false) {
    return !store.getters.isLoggedIn
  }
  return store.getters.isLoggedIn
}

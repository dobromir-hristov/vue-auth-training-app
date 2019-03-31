import axios from 'axios'

// Creates a new Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api'
})

// Passes these methods from axios to our service
export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
}

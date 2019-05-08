import axios from 'axios'

// Creates a new Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

// Passes these methods from axios to our service
export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
}

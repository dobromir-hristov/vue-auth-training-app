import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api'
})

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
}

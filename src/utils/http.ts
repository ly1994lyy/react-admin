import axios from 'axios'

const http = axios.create({
  baseURL:'http://localhost:3009',
  timeout: 60000
})

http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

export default http
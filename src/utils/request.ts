import axios from 'axios'
import { toast } from '@/hooks/use-toast'

const requestInstance = axios.create({
  baseURL: 'http://localhost:9000'
})

requestInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

requestInstance.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      console.log(response.data.msg)
      toast({title: 'Error', description: response.data.msg})
      return Promise.reject(response.data.msg)
    }
    return response.data
  },
  error => {
    toast({
      title: 'Error',
      description: error.message
    })
    return Promise.reject(error)
  }
)

export default requestInstance

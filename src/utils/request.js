import axios from 'axios'
const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 5000
})
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  })
service.interceptors.response.use(
  (res) => {
    const {
      code,
      data,
      msg
    } = res.data
    if (code === 200) {
      return data
    } else {
      return Promise.reject(new Error(msg))
    }
  },
  (err) => {
    return Promise.reject(err)
  })
// 统一为data传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request

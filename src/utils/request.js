import axios from 'axios'
import {
  ElMessage
} from 'element-plus'
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
      _showError(msg)
      return Promise.reject(new Error(msg))
    }
  },
  (err) => {
    _showError(err.msg)
    return Promise.reject(err)
  })
// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}
// 统一为data传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request

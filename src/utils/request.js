import axios from 'axios'
import {
  ElMessage
} from 'element-plus'
// 引入封装订单loading加载
import loading from './loading'
// import store from '../store'

const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    loading.open()
    // 将token通过请求头发送给后台
    // const token = store.getters.token
    // if (token) config.headers.Authorization = 'Bearer ' + token
    return config
  },
  (err) => {
    loading.close()
    return Promise.reject(err)
  })
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    loading.close()
    const {
      code,
      data,
      msg
    } = res.data
    if (code === 200) {
      return data
    } else {
      loading.close()
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

import request from '@/utils/request'
// 获取token和验证码
const getToken = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}
// 获取路由数据
const getRoutes = () => {
  return request({
    url: '/sys/menu/nav',
    method: 'GET'
  })
}
// 获取userInfo数据
const getUserInfo = () => {
  return request({
    url: '/sys/userInfo',
    method: 'GET'
  })
}
// 登录接口
const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST',
    data
  })
}
export default {
  getToken,
  getRoutes,
  getUserInfo,
  login
}

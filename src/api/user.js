import request from '@/utils/request'
// 获取token和验证码
const getToken = (data) => {
  return request({
    url: '/captcha',
    method: 'GET',
    data
  })
}
const nav = () => {
  return request({
    url: '/sys/menu/nav',
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
  nav,
  login
}

import request from '@/utils/request'
const login = (data) => {
  return request({
    url: '/captcha',
    method: 'GET',
    data
  })
}
const userInfo = () => {
  return request({
    url: '/sys/menu/nav',
    method: 'GET'
  })
}
export default {
  login,
  userInfo
}

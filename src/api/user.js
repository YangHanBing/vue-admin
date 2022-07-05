import request from '@/utils/request'
const getToken = (data) => {
  return request({
    url: '/captcha',
    method: 'GET',
    data
  })
}
const login = () => {
  return request({
    url: '/sys/menu/nav',
    method: 'GET'
  })
}
export default {
  getToken,
  login
}

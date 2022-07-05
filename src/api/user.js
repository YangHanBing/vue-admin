import request from '@/utils/request'
const login = (data) => {
  return request({
    url: '/captcha',
    method: 'GET',
    data
  })
}
export default {
  login
}

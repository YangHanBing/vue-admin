import service from '@/utils/request'
const login = (data) => {
  return service({
    url: '/captcha',
    method: 'GET',
    data
  })
}
export default {
  login
}

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  routes: state => state.user.routes
}
export default getters

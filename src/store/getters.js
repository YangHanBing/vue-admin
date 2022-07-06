const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  routes: state => state.permission.routes,
  tagsview: state => state.tagsview.tagsView
}
export default getters

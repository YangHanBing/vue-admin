const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  routes: state => state.user.routes,
  tagsview: state => state.tagsview.tagsView
}
export default getters

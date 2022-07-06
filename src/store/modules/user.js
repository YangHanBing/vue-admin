import User from '../../api/user'
import {
  setItem,
  getItem,
  removeItem
} from '../../utils/storage'
import {
  resetRouter
} from '../../utils/removeRouter'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || {},
    routes: []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    },
    setRoutes(state, routes) {
      state.routes = routes
      // setItem('routes', routes)
    }
  },
  actions: {
    // 将token存入本地
    async setToken({
      commit
    }, payload) {
      commit('setToken', payload)
    },
    // 将用户信息存入本地
    async getUserInfo({
      commit
    }) {
      try {
        const response = await User.getUserInfo()
        commit('setUserInfo', response)
        console.log(response);
        return response
      } catch (err) {
        console.log(err)
      }
    },
    // 将路由数据存入本地
    async getRoutes({
      commit
    }) {
      try {
        const response = await User.getRoutes()
        // commit('setRoutes', response.nav)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    // 删除本地和vuex的token和用户信息
    async logout({
      commit
    }) {
      try {
        await User.logout()
        resetRouter()
        commit('setToken', '')
        commit('setUserInfo', {})
        removeItem('token')
        removeItem('userInfo')
        return response
      } catch (err) {
        console.log(err)
      }
    }
  }
}

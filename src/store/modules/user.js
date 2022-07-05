import User from '../../api/user'
import {
  setItem,
  getItem
} from '../../utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
        return response
      } catch (err) {
        console.log(err)
      }
    }
    // 删除本地和vuex的token和用户信息
    // logout({
    //   commit
    // }) {
    //   resetRouter()
    //   commit('setToken', '')
    //   commit('setUserInfo', {})
    //   removeItem('token')
    // }
  }
}

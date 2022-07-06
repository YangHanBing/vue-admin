import store from '../store'
import router from '../router'
export function resetRouter() {
  if (
    store.getters.routes
  ) {
    const menus = store.getters.routes
    menus.forEach((menu) => {
      router.removeRoute(menu)
    })
  }
}
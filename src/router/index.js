import Vue from 'vue'
import Router from 'vue-router'
import Pc from './pc'
import Phone from './phone'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [...Pc, ...Phone],
  scrollBehavior (to, from, savedPosition) {
    if (to.params.keep) {
      return {}
    }
    return { x: 0, y: 0 }
  }
})

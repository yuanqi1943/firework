import Vuex from 'vuex'
import Vue from 'vue'

const that = new Vue()

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
})

export default store

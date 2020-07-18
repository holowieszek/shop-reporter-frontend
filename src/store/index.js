import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Perfume from './modules/perfume'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    User,
    Perfume
  }
})

export default store


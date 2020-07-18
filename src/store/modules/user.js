import asyncWrapper from '../../utils/asyncWrapper'
import { isAuthenticated, signUp, signIn } from '../../services/user.service'
import { SET_USER, SET_IS_AUTHENTICATED } from '../mutationTypes'

const state = {
  user: [],
  isAuthenticated: false
}

const getters = {
  user: state => state.user,
  isAuthenticated: state => state.isAuthenticated
}

const actions = {
  async signUp({ commit }, data) {
    const { error, result } = await asyncWrapper(signUp(data))

    if (!error) {
      commit(SET_USER, result.user)
    }

    return { error }
  },
  async signIn({ commit }, data) {
    const { error, result } = await asyncWrapper(signIn(data))

    if (!error) {
      commit(SET_USER, result.user)
    }

    return { error }
  },
  async isAuthenticated({ commit }) {
    const { result } = await asyncWrapper(isAuthenticated())

    result ? commit(SET_IS_AUTHENTICATED, true) : commit(SET_IS_AUTHENTICATED, false)
    
    return result
  }
}

const mutations = {
  [SET_USER] (state, payload) {
    state.user = payload
  },
  [SET_IS_AUTHENTICATED] (state, payload) {
    state.isAuthenticated = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
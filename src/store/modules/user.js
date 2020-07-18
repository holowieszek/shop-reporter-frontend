import asyncWrapper from '../../utils/asyncWrapper'
import { signUp, signIn } from '../../services/user.service'
import { SET_USER } from '../mutationTypes'

const state = {
  user: []
}

const getters = {
  user: state => state.user
}

const actions = {
  async signUp({ commit }, data) {
    const { error, result } = await asyncWrapper(signUp(data))

    return !error ? commit(SET_USER, result.user) : { error }
  },
  async signIn({ commit }, data) {
    const { error, result } = await asyncWrapper(signIn(data))

    return !error ? commit(SET_USER, result.user) : { error }
  }
}

const mutations = {
  [SET_USER] (state, payload) {
    state.user = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
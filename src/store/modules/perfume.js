import asyncWrapper from '../../utils/asyncWrapper'
import ApiService from '../../services/api.service'
import { SET_PERFUME } from '../mutationTypes'

const state = {
  perfume: []
}

const getters = {
  perfume: state => state.perfume
}

const actions = {
  async getPerfume({ commit }) {
    const { error, result } = await asyncWrapper(ApiService.get('perfume'))

    if (!error) {
      commit(SET_PERFUME, result)
    }

    return { error }
  }
}

const mutations = {
  [SET_PERFUME] (state, payload) {
    state.perfume = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
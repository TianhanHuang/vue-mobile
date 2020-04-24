import types from '../types'
const state = {
  isLoading: false,
  direction: 'forward',
  number: 999
}

const mutations = {
	updateLoadingStatus (state, payload) {
		state.isLoading = payload.isLoading
  },
  [types.UPDATE_DIRECTION](state,payload) {
    state.direction = payload
  },
  [types.TEST](state, number) {
    state.number = state.number+number
  }
}
const getters = {
  getNumber() {
    return state.number
  }
}
export default {
	state,
  mutations,
  getters
}

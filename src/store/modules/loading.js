import { LOADING } from '../mutation-types'
const state = {
  load: 0
}
const mutations = {
  [LOADING] (state, load) {
    state.load = load
  }
}
export default {
  state,
  mutations
}

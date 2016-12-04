import { SET_TAGS } from '../mutation-types'
// initial state
const state = {
  tags: []
}
// mutations
const mutations = {
  [SET_TAGS] (state, tags) {
    state.tags = tags
  }
}
export default {
  state,
  mutations
}

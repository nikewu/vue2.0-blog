import { SET_ARTICLES, SET_PAGE, SET_TOTAL } from '../mutation-types'
const state = {
  articles: [],
  page: 1,
  total: null
}
const mutations = {
  [SET_ARTICLES] (state, articles) {
    state.articles = articles
  },
  [SET_PAGE] (state, page) {
    state.page = parseInt(page)
  },
  [SET_TOTAL] (state, total) {
    state.total = total
  }
}
export default {
  state,
  mutations
}

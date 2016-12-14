import { SET_ESSAY } from '../mutation-types'
// 子参数必须要有初始值
const state = {
    essay: {
        'title': null,
        'content': null,
        'img': null
    }
}
const mutations = {
    [SET_ESSAY](state, essay) {
        state.essay = essay
    }
}
export default {
    state,
    mutations
}
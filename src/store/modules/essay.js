import { SET_ESSAY, SET_ESSAY_FAIL } from '../mutation-types'
// 子参数必须要有初始值
const state = {
    essay: {
        'title': null,
        'content': null,
        'img': null
    },
    status: 1
}
const mutations = {
    [SET_ESSAY](state, essay) {
        state.essay = essay
    },
    [SET_ESSAY_FAIL](state, status) {
        state.status = status
    }
}
export default {
    state,
    mutations
}
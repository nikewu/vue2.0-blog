import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import tags from './modules/tags'
import loading from './modules/loading'
import essays from './modules/essays'
import essay from './modules/essay'
import createLogger from 'Vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        tags,
        loading,
        essays,
        essay
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
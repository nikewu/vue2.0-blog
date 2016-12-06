import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import { sync } from 'vuex-router-sync'
import store from './store'
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
        routes,
        history: true,
        saveScrollPosition: true,
        suppressTransitionError: true
    })
    // 处理由于刷新页面vuex丢失数据的问题
    // 记录分页
if (window.sessionStorage.page) {
    store.dispatch('setPage', window.sessionStorage.page)
}
sync(store, router)
new Vue({
    router,
    store
}).$mount('#app')
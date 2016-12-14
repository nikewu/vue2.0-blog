import Vue from 'vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import mock from './server';
if (window.sessionStorage.page) {
    store.dispatch('setPage', window.sessionStorage.page)
}
sync(store, router)
const app = new Vue({
        router,
        store
    }).$mount('#app')
    // 输出实例方便服务端渲染 以及action调用用于实例跳转
export { app, router, store }
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
    // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const home = resolve => {
    require.ensure(['./views/app.vue'], () => {
        resolve(require('./views/app.vue'))
    })
}
const list = resolve => {
    require.ensure(['./views/list.vue'], () => {
        resolve(require('./views/list.vue'))
    })
}
const archive = resolve => {
    require.ensure(['./views/archive.vue'], () => {
        resolve(require('./views/archive.vue'))
    })
}
const about = resolve => {
    require.ensure(['./views/about.vue'], () => {
        resolve(require('./views/about.vue'))
    })
}
const essay = resolve => {
    require.ensure(['./views/essay.vue'], () => {
        resolve(require('./views/essay.vue'))
    })
}

export default new Router({
    history: true,
    saveScrollPosition: true,
    routes: [{
        path: '/',
        component: home,
        children: [{
                path: '',
                name: 'list',
                component: list
            },
            {
                path: '/archive',
                name: 'archive',
                component: archive
            },
            {
                path: '/about',
                name: 'about',
                component: about
            },
            {
                path: '/essay/:id',
                name: 'essay',
                component: essay
            }
        ]

    }, {
        path: '*',
        component(resolve) {
            require.ensure(['./views/NotFound.vue'], () => {
                resolve(require('./views/NotFound.vue'))
            })
        }
    }]
})
import * as types from './mutation-types'
import { API_ROOT } from '../config'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Mock from 'mockjs'
var Random = Mock.Random
export const setPage = function({ commit }, page) {
    commit(types.SET_PAGE, page)
}
export const setTags = function({ commit }) {
    Mock.mock(API_ROOT + 'api/tags', {
        'tags': ['js', 'php', 'vue', 'css', '测试', 'nodeJs']
    })
    commit(types.LOADING, 1)
        // vue2.0 this 和 vue 1.0不同这里使用全局的vue http
    Vue.http.get(API_ROOT + 'api/tags', {}).then(response => {
        // 这里要将数据转化为json格式
        commit(types.SET_TAGS, JSON.parse(response.body).tags)
        commit(types.LOADING, 0)
    }, response => {
        console.log('Fetch Failed')
    })
}
export const setArticles = function({ commit }, page, number = 5) {
    Mock.mock(API_ROOT + 'api/article?page=1&number=5', {
        'articles': [{
                '_id': 1,
                'title': Random.cword(5),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            },
            {
                '_id': 2,
                'title': Random.title(3, 5),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            },
            {
                '_id': 3,
                'title': Random.title(3, 5),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            },
            {
                '_id': 4,
                'title': Random.title(3, 5),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            },
            {
                '_id': 5,
                'title': Random.title(3, 5),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            }
        ],
        'total': 20

    })
    Mock.mock(API_ROOT + 'api/article?page=2&number=5', {
        'articles': [{
                '_id': 6,
                'title': Random.cword(10),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            },
            {
                '_id': 7,
                'title': Random.cword(10),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            },
            {
                '_id': 8,
                'title': Random.cword(10),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            },
            {
                '_id': 9,
                'title': Random.cword(10),
                'intro': Random.cword(200),
                'img': Random.dataImage(),
                'date': Random.date('yyyy-MM-dd')
            }
        ],
        'total': 20
    })
    commit(types.LOADING, 1)
        // vue2.0 this 和 vue 1.0不同这里使用全局的vue http
    Vue.http.get(API_ROOT + 'api/article', {
        params: {
            page: page,
            number: number
        }
    }).then(response => {
        // 这里要将数据转化为json格式
        commit(types.SET_ARTICLES, JSON.parse(response.body).articles)
        commit(types.SET_TOTAL, JSON.parse(response.body).total)
        commit(types.LOADING, 0)
    }, response => {
        console.log('Fetch Failed')
    })
}
export const setEssay = function({ commit }, id) {
    Mock.mock(API_ROOT + 'api/essay?_id=1', {
        'essay': {
            'title': Random.cword(10),
            'content': Random.cword(1500),
            'img': Random.dataImage(),
        }
    })
    commit(types.LOADING, 1)
    Vue.http.get(API_ROOT + 'api/essay', {
        params: {
            _id: id,
        }
    }).then(response => {
        // 这里要将数据转化为json格式
        commit(types.SET_ESSAY, JSON.parse(response.body).essay)
        commit(types.LOADING, 0)
    }, response => {
        $router.replace('/');
    })
}
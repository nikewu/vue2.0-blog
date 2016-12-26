import * as types from './mutation-types'
import api from '../api'
// 这里引入router实例用于页面跳转 注意引入方式
import { router } from '../main'
import { API_ROOT } from '../config'
export const setPage = function({ commit }, page) {
    commit(types.SET_PAGE, page)
}
export const setTags = function({ commit }) {
    commit(types.LOADING, 1)
    api.getTagList().then(response => {
        if (!response.ok) {
            console.log('Fetch Failed')
        }
        commit(types.SET_TAGS, JSON.parse(response.body).tags)
        commit(types.LOADING, 0)
    }, response => {
        console.log('超时。。。。')
    })
}
export const setArticles = function({ commit }, page, number = 5) {
    let options = {
        page: page,
        number: number
    }
    commit(types.LOADING, 1)
    api.getArticles(options).then(response => {
        if (!response.ok) {
            console.log('Fetch Failed')
        }
        commit(types.SET_ARTICLES, JSON.parse(response.body).articles)
        commit(types.SET_TOTAL, JSON.parse(response.body).total)
        commit(types.LOADING, 0)
    }, response => {
        console.log('超时。。。。')
    })
}
export const setEssay = function({ commit }, id) {
    let options = {
        id: id
    }
    commit(types.LOADING, 1)
    api.getArticle(options).then(response => {
        if (!response.ok) {
            console.log('Fetch Failed')
        }
        commit(types.SET_ESSAY, JSON.parse(response.body).essay)
        commit(types.LOADING, 0)
    }, response => {
        console.log('文章请求超时。。。。')
        router.push("/");
    })
}
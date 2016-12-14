import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config'
Vue.use(VueResource)
Vue.http.options.crossOrigin = true
export const TagResource = Vue.resource(API_ROOT + 'api/tags{/msg}')
export const ArticleResource = Vue.resource(API_ROOT + 'api/article{/controller}')
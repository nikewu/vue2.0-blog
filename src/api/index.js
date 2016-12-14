import { TagResource, ArticleResource } from './resources'
export default {
    getTagList: function() {
        return TagResource.get({ msg: 'All' })
    },
    getArticles: function(options) {
        return ArticleResource.get({ controller: 'getALLArticle', ...options })
    },
    getArticle: function(options) {
        return ArticleResource.get({ controller: 'getArticle', ...options })
    }
}
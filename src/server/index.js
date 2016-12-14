import { API_ROOT } from '../config'
var Mock = require('mockjs')
var Random = Mock.Random
Mock
    .mock(API_ROOT + 'api/tags/All', {
        'tags': ['js', 'php', 'vue', 'css', '测试', 'nodeJs']
    })
    .mock(API_ROOT + 'api/article/getALLArticle?page=1&number=5', {
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
    .mock(API_ROOT + 'api/article/getALLArticle?page=2&number=5', {
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
    .mock(API_ROOT + 'api/article/getArticle?id=1', {
        'essay': {
            'title': Random.cword(10),
            'content': Random.cword(1500),
            'img': Random.dataImage(),
        }
    })
export default Mock;
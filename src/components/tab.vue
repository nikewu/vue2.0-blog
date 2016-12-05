<template>
<div class="Tab">
  <li v-show="page - 5 > 0" >
    <a  @click.prevent="goToPage(page - 5)">上一页</a>
  </li>
  <li v-show="page - 2 > 0">
    <a  @click.prevent="goToPage(page - 2)">{{page - 2}}</a>
  </li>
  <li v-show="page - 1 > 0">
    <a  @click.prevent="goToPage(page - 1)">{{page - 1 }}</a>
  </li>
  <li>
    <a  :href="'?page='+1111" class ="choosen" @click.prevent="goToPage(page)">{{page}}</a>
  </li>
  <li v-show="total - page >= 1 ">
    <a  :href="'?page='+2111" @click.prevent="goToPage(page + 1)">{{page + 1}}</a>
  </li>
  <li v-show="total -page >= 2 ">
    <a  @click.prevent="goToPage(page + 2)">{{page + 2 }}</a>
  </li>
  <li v-show="page <= 2 && total - page >= 3">
    <a  @click.prevent="goToPage(page + 3)">{{page + 3 }}</a>
  </li>
  <li v-show="page == 1 && total - page >= 4">
    <a  @click.prevent="goToPage(page + 4)">{{page + 4 }}</a>
  </li>
  <li v-show="total - page > 5 ">
    <a  @click.prevent="goToPage(page + 5)">下一页</a>
  </li>
</div>
</template>

<script>
    export default {
        props: ['page', 'total'],
        methods: {
            goToPage: function(page) {
                // 重新拉取文章
                this.$parent.$store.dispatch('setArticles', page)
                    // 触发page变化
                this.$store.dispatch('setPage', page)
                    // 这里将当前页数记录在sessionStorage中
                window.sessionStorage.page = page
            }
        }
    }
</script>
<style scoped>
    .Tab {
        display: flex;
        margin: 20px 0;
    }
    
    .Tab li {
        cursor: pointer;
        flex: 0 1 auto;
        padding: 10px 20px;
    }
    
    .choosen {
        color: #8de0dd;
    }
</style>
<template>
<div>
  <article v-for="article in articles">
    <h1>
    <router-link :to="{name:'essay',params:{id:article._id}}"> <a  v-text="article.title"></a></router-link>            
    </h1>
    <div class="pre-content">
      <p >
        {{article.intro}}...
      </p>
      <img :src='article.img'>
    </div>
    <p class="read-all">
      <a href="javascript:void()">继续阅读 »</a>
      <span v-text="article.date"><i></i></span>
    </p>
  </article>
</div>
</template>
<script>
    export default {
        props: ['articles']
    }
</script>
<style scoped>
    article {
        border-bottom: 2px dotted #ddd;
        border-top: 1px solid #fff;
        padding: 30px 0;
        position: relative;
        cursor: pointer;
    }
    
    h1 {
        position: relative;
        display: inline;
    }
    
    h1:before {
        height: 3px;
        background-color: #97dbd8;
        transform: scaleX(0);
        content: "";
        position: absolute;
        width: 100%;
        bottom: -.2em;
        left: 0;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
    }
    
    h1:hover:before {
        transform: scaleX(1);
        content: "";
        float: left;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
    }
    
    .pre-content {
        display: flex;
        margin-top: 20px;
        align-items: flex-start;
    }
    
    .pre-content p {
        font-size: 16px;
        flex: 1;
        padding: 0 40px;
    }
    
    .pre-content img {
        width: 130px;
        height: 130px;
    }
    
    .read-all {
        padding: 0px 170px 0 40px;
        display: flex;
    }
    
    .read-all a {
        flex: 1;
        font-size: 14px;
    }
    
    .read-all span {
        color: #999;
        font-size: 12px;
    }
    
    .read-all span i {
        display: inline-block;
        background-size: contain;
        vertical-align: sub;
        width: 1.2em;
        height: 1.2em;
        margin-right: .5em;
        background-image: url('../assets/images/time.svg');
    }
</style>
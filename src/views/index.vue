<template>
<!-- 需要一个根容器 -->
  <div  class="container">
    <Load :load="load"></Load>
    <nav>
      <div class="nav-container">
        <div @click = "aboutMe" class="me"></div>
        <ul class="menu">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/archive">归档</router-link>
            </li>
            <li>
              <router-link to="/about">关于</router-link>
            </li>
        </ul>
      </div>
    </nav>
    <div class="content">
         <router-view></router-view>
      <footer>
        <p>Powered by <a href='https://vuejs.org.cn/'>Vue</a>. Copyright &copy; 2016</p>
      </footer>
    </div>
  </div>
</template>
<script>
import Load from '../components/loading.vue'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      load: 'getIsLoading'
    })
  },
  methods: {
    aboutMe () {
      this.$router.push({
        path: 'about'
      })
    }
  },
  components: {
    Load
  }
}
</script>
<style>
/*容器内的一些标签属性*/
@font-face {
  font-family: 'Conv_CaviarDreams';
  src: url('../assets/fonts/CaviarDreams.eot');
  src: local('☺'), url('../assets/fonts/CaviarDreams.woff') format('woff'), url('../assets/fonts/CaviarDreams.ttf') format('truetype'), url('../assets/fonts/CaviarDreams.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
nav{
	background-color: #77a5db;
	background-size: cover;
  background-image: url('../assets/images/bg.jpg');
	height: 100%;
  display: flex;
  justify-content: center;
	position: fixed;
	width: 280px;
}
nav .nav-container{
  padding: 120px 0 0 0;
}
nav .nav-container .me{
  width: 125px;
  height: 125px;
  cursor: pointer;
  position:relative;
  border-radius: 50%;
  background-size: cover;
  background-image: url('../assets/images/me.jpg');
}
nav .nav-container .me:before{
  content: "风冰子";
  color: rgba(255, 255, 255, 1);
  position: absolute;
  left: 20px;
  width: 115px;
  top: 150px;
  font-size: 24px;
  font-weight: bold;
}
.me:hover ~ .menu li:last-child a{
  color: rgba(232, 226, 226, 1);
}
nav .nav-container .me:after{
  content: "Learning makes me happy";
  position: absolute;
  color: rgba(255, 255, 255, 1);
  left: -20px;
  width: 200px;
  font-family: "Helvetica Neue",'Conv_CaviarDreams',Helvetica,Arial,sans-serif;
  top: 195px;
  font-size: 14px;
}
nav .nav-container .menu{
  margin-top: 120px;
}
nav .nav-container .menu li{
  margin-bottom: 15px;
}
nav .nav-container .menu a{
  color: rgba(255, 255, 255, 1);
}
nav .nav-container .menu a:hover{
  color: rgba(232, 226, 226, 1);
}
footer{
	border-top: 1px solid #ddd;
	display:flex;
  justify-content: center;
  font-size: 14px;
  padding:10px 0;
}
.container{
  background: #fff;
  max-width: 1600px;
  height: 100%;
  min-height: 100%;
  position: relative;
}
.content{
  background: #fff;
  margin-left: 280px;
  height: 100%;
  position: relative;
  padding: 0 70px 0 40px;
}
/*默认样式*/
a{
  color: #90c9c6;
transition: color 0.2s ease-in-out 0s;
}
a:hover{
  color: #97dbd8;
  transition: color 0.2s ease-in-out 0s;
}
p{
  color: #555;
}
h1{
      font-weight: 300;
}
</style>

<template>
<div class="tags-container">
  <ul>
	      <li v-for="tag in tags">
          <a>{{tag}}</a>
        </li>
	</ul>
</div>
</template>
<script>
export default {
  props: ['tags']
}
</script>
<style scoped>
.tags-container{
  font-family: "Helvetica Neue",'Conv_CaviarDreams',Helvetica,Arial,sans-serif;
}
.tags-container ul {
  padding: 40px 0 0 0;
  display: flex;
  flex-wrap: wrap;
}
.tags-container ul li{
  cursor:pointer;
  padding: 0 5px;
  border-radius:10%;
  border: 1px solid #90c9c6;
  transition: color 0.2s ease-in-out 0s;
  flex : 0 1 1;
  margin-right: 10px;
}
.tags-container ul li:hover{
 border: 1px solid #97dbd8;
 transition: color 0.2s ease-in-out 0s;
}
</style>

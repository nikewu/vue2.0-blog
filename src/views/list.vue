<template>
 <div>
   <Tags :tags ="tags"></Tags>
   <Essays :articles ="articles"></Essays>
   <Tab :page ="page" :total = "total"></Tab>
 </div>
</template>
<script>
import Tags from '../components/tags.vue'
import Essays from '../components/essays.vue'
import Tab from '../components/tab.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      tags: 'getTags',
      articles: 'getArticles',
      page: 'getPage',
      total: 'getTotal'
    })
  },
  methods: {
    ...mapActions([
      'setTags',
      'setArticles'
    ])
  },
  created () {
    this.$store.dispatch('setTags')
    this.$store.dispatch('setArticles', this.page)
  },
  components: {
    Tags,
    Essays,
    Tab
  }
}
</script>
<style>
</style>

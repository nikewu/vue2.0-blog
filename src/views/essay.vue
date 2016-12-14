<template>
<div>
    <h1>{{essay.title}}</h1>
    <p>{{essay.content}}</p>
</div>
</template>
<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                essay: 'getEssay'
            })
        },
        methods: {
            ...mapActions([
                'setEssay'
            ])
        },
        created() {
            this.$store.dispatch('setEssay', this.$route.params.id)
        }
    }
</script>
<style scoped>

</style>
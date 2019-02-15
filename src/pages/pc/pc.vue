<template>
    <div class="content">
        <Header v-if="is_Index"/>
        <HeaderO v-else/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/pc/header/header'
import HeaderO from '@/components/pc/header/headerO'
import Footer from '@/components/pc/footer/footer'

export default {
    name:'',
    components:{
        Header,
        HeaderO,
        Footer,
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted () {
        this.is_Index = this.index_map.indexOf(this.$route.name) !== -1
        console.log(this.is_Index)
    },
    data () {
        return {
        is_Index: false,
        index_map: ['pc.index'],
        num: 0
        }
    },
    beforeRouteUpdate (to, old, next) {
        this.is_Index = this.index_map.indexOf(to.name) !== -1
        next()
    },
    RouteUpdate (to, old, next) {
        this.is_Index = this.index_map.indexOf(to.name) !== -1
        next()
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
    <div>
      <el-container>
        <el-header>新闻资讯</el-header>
        <el-main>
            <el-container :key="index" v-for="(item,index) in newsList" >
                <el-aside><img class="news-img" :src="item.src" alt=""></el-aside>
                <el-main class="news-title">{{item.info}}</el-main>
            </el-container>
        </el-main>
      </el-container>
      <el-button class="btn-show-more" type="warning" v-on:click="showMore">查看更多</el-button>
    </div>
</template>

<script>
import img1 from '@/assets/img/logo.png'
import img2 from '@/assets/img/logo.png'
import img3 from '@/assets/img/logo.png'
export default {
  name: 'news',
  data () {
    return {
     newsList:[
        {src:img1,info:'Lorem ipsum dolor sitamet, consectetur adipisicing elit. Voluptate dolor'},
        {src:img2,info:'Lorem ipsum dolor sitamet, consectetur adipisicing elit. Voluptate dolor'},
        {src:img3,info:'Lorem ipsum dolor sitamet, consectetur adipisicing elit. Voluptate dolor'},
      ]
    }
  },
  components: {

  },
  computed: {
  
  },
  methods: {
     showMore: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>
<style scoped>
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size:36px;
    margin: 10px 0;
  }
  .el-aside {
    background-color: rgb(39, 119, 211);
    color: #333;
    text-align: center;
    width: auto !important;
    padding: 5px
  }
  .news-img{
    width: 245px;
    height: 150px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  .news-title{
    background-color: #eee;
  }
  body > .el-container {
    margin-bottom: 40px;
    background-color:#eee; 
  }
  .el-main > .el-container{
    margin: 10px;
  }
</style>
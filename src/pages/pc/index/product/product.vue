<template>
  <div>
    <el-header>产品中心</el-header>
    <!-- <el-carousel :interval="5000" type="card" height="300px" trigger="click" indicator-position="none">
      <el-carousel-item v-for="(item,index) in productImg" :key="index" :style="'background:url('+item.imgSrc+');background-size:cover'">
        <h3>{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in productImg" :key="index" >
          <div class="grid-content bg-purple" :style="'background:url('+item.imgSrc+');background-size:cover'"></div>
          <p>{{item.name}}</p>
        </el-col>
    </el-row>
    <el-button class="btn-show-more" type="warning" v-on:click="showMore">查看详情</el-button>
  </div>
</template>

<script>
import img1 from './img/img-banner-1.jpg'
import img2 from './img/img-banner-2.jpg'
import img3 from './img/img-banner-3.jpg'
export default {
  name: 'product',
  data () {
    return {
      productImg:[
        {name:'福气到',imgSrc:img1},
        {name:'第二个',imgSrc:img2},
        {name:'第三个',imgSrc:img3},
        {name:'第四个',imgSrc:img3},
        {name:'福气到',imgSrc:img1},
        {name:'第二个',imgSrc:img2},
        {name:'第三个',imgSrc:img3},
        {name:'第四个',imgSrc:img3},
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
    margin: 15px 0;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #ec4849;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #f49231;
  }

  /* layout布局 */
  .el-row {
    padding: 20px 20px 10px;
  }
  .el-col {
    border-radius: 4px;
    margin: 5px 0
  }
  .el-col>p{
    text-align: center;
    font-size: 18px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
    height: 216px;
    border: 2px solid #eee;
    border-radius: 4px;
    box-shadow: 0 0 5px 0px #ddd;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
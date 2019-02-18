<template>
    <div class="body-content">
        <el-header>关于瑞福祥</el-header>
        <el-container >
            <el-main>
              <img v-bind:src="aboutInfo[0].src" alt="">
            </el-main>
            <el-main class="about-text">
              <h1 class="about-tital">公司简介</h1>
              <p class="about-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Nobis est ipsa ipsum possimus soluta assumenda dolorum hic voluptatem at,
                  molestias provident ipsam corrupti ex earum vel delectus facere non porro!
              </p>
            </el-main>
        </el-container>
        <el-container >
            <el-main class="about-text">
              <h1 class="about-tital">经营范围</h1>
              <p class="about-info">
                	经营范围: 喷花类（C级、D级）、旋转类（C级、D级）、升空类（C级）、旋转升空类（C级）、
                  吐珠类（C级）、小礼花类（C级）、组合烟花类（C级）生产、销售(许可证有效期限至2018年6月11日)。
                  （依法须经批准的项目;经相关部门批准后方可开展经营活动）行业代码: 4190
              </p>
            </el-main>
            <el-main>
              <img v-bind:src="aboutInfo[0].src" alt="">
            </el-main>
        </el-container>
    </div>
</template>

<script>
import img1 from '@/assets/img/logo.png'
import img2 from '@/assets/img/logo.png'
import img3 from '@/assets/img/logo.png'
export default {
  name: 'about',
  data () {
    return {
      aboutInfo:[
        {src:img1,info:'Lorem ipsum dolor sitamet, consectetur adipisicing elit. Voluptate dolor'},
        {src:img2,info:'Lorem ipsum dolor sitamet, consectetur adipisicing elit. Voluptate dolor'},
        {src:img3,info:'Lorem ipsum dolor sitamet, consectetur adipisicing elit. Voluptate dolor'},
      ],
      // value1:0,
      // value2:0,
      // value3:0
    }
  },
  components: {

  },
  computed: {
    //computed计算方法 自动给data里赋值
    // value4(){
    //   return this.value1+this.value2+this.value3
    // }
  },
  methods: {

  },
  watch:{
    //watch监听数据方法
      // value4(oldW,newW){
      //   console.log(oldW)
      //   console.log(newW)
      // }
  }
}
</script>
<style scoped>
  .body-content{
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 15px;
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size:32px;
    margin: 10px 0;
  }
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 24px;
    padding: 20px;
    width: 50%;
  }
  .el-main.about-text {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .about-info{
    width: 100%;
    text-align: left;
  }
  .about-tital{
    text-align: left;
  }
</style>
<template>
    <div>
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
              <!-- <input type="text" v-model="value1">
              <input type="text" v-model="value2">
              <input type="text" v-model="value3">
              <input type="text" :value="value4"> -->
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
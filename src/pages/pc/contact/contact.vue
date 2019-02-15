<template>
    <div class="" style="padding:20px 0">
        <el-container >
            <el-main>
              <img v-bind:src="aboutInfo[0].src" alt="">
            </el-main>
            <el-main>
              <p class="about-info">
                {{aboutInfo[0].info}}
              </p>
            </el-main>
        </el-container>
        <el-container >
            <el-main>
              <p class="about-info">
                {{aboutInfo[1].info}}
              </p>
            </el-main>
            <el-main>
              <img v-bind:src="aboutInfo[1].src" alt="">
            </el-main>
        </el-container>
        <el-container >
            <el-main>
              <img v-bind:src="aboutInfo[2].src" alt="">
            </el-main>
            <el-main>
              <p class="about-info">
                {{aboutInfo[2].info}}
              </p>
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
      ]
    }
  },
  components: {

  },
  computed: {
  
  },
  methods: {
  
  },
  created() {
      console.log(this.$route)
  },
}
</script>
<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 24px;
    padding: 20px;
    width: 50%
  }
  .about-info{
    width: 100%;
  }
</style>
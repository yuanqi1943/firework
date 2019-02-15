<template>
    <div class="seciton-products" style="padding:20px 0">
      <el-row class="tac">
        <el-col :span="12">
          <h5>自定义颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
      console.log(this.$route)
  },
}
</script>
<style scoped>
  .seciton-products{
    min-height:calc(100vh - 276px);
  }
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
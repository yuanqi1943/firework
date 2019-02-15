<template>
    <div class="footer">
        <el-container>
            <el-header style="text-align:center">
                <span class="footer-menu-list" @click="moveTo(menuList.index)" :class="{'active': value===0}">首页</span>
                <span class="footer-menu-list" @click="moveTo(menuList.about)" :class="{'active': value===1}">关于我们</span>
                <span class="footer-menu-list" @click="moveTo(menuList.products)" :class="{'active': value===2}">产品中心</span>
                <span class="footer-menu-list" @click="moveTo(menuList.news)" :class="{'active': value===3}">新闻资讯</span>
                <span class="footer-menu-list" @click="moveTo(menuList.contact)" :class="{'active': value===4}">联系我们</span>
            </el-header>
            <el-container>
                <el-main>
                    <div>联系方式:123456789</div>
                  
                </el-main>
                <el-main>
                    <img :src="qrcode" alt="" class="qr-code">
                </el-main>
            </el-container>
            <el-footer style="text-align:center">
                copyright @2019
            </el-footer>    
        </el-container>
    </div>
</el-container>
    </div>
</template>

<script>
import qrcode from './img/logo.png'
export default {
  name: 'Footer',
  data () {
    return {
        menuList:{
            index:'pc.index',
            about:'pc.about',
            products:'pc.products',
            news:'pc.news',
            contact:'pc.contact',
        },
        qrcode:qrcode
    }
  },
  components: {

  },
  computed: {
  
  },
  methods: {
    moveTo(address){
      console.log(this.$router)
      console.log(this.$route)
      this.$router.push({name:address, params:{a:1}})
    }
  }
}
</script>
<style scoped>
    .footer{
        background-color: #5d5353;
        color: #fff;
    }
    .qr-code{
        width: 50px;
        height: 50px;
    }
    .el-container{
        max-width: 1200px;
        padding: 10px 15px;
        margin: 0 auto;
        width: 100%;
    }
    .footer-menu-list{
        margin: 20px;
    }

    .el-header{
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        max-width: 610px;
        padding: 0 20px;
        margin: 0 auto;
        position: relative;
        z-index: 99;
        height: auto !important; 
    }
    .el-container{
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        padding: 0 20px;
        margin: 0 auto;
        position: relative;
        z-index: 99;
    }
    .el-main{
        text-align: center;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .el-footer {
        color: #fff;
        text-align: center;
        line-height: 60px;
        font-size:14px;
        margin: 10px 0;
    }
</style>
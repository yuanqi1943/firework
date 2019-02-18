<template>
    <div class="header">
      <div>
        <div class="right_pic"><img @click="move_to('index', 0)" class="title" :src="imgLogo"  alt=""></div>
        <div class="left_txt">
            <div @click="moveTo(linkAddress.index)" :class="{'active': value===0}">首页</div>
            <div @click="moveTo(linkAddress.about)" :class="{'active': value===1}">关于我们</div>
            <div @click="moveTo(linkAddress.products)" :class="{'active': value===2}">产品中心</div>
            <div @click="moveTo(linkAddress.news)" :class="{'active': value===3}">新闻资讯</div>
            <div @click="moveTo(linkAddress.contact)" :class="{'active': value===4}">联系我们</div>
        </div>
      </div>
    </div>
    <!-- <transition name="fade">
        <Login v-if="is_login" />
    </transition> -->
</template>

<script>
import imgLogo from './img/logo.jpg'
export default {
  name: 'Header',
  data () {
    return {
      linkAddress:{
        index:'pc.index',
        about:'pc.about',
        products:'pc.products',
        news:'pc.news',
        contact:'pc.contact',
      }
    }
  },
  components: {
    // Login: () => import('../Login/Login')
  },
  computed: {
    value () {
      return 0
    },
    // user () {
    //   return this.$store.state.user
    // },
    // is_login () {
    //   return this.$store.state.show_login
    // }
  },
  methods: {
    moveTo(address){
      console.log(this.$router)
      console.log(this.$route)
      this.$router.push({name:address, params:{a:1}})
    }
    // move_to (str = null) {
    //   this.$store.dispatch('change_router', {str: 'web.' + str, that: this})
    // }
  }
}
</script>
<style scoped>
  .header{
   
  }
  .header>div{
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    max-width: 1200px;
    padding: 0 50px;
    margin: 0 auto;
    position: relative;
    z-index: 99;
    height: 0px;
  }
.right_pic{
  width: 120px;
  height: 35px;
  cursor: pointer;
  padding-top: 30px
}
.title{
  width: 114px;
  height: 30px;
  cursor: pointer;
}
.left_txt{
  width:611px;
  height:22px;
  line-height: 22px;
  font-size:14px;
  font-family:PingFangSC-Regular,Helvetica,"Helvetica Neue", "PingFang SC", Arial,"Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft YaHei", "Heiti SC",  sans-serif;
  color:rgba(255,255,255,1);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 500;
  padding-top: 30px
}
.left_txt>.active:after{
  transform: scaleX(1);
  opacity: 1;
}
.left_txt>div{
  height: 29px;
  display: flex;
  position: relative;
}
.left_txt>div:hover:after{
  transform: scaleX(1);
  opacity: 1;
}
.left_txt>div:hover{
  opacity: .9;
}
.left_txt>div:after{
  content: '';
  width: 100%;
  height: 2px;
  display: block;
  background: #fff;
  position: absolute;
  opacity: 0;
  bottom: 0;
  left: 0;
  transition: all ease-in-out .25s;
  transform: scaleX(0);
  box-shadow: 0 0 5px 0 #fff;
}
.down{
  width: 9px;
  height: 7px;
  margin-top: 7.5px;
  margin-left: 5px;
}
.book{
  width: 22px;
  height: 19px;
  margin-top: 1.5px;
  margin-right: 10px;
}
.people {
  width: 22px;
  height: 22px;
  margin-right: 7px;
}
.blod{
  font-weight: bold;
}
</style>
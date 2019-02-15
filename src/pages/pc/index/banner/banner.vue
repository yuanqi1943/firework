<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide :key="index" v-for="(item,index) in imgIndex"  class="banner-img" :style="'background-image:url('+item+')'"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import img1 from './img/img-banner-1.jpg'
import img2 from './img/img-banner-2.jpg'
import img3 from './img/img-banner-3.jpg'

export default {
  name: 'banner',
  data () {
    return {
     swiperOption: {
        loop: true,
        speed: 750,
        centeredSlides: true,
        init: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      },
      imgIndex:[
        img1,
        img2,
        img3
      ]
    }
  },

  methods: {
 
  },
  created () {
    // console.log(this.config)
  },
  computed: {
    swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted() {
    // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
  },
  watch: {
  
  }
}
</script>

<style scoped>
    .item{
        width: 100%;
        overflow: hidden;
        position: relative;
        line-height: 0;
        height: 680px;
        background-size: 1920px auto;
        background-repeat: no-repeat;
        background-position: center;
        background-image:url('./img/logo.png') 
    }
    .swiper-container{
      height: 600px;
    }
    .swiper-pagination{
        position: absolute;
        z-index: 998;
        bottom: 50px;
        left: 50%;
        width: 100px;
        height: 0px;
        margin-left: -50px;
    }
    .banner-img{
      height: 100%;
      background-size: auto;
    }
</style>

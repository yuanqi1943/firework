<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    const app = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)
    const ipad = navigator.userAgent.toLowerCase().match(/ipad/)
    if (!app || ipad) {
      if (this.$route.name === null || this.$route.name.indexOf('pc') === -1) {
        if (this.$route.name) {
          let name = this.$route.name.replace('phone', 'pc')
          this.$router.push({name: name, params: this.$route.params})
        } else {
          this.$router.push({name: 'pc.index'})
        }
      }
    } else {
      if (this.$route.name === null || this.$route.name.indexOf('phone') === -1) {
        if (this.$route.name) {
          let name = this.$route.name.replace('pc', 'phone')
          this.$router.push({name: name, params: this.$route.params})
        } else {
          this.$router.push({name: 'phone.index'})
        }
      }
    }
  },
  // created () {
  //   this.$store.commit('login')
  //   this.$store.dispatch('build_head')
  // }
}
</script>

<style>
#app {
  font-family:PingFangSC-Regular,Helvetica,"Helvetica Neue", "PingFang SC", Arial,"Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft YaHei", "Heiti SC",  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  .fade-enter-active, .fade-leave-active {
    transition: opacity .35s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

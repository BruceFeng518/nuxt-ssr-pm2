<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-25 11:04:14
-->
<template>
  <div class="map-img" :class="cc()">
    <img :src="src" alt="">
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    isMobile: {
      type: Boolean
    },
    from: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // isMobile: false
    }
  },
  mounted() {
    this.$wow();
  },
  computed: {
    img() {
      return (i) => {
        return require(`~/static/image/d2.png`)
      }
    }
  },
  methods: {
    wow () {
      if (process.browser) {
        // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({
          live: false,
          offset: 0
        }).init();
      }
    },
    cc() {
      return ` ${this.isMobile?'ismobile': this.$store.state.size} ${this.from}`
    },
  }
}
</script>
<style lang="stylus">
  .map-img
    margin: 60px 0
    &.study
      img
        width 100%
    img
      width initial
</style>
<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-25 08:01:21
-->
<template>
  <div class="hold" :class="cc(from)"></div>
</template>
<script>
export default {
  props: {
    from: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = this.storage.mb();
  },
  methods: {
    cc(from) {
      return ` ${this.isMobile?'ismobile': this.$store.state.size} ${from}`
    },
  }
}
</script>
<style lang="stylus" scoped>
  .hold
    height 55px
    &.s30
      height 30px
    &.s40
      height 40px
    &.s65
      height 65px
    &.s80
      height 80px
</style>
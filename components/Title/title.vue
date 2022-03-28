<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2020-12-15 10:13:15
-->
<template>
  <div class="title" :style="{'color': c}" :class="cc(from)">
    <div>{{title}}</div>
    <p v-if="sub" class="sub">{{sub}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    sub: {
      type: String,
      default: ''
    },
    from: {
      type: String,
      default: ''
    },
    c: {
      type: String,
      default: 'inherit'
    }
  },
  data () {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = this.storage.mb();
  },
  methods: {
    cc(e) {
      return ` ${this.isMobile?'ismobile':this.$store.state.size} ${e}`
    }
  }
}
</script>
<style lang="stylus" scoped>
  .title
    padding 50px 0
    font-size 50px
    &.ismobile
      font-size 34px
    &.f32
      font-size 32px
    &.f16
      padding 10px 0!important
      font-size 16px
    .sub
      font-size 22px
      color #919191
</style>
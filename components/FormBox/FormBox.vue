<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="form-input" :class="cc(from)">
    <div class="max-width" :style="{'max-width': from == 'f16'&&'95%'}">
      <Hold v-if="from != 'f16'" h="80"/>
      <Title :title="title" c="#fff" :from="from"/>
      <div class="mb"><Form :from="from" :bg="bg" :btn="$t('btns.a')[3]"/></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      from: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: '联系我们'
      },
      bg: {
        type: String,
        default: ''
      },
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
      cc() {
        return ` ${this.isMobile? this.$store.state.path?'ismobile':'ismobile np': this.$store.state.size} ${this.from}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.form-input
  background: url(../../static/image/cbg4.png) no-repeat center center/cover
  &.ismobile
    &.np
      margin-bottom 0
    .form-input
      .mb
        width 90%
        margin auto
        padding-bottom 30px
  &.f16
    padding 15px 0
    .mb
      padding-bottom 15px
  .title
    padding 60px 0
  .mb
    padding-bottom 70px
</style>
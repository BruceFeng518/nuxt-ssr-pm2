<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-26 13:31:14
-->
<template>
  <a-breadcrumb class="mt-font-22">
      <span slot="separator">></span>
      <a-breadcrumb-item><nuxt-link to="/">{{$t('com.index')}}</nuxt-link></a-breadcrumb-item>
      <a-breadcrumb-item v-if="sid"><nuxt-link :to="path">{{sid}}</nuxt-link></a-breadcrumb-item>
      <a-breadcrumb-item v-if="className">{{className}}</a-breadcrumb-item>
      <a-breadcrumb-item >{{name}}</a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
  export default {
    props: {
      sid: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      className: {
        type: String,
        default: ''
      },
      path: {
        type: String,
        default: '/study'
      }
    },
    data() {
      return {
        isMobile: false,
      }
    },
    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.ant-breadcrumb
  padding 30px 0
  text-align left
</style>
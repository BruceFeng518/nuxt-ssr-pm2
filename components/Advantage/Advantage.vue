<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="youchi" :class="cc()">
    <div class="clearfix" :class="{'of': from != 'study'}">
      <div v-if="!isMobile&&from !== 'study'" class="hold"></div>
      <div class="pickUs max-width" :class="{'isMobile':isMobile}">
        <Title v-if="from !== 'study'" :title="name"/>
        <div :class="{'pr': from == 'study'}">
          <Gird2 v-if="from == 'study'" :data="datas" :isMobile="isMobile"/>
          <Gird v-else :data="list" :isMobile="isMobile" :from="from" :gird="gird"/>
        </div>
      </div>
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
      name: {
        type: String,
        default: '明途服务优势'
      },
      gird: {
        type: Number,
        default: 8
      },
      list: {
        type: [Array,Object],
        default: () => []
      },
    },
    data() {
      return {
        isMobile: false,
        datas: [
          {
            name: '加拿大医学博士类大学排名',
            list: ['多伦多大学', '皇后大学', '英属哥伦比亚大学'],
          },
          {
            name: '加拿大医学博士类大学排名',
            list: ['多伦多大学', '皇后大学', '英属哥伦比亚大学'],
          },
          {
            name: '加拿大医学博士类大学排名',
            list: ['多伦多大学', '皇后大学', '英属哥伦比亚大学'],
          },
          {
            name: '加拿大医学博士类大学排名',
            list: ['多伦多大学', '皇后大学', '英属哥伦比亚大学'],
          },
          {
            name: '加拿大医学博士类大学排名',
            list: ['多伦多大学', '皇后大学', '英属哥伦比亚大学'],
          },
        ],
      }
    },
    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size} ${this.from}`
      },
    }
  };
</script>
<style lang="stylus">
.youchi
  margin-top -50px
  padding-bottom 115px
  background: url(../../static/image/cbg2.png) no-repeat center center/cover
  &.ismobile
    padding-bottom 0
    &.study1
      margin-top 0px
    .pickUs
      padding 60px 0 30px
  &.study
    margin-top 0px
    .pickUs
      padding 0 0 63px
      margin-top -50px
  &.study1
    margin-top -350px
    padding-bottom 30px
    .pickUs
      padding-bottom 0
  .pickUs
    padding 97px 0 63px
</style>
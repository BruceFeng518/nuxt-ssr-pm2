<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
 <div>
    <div class="bs round10 sysBColor-fff">
      <div @click="select(index, item.id)" v-for="(item, index) in data" :key="index" class="dfa left-list" :class="{'active': currentIndex == index, 'bb': index != data.length-1}">
        <a-icon type="caret-right" class="mst-margin-r-20 mt-font-30"/>
        <div class="title text-align-l">
          <div class="text-title">{{item.title}}</div>
          <p class="mt-font-14 mst-margin-b-0">{{item.en_title}}</p>
        </div>
      </div>
  </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    props: {
      from: {
        type: String,
        default: ''
      },
      currentIndex: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        isMobile: false,
      }
    },
    computed: {
      ...mapGetters(['locale']),
      _lang(zh,en) {
      return (zh,en) => {
        return this.locale == 'en'?en:zh
      }
    }
    },
    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      select(i) {
        this.$emit('changeTab', i)
      },
      cc() {
        return `${this.isMobile?'ismobile': this.$store.state.size} ${this.from}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.left-list
  padding 20px
  height 100px
  &.active
    background #001E4F
    color #fff
  .img
    height 28px
    width 24px
    margin-right 20px
  .title
    .text-title
      font-size 19px
.news
  a
    &:visited
      color: #00b1fb
</style>
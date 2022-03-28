<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="tab dfj">
    <div @click="changeTab(index)" @mouseover="change(index)" v-for="(item, index) in tags" :key="index" class="mst-padded-t-10 mst-padded-b-10 fx mt-font-16 sysBColor-E7FBFF fx cp" :class="{'sysBColor mt-color-fff': tabIndex == index,'br': index != 4, 'mst-padded-t-20 mst-padded-b-20 mt-font-20': !fixtop, 'mst-padded-l-10 mst-padded-r-10':id == 30,'mt-font-24':!isMobile}">
      {{item.title || item}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: [Number,String],
        default: 0,
      },
      tags: {
        type: Array,
        default: () => []
      },
      from: {
        type: String,
        default: ''
      },
      fixtop: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isMobile: false,
        tabIndex: 0
      }
    },
    computed: {
      img() {
        return (i) =>{
          return require(`~/static/image/icon${i + 17}.png`)
        }
      },
    },
    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      changeTab(i) {
        this.tabIndex = i
        this.$emit('changeTab', i)
      },
      change(e) {
        this.tabIndex = e
        this.$emit('changeTab', e)
      },
      cc() {
        return ` ${this.isMobile?'ismobile':this.$store.state.size}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.tag-box
  margin-bottom 30px
  background #fff
  overflow hidden
  border-radius 22px
  top -17px
  &.s_mall
    .list-box
      .list-name
        padding 0
  &.ismobile
    .list-box
      .list-name
        width 80%
    .btn
      width 70%
      height 45px
      line-height 45px
  .item
    padding 40px
    width 20%
    border-right 1px solid #eee
    border-bottom 1px solid #eee
    float left
    &.border
      border-right none
    .title
      height 86px
      text-align center
      color #1F3B65
      &::after
        content: none;
      .tag-img
        width 55px
        height 55px
        img
          width initial
      .name
        font-size 20px
</style>
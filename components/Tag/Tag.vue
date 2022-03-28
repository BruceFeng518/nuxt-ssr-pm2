<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="tag-box dfj" :class="cc()">
    <div @click="toDetail(item, index)" v-for="(item,index) in tags" :key="index" class="item wow bounceInUp" :data-wow-duration="`${(index+1)/1.7}s`" :class="{'border':index == 4 || index == 9, 'active': (from == 'work' ||  $route.query.id == 52)&&currentIndex == index}">
      <div class="title dfjb">
        <span class="name" v-html="item.name" :style="{'max-width': index == 0 ?'100px': ''}"></span>
        <div class="tag-img">
          <img v-if="from == 'study'" :src="img(index,50)" alt="item.name">
          <img v-else :src="img(index, 17)" alt="item.name">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tags: {
        type: [Array, String],
        default: () => []
      },
      from: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isMobile: false,
        currentIndex: 0
      }
    },
    computed: {
      img() {
        return (i, n) =>{
          return require(`~/static/image/icon${i + n}.png`)
        }
      },
    },
    mounted() {
      this.isMobile = this.storage.mb();
      console.log(this.tags)
    },
    methods: {
      toDetail (item, index) {
        // console.log(this.from);
        if ('work' == this.from || this.$route.query.id == 52) {
          this.currentIndex = index
          this.$emit('select', item.type)
        } else {
          if (this.from == 'study') {
            if (item.id == 28 || item.id == 29 || item.id == 30) {
              this.$router.push({path: `/${item.path}`, query: {id: item.id}})
            } else {
              this.$router.push({path: `/${item.path}`,query: {id: item.id}})
            }
          } else {
            this.$router.push({path: `/${item.path}/${item.id}`})
          }
        }
      },
      cc() {
        return ` ${this.isMobile?'ismobile':this.$store.state.size} ${this.from}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.tag-box
  background #fff
  overflow hidden
  &.s_mall
    .list-box
      .list-name
        padding 0
  &.ismobile
    .item
      padding 10px
      .title
        .tag-img
          width 25px
          height 25px
    .list-box
      .list-name
        width 80%
    .btn
      width 70%
      height 45px
      line-height 45px
  &.immi
    display block;
    .item
      width 20%
  .item
    padding 40px
    flex 1
    border-right 1px solid #eee
    border-bottom 1px solid #eee
    float left
    &.active
      background #001E4F
      .title
        color #fff
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
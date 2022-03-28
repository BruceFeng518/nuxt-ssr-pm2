<!--
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-19 09:14:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-07 09:36:06
-->
<template>
  <a-row class="list mst-margin-auto of" ref="scrollCount" :gutter="16" :class="cc()">
    <a-col v-for="(item,index) in data" :key="item.id" class="text-align wow bounceInUp" :data-wow-duration="`${(index+1)/1.7}s`" :xs="{ span: 12 }" :sm="{ span: gird }" >
      <div class="com bs sysBColor-fff round10" :class="{'study1': from== 'study1'}">
        <div class="img" :class="{dffdja: from== 'apply'}" style="justify-content: flex-end;">
        <img  :src="img(index)" alt="">
      </div>
      <div class="list-title mst-padded-t-20 mst-margin-t-10">{{item.title || item}}</div>
      <p class=" mst-margin-0 mt-color-999" :class="{'mst-padded-15':isMobile}" v-html="item.sub"></p>
      </div>
    </a-col>
  </a-row>
</template>
<script>
export default {
  props: {
    data: {
      type: [Array, String],
      default: ''
    },
    isMobile: {
      type: Boolean
    },
    gird: {
      type: Number,
      default: 8
    },
    from: {
      type: String,
      default: ''
    },
    start: {
      type: Number,
      default: 5
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
        if (this.from == 'c1' || this.from == 'job') {
          i = i<4?i:4
        } else if (this.from == 'study1') {
          i = i<4?i:i == 4?0:i==5?1:i==6?2:i==7?3:4
        }
        return require(`~/static/image/icon${i+this.start}.png`)
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
<style lang="stylus" scoped>
  .list
    &.ismobile
      margin-top 50px!important
      .com
        &.study1
          height 467px
          .list-title
            padding 15px 10px
          p
            padding 0
            text-align left
        height 480px
        .list-title
          padding-top 20px
          font-size 30px
        p
          padding 0
      &.c1
        .com
          height 480px
          .list-title
            font-size 26px
    &.apply
      .com
        height 400px
        .img
          height 100px
        .list-title
          font-size 29px
          padding-top 20px
          padding-bottom 30px
        p
          padding 0
          font-size 20px
    &.c1,&.job
      .com
        height 442px
        .list-title
          font-size 29px
        p
          font-size 20px
          padding 0 10px
    .com
      padding 50px 10px 30px
      height 467px
      margin-bottom 40px
      &:hover
        box-shadow 0 4px 10px 10px rgba(68, 93, 127, 0.1)
        p
          color #1088e9
      &.study1
        .list-title
          padding 50px 0 30px
          font-size 29px
        p
          padding 0 20px
      .img
        width 85px
        height 80px
        margin auto
        img
          width initial
      .list-title
        padding-bottom 35px
        font-size 46px
        line-height normal
      p
        line-height 27px
        padding 0 60px
        font-size 22px
        text-align center
</style>
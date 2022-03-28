<!--
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-19 09:14:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 23:01:53
-->
<template>
  <a-row class="gird dfj of" :class="cc()">
    <a-col v-for="(item, index) in data" :key="index" :xs="{ span: 8 }" :sm="{ span: 4}" class="right">
      <div class="gird-img" :class="{'wow bounceInUp':from!='study'}" :data-wow-duration="`${(index+1)/1.7}s`">
        <img class="img" :src="img(index)" alt="">
      </div>
      <div class="mt-font-20" :class="{'mst-margin-t-15':isMobile}">{{item}}</div>
    </a-col>
  </a-row>
</template>
<script>
export default {
  props: {
    data: {
      type: [Array, String],
      default: () => []
    },
    size: {
      type: Number,
      default: 0
    },
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
    this.$wow();
    this.isMobile = this.storage.mb();
  },
  computed: {
    img() {
      return (i) => {
        return require(`~/static/image/icon${(i<5?i:5) + this.size}.png`)
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
      return ` ${this.isMobile?'ismobile': (this.$store.state.size + ' s')} ${this.from}`
    },
  }
}
</script>
<style lang="stylus" scoped>
  .gird
    padding 90px 0 60px
    &.ismobile
      flex-wrap wrap
      justify-content start
      .right
        margin-bottom 30px
      .gird-img
        width 227px
        margin auto
        img
          width 80px
    .right
      text-align center
    .gird-img
      width 160px
      height 125px
      margin 0 auto 40px
    &.study, &.immis
      .gird-img
        width initial
        height initial
        img 
          initial
    &.s
      .ant-col-sm-4
        width 15%
  .gird-img
    transition: all 0.5s;
    overflow hidden
    &:hover
      img
        transform scale(1.1)
    img
      transform scale(1)
      transition: all 0.5s;
      width initial
      margin 0 auto
</style>
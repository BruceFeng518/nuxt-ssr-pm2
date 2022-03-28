<!--
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-19 09:14:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 23:04:51
-->
<template>
  <a-row class="list bs mst-margin-auto round10" :class="cc()">
    <a-col v-for="(item,index) in data" :key="index" class="text-align-l sysBColor-fff wow bounceInUp " :class="{'dfjb':!isMobile}" :data-wow-duration="`${(index+1)/1.7}s`" :xs="{ span: 12 }" :sm="{ span: 6 }" >
      <div class="com">
        <div class="img">
        <img :src="img(index)" alt="">
      </div>
      <div class="list-title mt-font-20 dfjb"><span style="flex:2">{{index == data.length-1 ? year : ''}}{{$store.state.locale=='en'?item.custom[1]:item.custom[0]}}</span> <span v-if="year" class="sysgreen fx text-align">{{year}}</span> </div>
      <a-divider v-if="!isMobile"/>
      <ul class="box-h">
        <template v-for="(d,index) in item.children">
        <li v-if="index<3" :key="`sort_${index}`" class="dfjb mt-font-18"><span>{{d.title}}</span> <span class="mst-margin-r-10">{{index +1}}</span></li>
        </template>
      </ul>
      <div class="text-align"><Btn @click.native="toNext" :name="$t('apply.universi.sort')[1]" w="70%" h="40px" bg="#CDF9FB" type="gird2"/></div>
      <!-- <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()"><Btn :name="$t('apply.universi.sort')[1]" w="70%" h="40px" bg="#CDF9FB" type="gird2"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item v-for="(d,index) in item.children" :key="index">
            <div class="dfjb mt-font-18"><span>{{d.title}}</span> <span class="mst-margin-r-10">{{index +1}}</span></div>
          </a-menu-item>
        </a-menu>
      </a-dropdown> -->
      </div>
      <a-divider v-if="index != data.length-1 &&!isMobile" type="vertical" class="mst-margin-0"/>
    </a-col>
  </a-row>
</template>
<script>
import {timeFamat} from '~/assets/js/common'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    from: {
      type: String,
      default: ''
    },
    sort: {
      type: Number,
      default: ''
    }
  },
  data() {
    return {
      isMobile: false,
      year: 0
    }
  },
  mounted() {
    this.$wow();
    this.isMobile = this.storage.mb();
    this.year = timeFamat('y')-2
  },
  computed: {
    img() {
      return (i) => {
        return require(`~/static/image/icon${i + this.sort}.png`)
      }
    }
  },
  methods: {
    toNext() {
      this.$router.push({path: '/article/29'})
    },
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
        height 467px
        .list-title
          padding-top 15px
          padding-bottom 15px
          font-size 26px
        p
          padding 0
    &.s_big
      .ant-col-sm-6
        width 19.99%
    .com
      padding 20px
      height 456px
      .ant-divider-horizontal
        margin 15px 0
      .box-h
        min-height 120px
      &:hover
        p
          color #1088e9
      .img
        margin auto
        img
          width initial
      .list-title
        padding-top 20px
        height 78px
      li
        display flex
        margin-top 0
        padding 8px 0
        width 100%
      p
        line-height 27px
        padding 0 60px
        font-size 22px
        text-align left
    .ant-divider-vertical
      height 365px
      margin-top 70px
</style>
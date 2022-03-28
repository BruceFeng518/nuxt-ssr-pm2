<!--
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-19 09:14:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-18 01:08:11
-->
<template>
  <div class="scan-box text-align" :class="cc()">
    <div class="dfj mst-margin-b-30">
      <div v-if="title" class="mt-font-22">{{title}}</div>
      <img v-else class="f-logo" src="../../static/image/f_logo.png" alt="">
    </div>
    <div class="dfj">
      <div class="mst-padded-r-15">
        <img @click="downloadCodeImg($store.state.main_url + info.image[2])" class="gzh" :src="$store.state.main_url + info.image[2]" alt="">
        <div class="chat mt-font-12">{{$t('footer.txt')[0]}}</div>
      </div>
      <div class="mst-padded-l-15">
        <img @click="downloadCodeImg($store.state.main_url + info.image[3])" class="gzh" :src="$store.state.main_url + info.image[3]" alt="">
        <div class="chat g mt-font-12">{{$t('footer.txt')[1]}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    isMobile: {
      type: Boolean
    },
    from: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
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
    ...mapGetters(['info'])
  },
  methods: {
    downloadCodeImg(url){
        var a = document.createElement('a')
       a.download = 'scan-code'
       // 设置图片地址
       a.href = url;
       a.click();
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
<style lang="stylus">
  .scan-box
    .f-logo
      max-width 116px
    .gzh
      max-width 126px
      margin auto
    .chat
      padding-left 20px
      margin-top 25px
      background url(../../static/image/icon41.png)no-repeat center left
      background-size 15px
      &.g
        background url(../../static/image/icon42.png)no-repeat center left
</style>
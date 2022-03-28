<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="banner" :class="cc(from)">
    <Banner v-if="list" @afterChange="afterChange" :data="list" :url="url" :h="h"/>
    <div v-if="isMobile&&from == 'index' || isMobile&&from == 'study' || isMobile&&from == 'immigrant'" class="pa cbg cover">
    </div>
    <div v-else class="pa cbg ">
      <div class="img">
        <img class="" :src="img(pic)" alt="">
      </div>
    </div>
    <div class="pa text">
      <div class="title wow bounceInLeft" data-wow-duration="2s">{{title}}</div>
      <div class="sub wow bounceInLeft" data-wow-duration="2.5s" v-html="sub"></div>
      <div v-if="from == 'study' && !isMobile || from == 'index' || from == 'immigrant'&& !isMobile" class="btn">
        <Btn @click.native="toNext" w="178px" :h="`${isMobile?'35px':'58px'}`" :name="$t('btns.a')[0]" bg="#15E2EA" type="banner"/>
        </div>
    </div>
  </div>
</template>
<script>
  import api from "~/assets/js/api"
  export default {
    props: {
      from: {
        type: String,
        default: ''
      },
      h: {
        type: String,
        default: '500px'
      },
      url: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: '移民直通车'
      },
      sub: {
        type: String,
        default: '移民直通车'
      },
      pic: {
        type: String,
        default: 'cbg'
      },
      pid: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        isMobile: false,
        current: 0,
        list: []
      }
    },
    computed: {
      img() {
        return (pic) =>{
          return require(`~/static/image/${pic}.png`)
        }
      }
    },
    mounted() {
      // console.log(this.pid);
      this.isMobile = this.storage.mb();
      if(this.from == 'index') {
        // this.fetchAdList()
      } else {
        this.list = [{image: require(`~/static/image/b330-${this.pid}.jpg`)}]
      }
    },
    methods: {
      async fetchAdList() {
        let res = await api.banner({pid: this.pid});
        // console.log(res);
        if (res) {
          // this.loading = false
          let pc = []
          let m = []
          res.forEach(item =>{
            if (item.type == 1) {
              m.push(item)
            } else {
              pc.push(item)
            }
          })
          this.list = this.isMobile?m:pc
        }
      },
      toNext() {
        if(this.from == 'index' || this.from == 'study') {
          this.$router.push({path: '/assessment/study'});
        } else {
          this.$router.push({path: '/assessment'});
        }
      },
      afterChange(e) {
        this.current = e
      },
      cc(from) {
        return ` ${this.isMobile?'ismobile': this.$store.state.size} ${from}`
      },
    },
    watch: {
      pid() {
        this.list = [{image: require(`~/static/image/b330-${this.pid}.jpg`)}]
      }
    }
  };
</script>
<style lang="stylus">
.banner
  position: relative
  overflow hidden
  &.ismobile
    .cbg
      right 0
      &.cover
        background rgba(0,0,0,0.7)
      .img
        width 50%
    .text
      top 50%
      transform translateY(-50%)
      left 2%
      .title
        font-size 26px
      .sub
        // width 80%
        font-size 16px
      .btn
        margin-top 20px
  &.s_mall
    .banner
      .cbg
        .img
          width 800px
  .cbg
    top: 0
    left 0
    bottom 0
    .img
      width 1062px
      img
        width 100%
  .text
    top 120px
    left 12%
    z-index 5
    color #fff
    text-align left
    line-height normal
    .title
      font-size 33px
      padding-bottom 10px
    .sub
      font-size 27px
      padding-bottom 10px
    .btn
      margin-top 100px
</style>
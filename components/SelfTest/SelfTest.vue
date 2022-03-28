<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="form-box" :class="cc(from)">
    <Title v-if="from != 'work'" :title="title"/>
    <a-row class="map m100" :class="{'dfj': !isMobile}">
      <a-col :xs="{ span: 24 }" :sm="{ span: 12}" class="left text-align-l">
        <div class="dfj sysBColor-fff round22 bs  wow bounceInLeft" data-wow-duration="2s" :class="{'mst-margin-r-10': !isMobile, 'mst-margin-b-20': isMobile}">
          <div class="left-img pr fx"><img class="img-init" src="~/static/image/icon13.png" alt=""><div class="pa text" v-html="left"></div></div>
          <div class="fx dffdja">
            <div class="count"><img :src="require(`~/static/image/icon${from == 'work'?201:15}.png`)" alt=""></div>
            <div class="text-align">
              <Btn @click.native="toNext(1)" :name="btn" :w="`${isMobile?'140px':'186px'}`" :h="`${isMobile?'40px':'68px'}`"/>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" :sm="{ span: 12}" class="left text-align-l">
        <div class="dfj sysBColor-fff round22 bs  wow bounceInRight" data-wow-duration="2s" :class="{'mst-margin-l-10': !isMobile}">
          <div class="left-img fx pr"><img class="img-init" src="~/static/image/icon14.png" alt=""><div class="pa text" v-html="right"></div></div>
          <div class="fx dffdja">
            <div class="count"><img :src="require(`~/static/image/icon${from == 'work'?202:16}.png`)" alt=""></div>
            <div class="text-align">
              <Btn @click.native="toNext(2)" :name="btn" :w="`${isMobile?'140px':'186px'}`" :h="`${isMobile?'40px':'68px'}`"/>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    props: {
      from: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      btn: {
        type: String,
        default: '开始算分'
      },
      left: {
        type: String,
        default: 'BCPNP省<br>提名自测'
      },
      right: {
        type: String,
        default: 'EE移民快速<br>通道自测'
      },
    },
    data() {
      return {
        isMobile: false
      }
    },
    computed: {
      img() {
        return require('~/static/image/icon16.png')
      }
    },
    mounted () {
      this.isMobile = this.storage.mb();
    },
    methods: {
      toNext(n) {
        let p = n == 1 ? this.from == 'work' ? '/download' : '/bcpnp' :this.from == 'work' ? '/download' : '/ee'
        this.$router.push({path: p, query:{f:this.from}});
      },
      cc() {
        return ` ${this.isMobile?'ismobile':this.$store.state.size} ${this.from}`
      },
    }
  };
</script>
<style lang="stylus">
.form-box
  margin-top 40px
  margin-bottom 60px
  padding-bottom 130px
  &.work
    margin-bottom 0
  &.ismobile
    padding-bottom 40px
    .title
      margin-bottom 20px
    .left-img
      .text
        transform translate(-60%,-50%)
  .title
    margin-bottom 80px
  .left
    .bs
      &:hover
        box-shadow 0 4px 10px 10px rgba(68, 93, 127, 0.1)
  .left-img
    width 393px
    padding 18px
    .text
      top 50%
      left 50%
      font-size 40px
      word-break: keep-all
      transform translate(-75%,-50%)
  .count
    width 62px
    height 80px
    margin 0 auto 37px
</style>
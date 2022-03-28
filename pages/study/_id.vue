<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-11 13:04:04
-->
<template>
  <div class="detail">
    <div class="container max-width">
      <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">移民通道</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">联邦快速移民通道</a></a-breadcrumb-item>
    </a-breadcrumb>
     <a-row :gutter="20">
      <a-col class="gutter-row left" :span="6">
        <Left />
      </a-col>
      <a-col class="gutter-row right" :span="18">
        <div class="bs round10">
          <img src="~/static/image/d1.png" alt="">
          <div class="title-box dfj">
            <div>
              <div class="mt-font-35">{{datas.title}}</div>
              <p class="mt-font-20">{{datas.en_title}}</p>
            </div>
          </div>
          <div class="main clearfix">
            <div class="title text-align-l">项目简介</div>
            <p class="mst-padded-r-20 mst-padded-b-20 text-align-l mt-color-999 mt-font-22">{{datas.sub}}</p>
            <div class="bt">
            <a-col class="deal br" :span="16">
              <div v-for="(item, index) in 4" :key="index" class="deal-item">
                <div><a-icon type="clock-circle" class="mt-font-24 mst-margin-r-10"/><span class="mt-font-22">办理周期</span></div>
                <div class="mt-font-35 sysgreen">永久居民</div>
              </div>
            </a-col>
            <a-col class="deal" :span="6" :offset="1">
              <div class="">
                <div class="mt-font-24 text-align-l mst-padded-b-20">适合人群</div>
                <div class="mt-font-22 mt-color-999 text-align-l">加拿大永久居民或公民的配偶，同居伴侣，事实伴侣，和不满22岁的未婚子女。</div>
              </div>
            </a-col>
            </div>
          </div>
          <a-affix :offsetTop="!isMobile?50:45" @change="change">
          <Tab @changeTab="changeTab" :tags="tags" :fixtop="fixtop"/>
          </a-affix>
          <div class="content sysBColor-fff">
            <div class="com bb" id="tab0">
              <div class="list-title mt-font-35">项目优势</div>
              <div class="text" v-html="datas.advantage"></div>
            </div>
            <div class="com bb" id="tab1">
              <div class="list-title mt-font-35">申请条件</div>
              <div class="text" v-html="datas.content"></div>
            </div>
            <div class="com bb" id="tab2">
              <div class="list-title mt-font-35">移民流程</div>
              <div class="text" v-html="datas.process"></div>
            </div>
            <div class="com" id="tab3">
              <div class="list-title mt-font-35">免费评估</div>
              <div class="text">表单</div>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
  </div>
</template>
<script>
import api from "~/assets/js/api";
export default {
  head() {
    return {
      title: "联邦快速移民通道"
    };
  },
  data() {
    return {
      currentIndex: 0,
      tabIndex: 0,
      offsetTop: 50,
      fixtop: false,
      tags: ['申请条件', '申请材料', '办理流程', '免费咨询'],
      datas: {}
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      let res = await api.article.info({id: 1});
      if (res) {
        this.datas = res
      }
    },
    select(i) {
      this.currentIndex = i
    },
    changeTab(i) {
      this.tabIndex = i
      let el = '#tab'+ i
      console.log(el)
      this.$el.querySelector(el).scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block:    "start"  // 上边框与视窗顶部平齐。默认值
      })
    },
    change(e) {
      this.fixtop = e
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail
    background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2))
    .container
      .breadcrumb
        padding 30px 0
        font-size 17px
        text-align left
        color #001e4f
        a
          color #001e4f
      .right
        .title-box
          height 170px
          background #E7FBFF
        .main
          margin-left 40px
          .title
            padding 45px 40px 20px 0
            font-size 36px
          .deal
            padding 50px
            .deal-item
              width 50%
              float left
              padding 25px 0
        .content
          padding 20px 0
          .com
            padding 30px 50px
            .list-title
              padding-bottom 30px
              text-align left
</style>
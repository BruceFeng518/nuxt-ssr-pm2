<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-11 13:04:04
-->
<template>
  <div class="detail">
    <div class="container max-width">
      <Breadcrumb path="/immigration" :sid="$t('immigration.banner')[0]" :name="$store.state.locale=='en'?datas.en_title:datas.title"/>
     <a-row :gutter="20" class=" mst-margin-b-50">
      <a-col class="gutter-row left" :span="6">
        <a-affix :offset-top="top">
        <Left v-if="list.length>0" :data="list" @changeTab="select" from="immigration"/>
         <div class="bs round10 sysBColor-fff mst-padded-t-20 mst-padded-b-20 mst-margin-t-30">
        <Scan :title="$t('contact.title')"/>
      </div>
        </a-affix>
      </a-col>
      <a-col class="gutter-row right" :span="18">
        <div class="bs round10">
          <!-- <Banner :data="datas.image" url="url"/> -->
          <div vif class="clearfix">
            <a-carousel autoplay effect="fade">
            <div v-for="(item, index) in datas.image" :key="index">
              <img v-lazy="$store.state.main_url + item" alt="" style="height: 492px;">
            </div>
          </a-carousel>
          </div>
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
              <div v-for="(item, index) in cycle" :key="index" class="deal-item">
                <div><a-icon :type="item.icon" class="mt-font-22 mst-margin-r-10"/><span class="mt-font-24">{{item.title}}</span></div>
                <div v-if="datas&&datas.cycle.length>0" class="mt-font-30 sysgreen">{{datas.cycle[index]}}</div>
              </div>
            </a-col>
            <a-col class="deal" :span="6" :offset="1">
              <div class="">
                <div class="mt-font-24 text-align-l mst-padded-b-20">适合人群</div>
                <div class="mt-font-22 mt-color-999 text-align-l">{{ datas.suitable || '加拿大永久居民或公民的配偶，同居伴侣，事实伴侣，和不满22岁的未婚子女。'}}</div>
              </div>
            </a-col>
            </div>
          </div>
          <a-affix :offsetTop="offsetTop" @change="change">
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
              <div class="list-title mt-font-35">免费咨询</div>
            </div>
          </div>
            <div class="sysBColor-fff">
              <form-box from="immigration" title="获取移民规划方案"/>
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
  data() {
    return {
      tabIndex: 0,
      top: 60,
      offsetTop: 50,
      fixtop: false,
      cycle: [
        {
          icon: 'clock-circle',
          title: '办理周期'
        },
        {
          icon: 'idcard',
          title: '身份类型'
        },
        {
          icon: 'dollar',
          title: '投资金额'
        },
        {
          icon: 'home',
          title: '居住要求'
        },
      ],
      tags: ['项目优势', '申请条件', '移民流程', '免费咨询'],
      id: 0,
      list: [],
      datas: {
        cycle: []
      },
      imgs: []
    }
  },
  mounted() {
    let p = this.$route.path.split('/')
    this.id = p[p.length-1]
    this.fetchList(this.id)
    // this.fetchData()
  },
  methods: {
    async fetchList(pid) {
      let res = await api.article.list({pid});
      if (res.length>0) {
        res.forEach(element => {
          element.image = element.image.split(',')
          element.cycle = element.cycle.split(',')
        });
        this.list = res
        this.datas = res[0]
        console.log(res);
      }
    },
    async fetchData() {
      let res = await api.article.info({id: 1});
      if (res) {
        this.datas = res
      }
    },
    select(i) {
      this.datas = this.list[i]
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
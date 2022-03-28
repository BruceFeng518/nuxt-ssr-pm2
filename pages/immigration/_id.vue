<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-11 13:04:04
-->
<template>
  <div class="detail" :class="cc()">
    <div class="container max-width">
      <div v-if="!isMobile"><Breadcrumb path="/immigration" sid="移民通道" :className="datas.class_name" :name="datas.title"/></div>
     <a-row :gutter="20" class=" mst-margin-b-50">
      <a-col class="gutter-row left" :xs="{ span: 0 }" :md="{ span: 6}">
        <a-affix :offset-top="top">
        <Left v-if="list.length>0" :data="list" @changeTab="select" from="immigration"/>
         <div class="bs round10 sysBColor-fff mst-padded-t-20 mst-padded-b-20 mst-margin-t-30">
        <Scan :title="$t('contact.title')"/>
      </div>
        </a-affix>
      </a-col>
      <a-col class="gutter-row right" :xs="{ span: 24 }" :md="{ span: 18}">
        <div class="bs round10">
          <!-- <Banner :data="datas.image" url="url"/> -->
          <div v-if="datas.image.length>0" class="clearfix">
            <a-carousel autoplay effect="fade">
            <div v-for="(item, index) in datas.image" :key="index">
              <img :src="$store.state.main_url + item" alt="" :style="{'max-height': isMobile?'200px':'492px'}">
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
                <div v-if="datas&&datas.cycle.length>0" class="mt-font-26 sysgreen" :class="{'mt-font-30':!isMobile}">{{datas.cycle[index]}}</div>
              </div>
            </a-col>
            <a-col class="deal" :span="isMobile?8:6" :offset="isMobile?0:1">
              <div class="">
                <div class="mt-font-24 text-align-l mst-padded-b-20">适合人群</div>
                <div class="mt-font-22 mt-color-999 text-align-l">{{ datas.suitable || '加拿大永久居民或公民的配偶，同居伴侣，事实伴侣，和不满22岁的未婚子女。'}}</div>
              </div>
            </a-col>
            </div>
          </div>
          <a-affix :offsetTop="!isMobile?50:45" @change="change">
          <Tab @changeTab="changeTab" :tags="tags" :fixtop="fixtop"/>
          </a-affix>
          <div class="content sysBColor-fff text-align-l">
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
 <div @click="show=true" v-if="isMobile&&list.length>0" class="bottomBtnMore sysBColor mt-color-fff">更多项目</div>
    <div @click="show=false" v-if="show" class="bottom-more dffdja" style="justify-content: flex-end;">
      <div class="higt round10">
      <Left1 :data="list" @changeTab="select" :currentIndex="currentIndex" from="immigration" />
      </div>
    </div>
    <Loading v-if="loading"/>
  </div>
</template>
<script>
import api from "~/assets/js/api";

export default {
  head() {
    return {
      title: "移民通道详情"
    };
  },
  data() {
    return {
      tabIndex: 0,
      top: 60,
      offsetTop: 50,
      fixtop: false,
      show: false,
      loading: false,
      isMobile: false,
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
        cycle: [],
        image: []
      },
      selectIndex: 0,
      imgs: []
    }
  },
  mounted() {
    this.isMobile = this.storage.mb()
    if (this.isMobile) {
      this.selectIndex = this.$route.query.sid || 0
    } else {
      this.selectIndex = this.storage.get('immi_index') || 0

    }
    // console.log(this.selectIndex);
    let p = this.$route.path.split('/')
    this.id = p[p.length-1]
    this.fetchList(this.id)
    // this.fetchData()
  },
  methods: {
    async fetchList(pid) {
      this.loading = true
      let res = await api.article.list({pid});
      this.loading = false
      //  console.log(res);
      if (res.length>0) {
        res.forEach((element,index) => {
          element.image = element.image.split(',')
          element.cycle = element.cycle.split(',')
          if (this.isMobile&&element.id == this.selectIndex || this.isMobile&&this.selectIndex == 0&&index==0) {
             this.datas = element
             this.currentIndex  = index
          }
        });
        this.list = res
         if (!this.isMobile) {
            this.datas = res[this.selectIndex]
          }
          // console.log(this.datas);
      }
    },
    select(i) {
      this.datas = this.list[i]
      // if(this.isMobile){
        // this.currentIndex = i
      this.$router.push({ path: `/immigration/${this.id}`, query:{sid:this.datas.id}});
      // } else {
      
      //   this.storage.set('immi_index',i)
      // }
        let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100;  //可以自己设置
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10)

    },
    changeTab(i) {
      this.tabIndex = i
      let el = '#tab'+ i
      // console.log(el)
      this.$el.querySelector(el).scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block:    "start"  // 上边框与视窗顶部平齐。默认值
      })
    },
    change(e) {
      this.fixtop = e
    },
    cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size}`
      },
  },
  beforeDestroy() {
    this.storage.remove('immi_index')
  }
}
</script>
<style lang="stylus" scoped>
  .detail
    user-select none
    background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2))
    &.ismobile
      .container
        .right
          .main
            margin-left 15px
            .deal
              padding 20px
    .container
      user-select none
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
            span
              white-space initial!important
    .toTop
      &.ant-back-top
        position: initial
        height initial
        width initial
</style>
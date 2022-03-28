<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-11 13:04:04
-->
<template>
  <div class="detail" :class="cc()">
    <div class="container max-width">
      <div v-if="!isMobile">
        <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item><router-link to="/">首页</router-link></a-breadcrumb-item>
      <a-breadcrumb-item><router-link to="/school">学院列表</router-link></a-breadcrumb-item>
      <a-breadcrumb-item>{{datas.title}}</a-breadcrumb-item>
    </a-breadcrumb>
      </div>
     <a-row :gutter="20">
      <a-col class="gutter-row right" :xs="{ span: 24 }" :md="{ span: 18}">
        <div class="bs round10">
           <div v-if="datas.image.length>0" class="clearfix">
            <!-- <a-carousel v-if="datas.image.length>0" autoplay effect="fade"> -->
            <div v-for="(item, index) in datas.image" :key="index">
              <img :src="$store.state.main_url + item" alt="" style="max-height: 492px;">
            </div>
          <!-- </a-carousel> -->
          </div>
          <div class="title-box dfj">
            <div>
              <div class="mt-font-35">{{datas.title}}</div>
              <p class="mt-font-20">{{datas.en_title}}</p>
            </div>
          </div>
          <div class="main clearfix sysBColor-fff">
            <div class="bt dfj">
            <a-col class="deal" :span="6" :offset="1">
              <div class="img mst-margin-r-20">
                <img :src="$store.state.main_url+ datas.logo" alt="">
              </div>
            </a-col>
            <a-col class="deal bl" :span="17">
              <div v-for="(item, index) in datas.sku" :key="index" class="deal-item text-align-l">
                <div class="mst-margin-b-15">
                  <span class="mt-font-22">{{sku[index]}}</span>
                  </div>
                <div class="mt-font-26 sysgreen" v-html="item"></div>
              </div>
            </a-col>
            </div>
          </div>
          <a-affix :offsetTop="!isMobile?50:45" @change="change">
          <Tab :tags="tags" @changeTab="changeTab" :fixtop="fixtop"/>
          </a-affix>
          <div class="content sysBColor-fff text-align-l">
            <div class="com bb" id="tab0">
              <div class="list-title mt-font-35">学校概况</div>
              <div class="text" v-html="datas.content"></div>
            </div>
            <div class="com bb" id="tab1">
              <div class="list-title mt-font-35">学校特色</div>
              <div class="text" v-html="datas.special"></div>
            </div>
            <div class="com bb" id="tab2">
              <div class="list-title mt-font-35">专业设置</div>
              <div class="text" v-html="datas.major"></div>
            </div>
            <div class="com" id="tab3">
              <div class="list-title mt-font-35">入学条件</div>
              <div class="text" v-html="datas.condition"></div>
            </div>
            <div class="com feiyong" id="tab4">
              <div class="list-title mt-font-35">费用信息</div>
              <div class="text b dfj round10">
                <div v-for="(item, index) in datas.fee" :key="index" class="feiyong-list" :class="{'br': index != 4}">
                  <div class="feiyong-list-title sysBColor-E7FBFF dfj mt-font-20" :class="{'mst-padded-l-10 mst-padded-r-10': isMobile}">{{fee[index]}}</div>
                  <p class="feiyong-list-text dfj mt-font-20" :class="{'mst-padded-l-10 mst-padded-r-10': isMobile}" v-html="item">
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form-box />
        </div>
      </a-col>
      <a-col class="gutter-row left" :xs="{ span: 0 }" :md="{ span: 6}">
        <a-affix :offset-top="top">
        <Left :data="list" @changeTab="select" from="school"/>
         <div class="bs round10 sysBColor-fff mst-padded-t-20 mst-padded-b-20 mst-margin-t-30">
        <Scan :title="$t('contact.title')"/>
      </div>
        </a-affix>
      </a-col>
    </a-row>
  </div>
  <Hold from="s85"/>
   <div @click="show=true" v-if="isMobile&&list.length>0" class="bottomBtnMore sysBColor mt-color-fff">更多项目</div>
    <div @click="show=false" v-if="show" class="bottom-more dffdja" style="justify-content: flex-end;">
      <div class="higt round10">
      <Left :data="list" @changeTab="select" from="school" />
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
      title: "加拿大院校"
    };
  },
  data() {
    return {
      currentIndex: 0,
      tabIndex: 0,
      offsetTop: 50,
      id: 0,
      top: 60,
      show: false,
      loading: false,
      fixtop: false,
      isMobile: false,
      sku: ['院校性质', '院校类型', '院校城市', '在校学生', '国际学生'],
      tags: ['学校概况', '学校特色', '专业设置', '入学条件', '费用信息'],
      fee: ['申请费', '学费', '医疗保险费', '学生宿舍住宿费', '生活费用'],
      datas: {
        image: []
      },
      list: [],
      listQuery: {
        flag: 'hot',
        title: ''
      },
    }
  },
  mounted() {
    this.isMobile = this.storage.mb()
      let p = this.$route.path.split('/')
      this.id = p[p.length-1]
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      let res = await api.school.info({id: this.id});
      this.loading = false
      if (res) {
        console.log(res);
        res.image = res.image.split(',')
        res.sku = res.sku.split(',')
        res.fee = res.fee.split(',')
        this.datas = res
         this.fetchList()

      }
    },
    async fetchList() {
      let res = await api.school.list(this.listQuery);
      if (res) {
       res.data.forEach(element => {
          element.image = element.image.split(',')
          element.sku = element.sku.split(',')
          element.fee = element.fee.split(',')
        });
        this.list = res.data
      }
    },
    select(i) {
      this.datas = this.list[i]
      this.$router.push({path: `/school/${this.datas.id}`})
        let top = document.documentElement.scrollTop || document.body.scrollTop;
     // 实现滚动效果 
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
      console.log(el)
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
}
</script>
<style lang="stylus" scoped>
  .detail
    user-select none
    background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2))
    &.ismobile
      .container
        .right
          .content
            .com
              padding 15px
      .toTop
        &.ant-back-top
          position: initial
          height initial
          width initial
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
          .title
            padding 45px 40px 20px 0
            font-size 36px
          .deal
            padding 25px 0 50px
            &.bl
              padding-left 40px!important
            .deal-item
              width 33.3%
              float left
              padding-top 25px
        .content
          padding 20px 0
          .com
            padding 30px 50px
            .list-title
              padding-bottom 30px
              text-align left
            &.feiyong
              padding-bottom 100px
              .text
              .feiyong-list
                height 190px
                width 100%
                flex 0 0 1
                .feiyong-list-title
                  height 90px
                .feiyong-list-text
                  height 100px
</style>
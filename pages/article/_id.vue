<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-11 13:04:04
-->
<template>
  <div class="detail" :class="cc()">
    <div class="container max-width">
    <div v-if="!isMobile"><Breadcrumb path="/article" sid="资讯中心" :name="datas.title"/></div>
     <a-row :gutter="20">
      <a-col class="gutter-row right" :xs="{ span: 24 }" :md="{ span: 18}">
        <div class="bs round10">
          <img v-if="datas.image" :src="$store.state.main_url + datas.image" alt="">
          <div class="title-box dfj">
            <div>
              <div class="mt-font-35 mst-margin-b-10">{{datas.title}}</div>
              <!-- <p class="mt-font-20">发布时间: {{datas.createtime}}</p> -->
            </div>
          </div>
          <div class="content sysBColor-fff mst-padded-20 text-align-l">
            <div v-html="datas.content"></div>
          </div>
          <div class="next-page mst-margin-20">
            <div class="dfjb mt-font-20">
              <div class="next text-align-l">
                <div v-if="datas.last" @click="next(datas.last.id)" class="cp" :class="{'mst-margin-b-15':isMobile}">上一篇： <span class="mt-color-999">{{datas.last.title}}</span></div>
                <div v-if="datas.next" @click="next(datas.next.id)"  class="cp">下一篇： <span class="mt-color-999">{{datas.next.title}}</span></div>
              </div>
              <!--<div v-if="!isMobile" class="share dfj"><span>{{$t('article')[6]}}：</span><span class="cp"><img src="~/static/image/icon31.png" alt=""></span></div>-->
            </div>
          </div>
        </div>
      </a-col>
      <a-col  class="gutter-row left" :xs="{ span: 0 }" :md="{ span: 6}">
        <Left :data="hotList" from="news" @changeTab="select"/>
      </a-col>
    </a-row>
  </div>
  <Hold from="s85"/>
  <Loading v-if="loading"/>
  </div>
</template>
<script>
import api from "~/assets/js/api";
export default {
  head() {
    return {
      title: "明途资讯详情"
    };
  },
  data() {
    return {
      currentIndex: 0,
      tabIndex: 0,
      id: 0,
      offsetTop: 50,
      fixtop: false,
      isMobile: false,
      loading: false,
      hotList: [],
      datas: {}
    }
  },
  mounted() {
    this.isMobile = this.storage.mb()
    let id = this.storage.get('article_id')
    if (id) {
      this.id = id
    } else {
      let p = this.$route.path.split('/')
      this.id = p[p.length-1]
    }
    this.fetchInfo(this.id)
  },
  methods: {
    next(id){
      this.$router.push({ path: `/article/${id}`});
    },
    async fetchInfo(id) {
      this.storage.set('article_id', id)
      this.loading = true
      let res = await api.article.info({id});
      // console.log(res);
        this.loading = false
      if (res) {
        this.datas = res
      }
      let top = document.documentElement.scrollTop || document.body.scrollTop;
     // 实现滚动效果 
     const timeTop = setInterval(() => {
       document.body.scrollTop = document.documentElement.scrollTop = top -= 100;  //可以自己设置
       if (top <= 0) {
         clearInterval(timeTop);
       }
     }, 10)
    if(!this.isMobile){
      this.fetchHotList()
    }
    },
    async fetchHotList() {
      let res = await api.article.index({hot: 'hot', title: ''});
      if (res) {
        this.hotList = res.data
      }
    },
    select(e) {
      this.id = this.hotList[e.i].id
      this.$router.push({ path: `/article/${this.id}`});
      // this.storage.set('article_id', this.id)
      // this.fetchInfo(this.id)
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
  beforeDestroy() {
    this.storage.remove('article_id')
  }
}
</script>
<style lang="stylus">
  .content
    img
      width initial
      margin auto
</style>
<style lang="stylus" scoped>
  .detail
    user-select none
    background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2))
    .container
      .right
        .title-box
          height 170px
          background #E7FBFF
      .toTop
        &.ant-back-top
          position: initial
          height initial
          width initial
</style>
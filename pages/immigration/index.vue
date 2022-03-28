<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-11 08:24:27
-->
<template>
  <div class="container" :class="cc()">
    <banner-box :title="$t('immigration.banner')[0]" :pid="pid" :sub="$t('immigration.banner')[1]" pic="cbg5" from="immigrant"/>
    <div class="tag">
    <div class="max-width max-width pr pr-top bs round10"><Tag :tags="immigrationTab" from="immi"/></div>
    <News1 v-if="list.length>0" :cateList="cateList" :times="immigrationTab" :newList="list" :datas="newData" from="immi" @selectTabs="selectTabs" @changeTabs="changeTabs" :title="$t('immigration.news')[0]"/>
    </div>
    <Advantage :list="lists" :name="$t('advantage.title')" from="immi"/>
    <div class="hot">
        <div class="wow bounceInDown" data-wow-duration="2s">
        <Title :title="$t('immigration.state.title')"/>
        </div>
      <Gird3 :data="immis" :size="size" from="immis"/>
      <Title :title="$t('success')"/>
      <div class="max-width ">
      <Case :datas="success" :size="gird" from="index"/>
      </div>
    </div>
    <div class="form">
      <div class="hold"></div>
      <div class="max-width">
       <self-test :title="$t('index.test')[0]"  :left="$t('index.test')[1]"  :right="$t('index.test')[2]"  :btn="$t('index.test')[3]" />
      </div>
      <!-- <div class="form-input">
       <div class="max-width">
          <Title title="联系我们" c="#fff"/>
          <div class="mb"><Form from="index-form"/></div>
       </div>
      </div> -->
       <form-box from="index-form"/>
    </div>
  </div>
</template>

<script>
import api from "~/assets/js/api";
import countTo from "vue-count-to";
import { mapGetters } from "vuex";
export default {
  name: 'index',
  head() {
    return {
      title: "移民通道"
    };
  },
  components:{ countTo },
  data () {
    return {
      pid: 500,
      size: 90,
      gird: 8,
      activeKey: ['0'],
      activeKey1: ['0'],
      tabCurrentIndex: 0,
      isMobile: false,
      loading: true,
      current: 0,
      index: 0,
      cateList: [],
      list: [],
      newData: {},
      success: [],
      id: 0,
      scaleFlag: false,
      items_list: [],
      num1: 0,
      animatedNum1: 1000
    }
  },
  computed: {
    ...mapGetters(['immigrationTab']),
    img() {
      return (i) =>{
        return require(`~/static/image/icon${i + 17}.png`)
      }
    },
    lists() {
      let arr = this.$t('advantage.list').slice(0,3)
     return arr
    },
    immis() {
      let arr = this.$t('immigration.state.list')
      return arr
    }
  },
  mounted() {
    this.$wow();
    this.isMobile = this.storage.mb();
    let success = this.storage.get('success')
    if (success) {
      this.success = success
    } else {
      this.fetchSuccesslist()
    }
    this.init()
  },
  methods: {
    init() {
      this.fetchNewCateList()
    },
    /* 移民资讯分类 */
    async fetchNewCateList() {
      let res = await api.article.category({pid: 3});
      if (res) {
        console.log(res);
        res.cate.unshift({
          name: '最新资讯',
          en_title: 'Latest news',
          id: 0
        })
        this.cateList = res.cate
        this.fetchNewList(0)
      }
    },
    /* 移民资讯列表 */
    async fetchNewList(id) {
      let res = await api.article.immigrate({pid:id});
      if (res) {
        this.list = res
        this.newData = res[0]
      }
    },
     async fetchSuccesslist() {
      let res = await api.article.success({pid:20});
      if (res) {
        this.success = res
        this.storage.set('success', res)
      }
    },
    changeTabs(e) {
      this.id = this.cateList[e].id
      this.fetchNewList(this.id)
    },
    selectTabs(e) {
      this.newData = this.list[e]
    },
    handleClick(e){
      console.log(e);
    },
    cc() {
      return ` ${this.isMobile?'ismobile':this.$store.state.size}`
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
  },
  watch: {
    '$route' (to, from) {
      this.id = 0
      this.init()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    &.ismobile
      .map
        margin-top 50px
        .left
          .sub
            padding-bottom 20px
            max-width initial
      .news
        .gutter-row
          &.left
            .gutter-left-row
              .btn
                width 80%
                margin auto
      .hot
        margin-top 50px
        .map
          .map-img
            width 227px
            margin auto
      .success
        .left
          margin-bottom 40px
      .form
        .form-box
          padding-bottom 40px
          .left-img
            .text
              transform translate(-60%,-50%)
        .form-input
          .mb
            width 90%
            margin auto
            padding-bottom 30px
    &.s_mall
      .banner
        .cbg
          .img
            width 800px
        .text
          .btn
            margin-top 20px
    .hold
      height 60px
    .tag
      background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2)) 
      line-height: normal;
      .pr-top
        top -30px
    .hot
      margin-top 100px
      .title
        margin-bottom 50px
      .map
        padding 90px 0 60px
        .right
          text-align center
        .map-img
          width 160px
          height 125px
          margin 0 auto 40px
      .map-img
        transition: all 0.5s;
        overflow hidden
        &:hover
          img
            transform scale(1.1)
        img
          transform scale(1)
          transition: all 0.5s;
      .m100
        margin-bottom 100px
      .success
        .success-box
          background rgba(255,255,255,0.9)
          &:hover
            box-shadow 0 4px 10px 10px rgba(68, 93, 127, 0.1)
        .tag-img
          display flex
          justify-content center
          flex 0 0 60px
          width 28px
          height 22px
    .form
      margin-top -95px
      background: url(../../static/image/cbg3.png) no-repeat center center/cover
      .hold
        height 160px
      .form-box
        margin-top 40px
        margin-bottom 60px
        padding-bottom 130px
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
      .form-input
        .title
          padding 60px 0
        .mb
          padding-bottom 70px
</style>

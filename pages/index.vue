<template>
  <div class="container" :class="cc()">
    <!-- <div v-if="list.length>0" class="bannerindex">
      <a-carousel autoplay
              arrows
              dotsClass="dotsClass"
              :dots="dots"
              dotPosition="bottom"
              effect="scrollx"
              class="bannerScroll"
              >
      <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 40px;zIndex: 1"
      v-if="!isMobile"
    >
      <a-icon type="left-circle" style="color:#fff"/>
    </div>
    <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 40px" v-if="!isMobile">
      <a-icon type="right-circle" />
    </div>
    <div @click="bannerChange(item.url)" v-for="(item, index) in list"
         :key="index"
         class="banner-img pr cp">
       <img v-lazy="$store.state.main_url + item.image" alt="">
    </div>
  </a-carousel>
    </div> -->
    <Banner v-if="bannerlist" :data="bannerlist" :url="$store.state.main_url"/>
    <div class="tag">
      <a-row v-if="indexQuick.length>0" class="tag-box max-width pr bs">
        <a-col v-for="(item,index) in indexQuick" :key="index" :xs="{ span: 12 }" :md="{ span: 6}">
          <div>
            <div class="title dfj" :style="{background:index==1?'rgba(209,246,241,0.43)':index==2?'rgba(198,228,250,0.43)':index==3?'rgba(23,225,234,0.1)':'rgba(110,203,240,0.21)'}">
              <div class="tag-img"><img :src="img(index)" alt=""></div>
              <span class="name">{{$store.state.locale == 'en' ? item.diyname[1]:item.diyname[0]}}</span>
            </div>
            <ul class="list-box">
              <template v-for="(d, index) in item.children" >
                <li v-if="index<4" @click="toNext(1, index, d, item)" :key="index" class="list-name cp"><a-icon type="caret-right" /> {{ d.diyname ? ($store.state.locale == 'en' ?  d.diyname[1]:d.diyname[0]): ($store.state.locale == 'en' ?  d.nickname:d.name)}}</li>
              </template>
            </ul>
            <div @click="toNext(0, index)" class="btn cp"><a-icon type="caret-down" /> {{$t('btns.a')[1]}}</div>
          </div>
        </a-col>
      </a-row>
      <a-row class="max-width map" :class="{'dfj':!isMobile}">
        <a-col :xs="{ span: 0 }" :sm="{ span: 10}" class="left" :class="{'text-align-l':!isMobile}">
         <div class="l-title">关于明途国际</div>
         <p class="sub mt-color-999 mt-font-22" :class="{'text-align-l':isMobile}">明途国际是一家由多名加拿大移民律师，资深移民顾问组成的一站式留学移民服务公司。业务涵盖加拿大投资移民、出国留学、留学生移民，海外资产配置、技术移民、来华签证等业务。无论您身在中国还是海外，明途全方位专属服务一直在您身边。规划好您的未来！</p>
          <Btn @click.native="toNext(3)" v-if="!isMobile" :name="$t('contact.title')" w="140px" :h="`${isMobile?'35px':'58px'}`" class=""/>
        </a-col>
        <a-col :xs="{ span: 24 }" :sm="{ span: 14}" class="right">
         <div class="r-title fw mt-padded-10"><countTo autoplay
                  :startVal="0"
                  :endVal="1700"
                  :duration="3000"></countTo> + <br v-if="isMobile"> {{$t('index.map')[0]}}</div>
          <div class="dfjb">
            <div>
              <span class="fw num sysgreen">
                <countTo autoplay
                  :startVal="0"
                  :endVal="40"
                  :duration="3000"></countTo>+</span>
              <p class="mt-font-16">{{$t('index.map')[1]}}</p>
            </div>
            <div>
              <span class="fw num sysgreen"><countTo autoplay
                  :startVal="0"
                  :endVal="700"
                  :duration="3000"></countTo>+</span>
              <p class="mt-font-16" v-html="$t('index.map')[2]"></p>
            </div>
            <div>
              <span class="fw num sysgreen"><countTo autoplay
                  :startVal="0"
                  :endVal="6000"
                  :duration="3000"></countTo>+</span>
              <p class="mt-font-16" v-html="$t('index.map')[3]"></p>
            </div>
          </div>
          <Map :src="$store.state.main_url + info.image[4]" />
        </a-col>
      </a-row>
    <News v-if="newList.length>0" :title="$t('article')[0]" :newList="newList" :times="times" from="index" @changeNewTabs="changeNewTabs"/>
    </div>
    <Advantage :name="$t('advantage.title')" :list="$t('advantage.list')"/>
    <div class="recommend" :class="{'ismobile':isMobile}" >
      <div class="max-width mst-padded-20 bs sysBColor-fff clearfix lh round10" :class="{'mst-padded-r-20 mst-padded-l-20':isMobile}">
          <div class="title mt-font-50">{{$t(('school.title'))}}</div>
          <div class="mt-color-999 mt-font-18 mst-padded-t-15 mst-padded-b-30">{{$t(('school.sub'))}}</div>
      <Tabs :datas="schoolcate" type="card" from="school" @changeTabs="changeTabs"/>
       <div v-if="schoolList.length>0">
          <div @click="toNext(2, index, item)" v-for="(item,index) in schoolList" :key="index" class="school">
          <div class="box">
            <div class="img" :class="{'scale': scaleFlag}">
              <img v-lazy="$store.state.main_url + item.logo" alt="">
            </div>
          </div>
        </div>
       </div>
        <div v-else>
          <a-spin v-if="loading" size="large"/>
          <a-empty v-if="!loading"/>
        </div>
      </div>
    </div>
    <div class="hot">
        <div class="title mt-font-50">{{$t('hot.title')}}</div>
      <a-row class="max-width map dfj">
        <a-col :xs="{ span: 12 }" :sm="{ span: 10, offset:1}" class="right">
          <div class="map-img">
            <img src="~/static/image/icon45.png" alt="">
          </div>
        </a-col>
        <a-col :xs="{ span: 12 }" :sm="{ span: 10, offset:1}" class="left text-align-l">
         <div class="l-title">{{$t('hot.list')[0].title}}</div>
         <p class="sub mt-color-999 mt-font-22">{{$t('hot.list')[0].sub}}</p>
          <Btn @click.native="toNext(5, '', '/immigration/45')" :name="$t('btns.a')[2]" :w="`${isMobile?'160px':'184px'}`" :h="`${isMobile?'35px':'58px'}`" class=""/>
        </a-col>
      </a-row>
      <a-row class="max-width map dfj m100">
        <a-col :xs="{ span: 12 }" :sm="{ span: 10,offset:1}" class="left text-align-l">
         <div class="l-title">{{$t('hot.list')[1].title}}</div>
         <p class="sub mt-color-999 mt-font-22">{{$t('hot.list')[1].sub}}</p>
          <Btn @click.native="toNext(5, '', '/immigration/63')" :name="$t('btns.a')[2]" :w="`${isMobile?'160px':'184px'}`" :h="`${isMobile?'35px':'58px'}`" class=""/>
        </a-col>
        <a-col :xs="{ span: 12 }" :sm="{ span: 10,offset:1}" class="right">
          <div class="map-img">
            <img src="~/static/image/icon44.png" alt="">
          </div>
        </a-col>
      </a-row>
      <Title title="留学移民成功案例"/>
      <div class="max-width ">
       <Case :datas="success" :size="size" from="index"/>
      </div>
    </div>
    <div class="form">
      <div class="hold"></div>
      <div class="max-width"><self-test :title="$t('index.test')[0]"  :left="$t('index.test')[1]"  :right="$t('index.test')[2]"  :btn="$t('index.test')[3]" /></div>
      <form-box from="index-form"/>
    </div>
  </div>
</template>

<script>
import dataJson from "~/static/data";
import api from "~/assets/js/api";
import countTo from "vue-count-to";
import { mapGetters } from "vuex";
export default {
  name: 'index',
  components:{countTo},
  head() {
    return {
      title: "明途国际"
    };
  },
  data () {
    return {
      activeKey: ['0'],
      activeKey1: ['0'],
      tabCurrentIndex: 0,
      isMobile: false,
      loading: true,
      bannerlist: [],
      current: 0,
      dots: false,
      newList: [],
      new_pid: 3,
      times: [],
      schoolcate: [],
      schoolList: [],
      schoolId: 0,
      scaleFlag: false,
      items_list: [],
      success: [],
      size: 8,
      listQuery: {
        page: 1,
        pageSize: 12,
        title: '',
        flag: '',
        type: 0
      },
      num1: 0,
      animatedNum1: 1000
    }
  },
  computed: {
    ...mapGetters(['indexQuick','info','main_url']),
    img() {
      return (i) =>{
        return require(`~/static/image/icon${i + 1}.png`)
      }
    }
  },
  beforeMount() {
    this.isMobile = this.storage.mb();
  },
  mounted() {
    this.$wow();
    this.fetchAdList()
    this.fetchSchoolCate()
    this.fetchSuccesslist()
    this.dots = this.isMobile?false : true;
  },
  methods: {
    async fetchAdList() {
      // let res = await api.banner({pid: 0});
      // if (res) {
        // console.log(res);
        // this.loading = false
        
        this.bannerlist = [
          {image: 'http://backend.gobrightway.com/uploads/20210630/5a5463dd4b0b11653ccf49c7bd4770fe.jpg'},
          {image: 'http://backend.gobrightway.com/uploads/20210623/c9806e4205d9a138ba52c8ab51445e4b.jpg'},
          {image: 'http://backend.gobrightway.com/uploads/20210630/5a5463dd4b0b11653ccf49c7bd4770fe.jpg'},
          {image: 'http://backend.gobrightway.com/uploads/20210623/c9806e4205d9a138ba52c8ab51445e4b.jpg'}
        ]
        this.fetchNewsList()
    },
    async fetchNewsList() {
      // let res = await api.article.all({lang: this.$store.state.locale, limit: 5,pid:this.new_pid});
      let res = dataJson.news
      if (res) {
        this.newList = res.data
        this.times = res.times
      }
    },
    changeNewTabs(e) {
      this.newList.map((item,index) =>{
        if (index == e) {
          this.new_pid = item.id
          this.fetchNewsList()
        }
      })
    },
    async fetchSuccesslist() {
      // let res = await api.article.success({pid:20});
      let res = dataJson.success
      if (res) {
        this.success = res
        this.storage.set('success', res)
      }
    },
    async fetchSchoolCate() {
      // let res = await api.school.category({pid: 11});
      let res = dataJson.school
      if (res) {
        let arr = []
        res.map(item =>{
          if (item.id != 14) {
            arr.push(item)
          }
        })
        this.schoolcate = arr
        this.listQuery.type = arr[0].id
        this.fetchSchoolList()
      }
    },
    async fetchSchoolList() {
      this.loading = true
      // let res = await api.school.list(this.listQuery);
      let res = dataJson.schoolList
      if (res) {
        this.loading = false
        this.schoolList = res.data
      }
    },
    changeTabs(e) {
      this.listQuery.type = this.schoolcate[e].id
      this.fetchSchoolList()
    },
    handleClick(e){
      console.log(e);
    },
    change(e){
      this.scaleFlag = true
      setTimeout(() =>{ 
        this.scaleFlag = false
      }, 350)
    },
    change1(e){
      this.activeKey1 = []
      this.activeKey1 = e
    },
     callback(e){
      // this.activeKey = e
    },
    toNext(t = 0, i = 0, item, items={}) {
      if (t == 0) {
        let p = i == 0 ? '/study' : i == 1 ? '/immigration' : i == 2 ? '/visa/1' : '/job'
        this.$router.push({path: p});
      } else if (t == 2) {
        this.$router.push({path: `/school/${item.id}`});
      } else if (t == 3) {
        this.$router.push({path: '/contact'});
      } else if (t == 5) {
        this.$router.push({path: item, query:{t:'移民通道'}});
      } else if (t == 99) {
        this.$router.push({path: '/assessment/study'});
      } else {
        this.$router.push({
          path: '/'+ (item.path == 'immigration' || item.path == 'visa'? item.path + `/${item.id}` : item.path),query:{id:item.id, t: this.$store.state.local == 'en' ? items.en_title : items.name}
        });
      }
    },
    /**点击轮播图 */
    bannerChange(p) {
      if (p&&p!='') {
        this.$router.push({path: p});
      }
    },
    setAnimatedNum(){
      this.num1 = 3567892881
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
}
</script>
<style>
  .ant-carousel .custom-slick-arrow {
    width: 50px;
    height: 50px;
    font-size: 50px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .ant-carousel .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel .custom-slick-arrow:hover {
    opacity: 0.5;
  }
</style>
<style lang="stylus" scoped>
  .container
    &.ismobile
      .bannerindex
        .bannerScroll
          height 200px
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
            font-size 16px
          .btn
            margin-top 20px
      &.s_mall
        .banner
          .cbg
            .img
              width 800px
      .tag
        .tag-box
          .list-box
            .list-name
              width 80%
          .btn
            width 70%
            height 45px
            line-height 45px
      .map
        margin-top 50px
        .left
          .sub
            padding-bottom 20px
            max-width initial
        .right 
          .num
            font-size 38px
      .hot
        margin-top 50px
        .map
          .map-img
            width 227px
            margin auto
      .tag
        .tag-box
          .list-box
            .list-name
              padding 0
    .bannerindex
      overflow hidden
      .bannerScroll
        height 667px
      .cbg
        top: 0
        left 0
        bottom 0
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
    .hold
      height 60px
    .tag
      background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2)) 
      line-height: normal;
      .tag-box
        background #fff
        overflow hidden
        border-radius 22px
        top -17px
        .title
          height 86px
          text-align center
          color #1F3B65
          &::after
            content: "";
            width: 1px;
            position: absolute;
            height: 70px;
            right: 0
            background #fff
          .tag-img
            width 47px
            height 47px
            img
              width initial
          .name
            font-size 30px
            margin-left 20px
        .list-box
          display flex
          flex-wrap wrap
          padding 0 15px
          margin-top 15px
          border-right 1px solid rgba(196,196,196,0.16)
          justify-content space-around
          .list-name
            width 50%
            padding 0 10px
            margin-bottom 20px
            font-size 20px
            text-align left
            color #6F6F6F
            font-weight normal
            &:hover
              color #001E4F
            .anticon
              font-size 10px
        .btn
          display inline-block
          padding 2px 15px
          height 30px
          line-height 30px
          background #E0F4FC
          border-radius 8px
          font-size 16px
          color #001E4F
          margin-bottom 10px
          &:hover
            background #001E4F
            color #fff
          .anticon
              font-size 14px
    .map
      margin-top 100px
      .left
        .l-title
          font-size 50px
          padding-bottom 36px
        .sub
          max-width 415px
          padding-bottom 60px
      .right
        .r-title
          font-size 29px
          padding-bottom 35px
        .num
          font-size 60px
    .recommend
      padding 70px 0
      overflow hidden
      &.ismobile
        p
          line-height normal
        .school
          width 49.9%
      .school
        width 24.9%
        padding 15px
        float left
        box-sizing border-box
        .box
          position relative
          overflow hidden
          .img
            padding: 10px
            height: 100px
            transition: all 0.5s;
            transform scale(1)
            &.scale
              transform scale(0)
            &:hover
              img
                transform scale(1.1)
            img
              width: initial
              max-width: 100%
              margin: auto
              max-height: 80px
              transform scale(1)
              transition: all 0.5s;
          .info
            position: absolute
            bottom:0
            height 0
            width: 100%;
            padding 0
            background rgba(0, 0, 0, 0.8)
            color: #ffffff
            transition: all 0.5s;
            p
              margin-bottom 0
        &:hover
          .info
            height 32px
            padding 5px
            line-height 22px
    .hot
      margin-top 100px
      .title
        margin-bottom 50px
      .map
        .left
          .l-title
            font-size 46px
        .map-img
          width 327px
          height 256px
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
    .form
      margin-top -95px
      background: url(../static/image/cbg3.png) no-repeat center center/cover
      .hold
        height 160px
</style>

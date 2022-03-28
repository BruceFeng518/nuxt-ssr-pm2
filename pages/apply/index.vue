<template>
  <div class="container" :class="cc()">
    <banner-box v-if="id" pic="cbg6" :pid="id" :title="`${id == 28?$t('apply.middle.title') : id == 29 ? $t('apply.universi.title'): $t('apply.graduate.title')}`" :sub="`${id == 28?$t('apply.middle.sub') : id == 29 ? $t('apply.universi.sub'): $t('apply.graduate.sub')}`"/>
    <div class="main">
      <div class="max-width mst-padded-b-20">
        <div v-if="!isMobile" class="pos">
        <breadcrumb :sid="$route.query.t" :name="name"/>
      </div>
        <Title :title="`${id == 28?$t('apply.middle.advantage.title') : id == 29 ? $t('apply.universi.advantage.title'): $t('apply.graduate.advantage.title')}`"/>
        <Gird v-if="start" :data="id == 28 ? $t('apply.middle.advantage.list') : id == 29 ? $t('apply.universi.advantage.list') : $t('apply.graduate.advantage.list')" :isMobile="isMobile" from="apply" :gird="gird" :start="start"/>
        <Hold v-if="id==28"/>
        <Title v-if="id == 30" :title="$t('apply.graduate.type')"/>
        <div v-if="id == 30" class="types bs round10">
          <a-row type="flex" class="bb">
            <a-col :span="6" class="com left dfj">{{$t('apply.graduate.types.title')[0]}}</a-col>
            <a-col :span="9" class="com dfj mst-padded-l-20 mst-padded-r-20 br">
              <div class="dfjb"><div class="l pr"><img v-if="!isMobile" src="../../static/image/icon28.png" alt=""><span class="pa t">{{$t('apply.graduate.types.title')[1]}}</span></div><div class="r" v-if="!isMobile"><img src="../../static/image/icon29.png" alt=""></div></div>
            </a-col>
            <a-col :span="9" class="com dfj mst-padded-l-20 mst-padded-r-20">
              <div class="dfjb"><div class="l pr"><img v-if="!isMobile" src="../../static/image/icon28.png" alt=""><span class="pa t">{{$t('apply.graduate.types.title')[2]}}</span></div><div class="r" v-if="!isMobile"><img src="../../static/image/icon30.png" alt=""></div></div>
            </a-col>
          </a-row>
          <a-row v-for="(item, index) in $t('apply.graduate.types.list')" :key="index" type="flex" class="bb">
            <a-col :span="6" class="com left dfj"><div>{{item.text[0]}}</div></a-col>
            <a-col :span="9" class="com dfa br text-align-l"><div class="lh mst-padded-l-20 mst-padded-r-20 mst-margin-l-10 mst-margin-r-10">{{item.text[1]}}</div></a-col>
            <a-col :span="9" class="com dfa br text-align-l"><div class="lh mst-padded-l-20 mst-padded-r-20 mst-margin-l-10 mst-margin-r-10">{{item.text[2]}}</div></a-col>
          </a-row>
        </div>
        <Title v-if="id == 29 || id == 30" :title="$t('apply.universi.sort')[0]"/>
        <Hold v-if="id==29 || id == 30"/>
        <Hold v-if="id==28"/>
      </div>
      <div class="university">
        <div class="bg1" >
        <div class="max-width">
          <Gird2 v-if="id == 29 || id == 30" :data="datas" :sort="sort" from="apply"/>
          <Hold from="s85"/>
          <Title :title="`${id == 28?$t('apply.middle.recommend')[0] : id == 29 ? $t('apply.universi.recommend')[0]: $t('apply.graduate.recommend')[0]}`"/>
          <a-carousel v-if="recommend.length>0" autoplay dotPosition="bottom" dotsClass="_dotsClass">
            <div v-for="(item, index) in recommend" :key="index">
              <Case from="apply" :datas="item"/>
            </div>
          </a-carousel>
          <div class="btn">
            <Btn @click.native="toNext('/school')" :name="`${id == 28?$t('apply.middle.recommend')[1] : id == 29 ? $t('apply.universi.recommend')[1]: $t('apply.graduate.recommend')[1]}`" w="260px" h="58px"/>
          </div>
          <Hold from="s85"/>
          <Hold from="s85"/>
        </div>
      </div>
      <div class="bg2">
        <div v-if="id == 29 || id == 30" class="max-width bs sysBColor-fff round22">
        <Title :title="`${id == 29?$t('apply.universi.analysis.title') : $t('apply.graduate.analysis.title')}`" :sub="`${id == 29?$t('apply.universi.analysis.sub') : $t('apply.graduate.analysis.sub')}`"/>
        <Tab :tags="analysis" @changeTab="changeTab" :id="id"/>
        <div class="content text-align-l" v-html="analys.content"></div>
      </div>
       <div class="max-width bs process-box sysBColor-fff round22">
        <Title :title="`${id == 28?$t('apply.middle.process')[0] : id == 29 ? $t('apply.universi.process')[0]: $t('apply.graduate.process')[0]}`"/>
        <div v-if="process_img" class="process">
          <img v-lazy="$store.state.main_url + process_img" alt="">
        </div>
        <div class="process-btn">
          <Btn @click.native="toNext('/assessment/study')" :name="$t('apply.middle.process')[1]" w="260px" h="58px"/>
        </div>
      </div>
      </div>
      </div>
      <FormBox :title="$t('apply.action')"/>
    </div>
  </div>
</template>

<script>
import api from "~/assets/js/api";
import { mapGetters } from "vuex";
  export default {
    head() {
      return {
        title: "留学申请"
      };
    },
    data() {
      return {
        isMobile: false,
        pid: 0,
        sort: 82,
        tabIndex: 0,
        id: 0,
        start: 0,
        gird: 6,
        name: '',
        route: 2,
        url: '',
        datas: [],
        recommend: [],
        analysis: [],
        analys: {},
        process_img: '',
        listQuery: {
          page: 1,
          pageSize: 20,
          title: '',
          type: '',
          flag: 'recommend'
        },
      }
    },
    computed: {
      ...mapGetters(['overseas']),
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.id = this.$route.query.id
        this.start = 28== this.id?70:78
  
        this.overseas.map((item,index) => {
          if(this.id == item.id) {
            this.name = item.name
          }
        })
        this.isMobile = this.storage.mb();
        if (this.id == 29 || this.id == 30) {
          this.fetchList()
        }
        this.fetchSchoolList()
        this.fetchApplyList()
      },
      /**
       * 加拿大学校排名
       * */ 
      async fetchList() {
        let res = await api.school.sort();
        if (res) {
        //  console.log(res);
          res.map(item =>{
            item.custom  = item.custom.split(',')
          })
          this.datas = res
        }
      },
      /**
       * 推荐的学校
       * @params middle university
       * 
       * */ 
      async fetchSchoolList() {
        this.listQuery.type = 28 == this.id ? 13: ''
        let res = await api.school.recommend(this.listQuery);
        if (res) {
          console.log(res);
          this.recommend = res.data
        }
      },
      /**
       * 加拿大本科申请路径解析
       * 
       */
      async fetchApplyList() {
        let res = await api.school.apply({pid: this.id});
        if (res) {
          // console.log(res);
          this.analysis = res
          this.analys = res[0]
          this.process_img = res[0].image
        }
      },
      changeTab(i) {
        // console.log(i);
        this.tabIndex = i
        this.analys = this.analysis[i]
      },
      toNext(p) {
        this.$router.push({path: p})
      },
      cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size}`
      },
    },
    watch: {
      '$route' (to, from) {
        this.id = 0
             let top = document.documentElement.scrollTop || document.body.scrollTop;
     // 实现滚动效果 
     const timeTop = setInterval(() => {
       document.body.scrollTop = document.documentElement.scrollTop = top -= 100;  //可以自己设置
       if (top <= 0) {
         clearInterval(timeTop);
       }
     }, 10)
        this.init()
      }
    }
  };
</script>
<style lang="less">
.ant-carousel.ant-carousel{
  .slick-dots-bottom{
    &._dotsClass{
      left: initial;
      width: 100%;
      bottom: -38px;
      li{
        button{
          background: #707070;
        }
        &.slick-active{
          button{
            background: #001E4F;
          }
        }
      }
    }
  }
}
</style>
<style lang="stylus" scoped>
.container
  &.ismobile
    .main
      .university
        .bg1
          padding-top 0
      .types
        .com
          height initial
          padding 10px 0
  .main
    background: linear-gradient(to bottom,rgba(149,214,242,0.2), rgba(255,255,255,0.2))
    .types
      .com
        height: 126px
        line-height 126px
        font-size 22px
        .l
          width 253px
          height 93px
          margin-left 20px
          .t
            top 50%
            left 50%
            transform translate(-50%, -50%)
            font-size 29px
            width 100%
        .r
          width 88px
          height 70px
          margin-right 20px
        img
          width 100%
        &.left
          background #E7FBFF
    .university
      .bg1
        padding-top 100px
        .max-width
          position relative
          top -50px
      .btn
        padding 90px 0 100px
      .content
        padding 50px
      .bs
        margin-top -120px
      .process-box
        margin-top 70px
        padding-top 20px
        margin-bottom 100px
    .process-box
      margin-top -120px
      padding-top 80px
      margin-bottom 100px
      .process
        padding-top 30px
        max-width 900px
        margin auto
      .process-btn
        padding 90px 0
</style>
<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container" :class="cc()">
    <banner-box :title="$t('overseas.b')[0]" :pid="pid" :sub="$t('overseas.b')[1]" pic="cbg5" from="study"/>
    <div class="tag">
      <div v-if="overseas" class="max-width max-width pr pr-top bs round10"><Tag :tags="overseas" from="study"/></div>
      <News1 v-if="list.length>0" :cateList="cateList" :times="hotlist" :newList="list" :datas="newData" @selectTabs="selectTabs" @changeTabs="changeTabs" :title="$t('overseas.news')"/>
      <Hold from="s65"/>
      <Title :title="$t('apply.universi.sort')[0]"/>
      <Hold />
    </div>
    <!-- <Advantage from="study" :list="school" /> -->
    <div class="bg1 school-sort" >
      <div class="max-width">
        <Gird2 :data="school" :sort="sort" from="apply"/>
        <Hold from="s80"/>
      </div>
    </div>
    <div class="main">
      <div class="max-width">
        <Hold from="s80"/>
      <Title :title="$t('overseas.serve.title')"/>
      <Gird3 :data="$t('overseas.serve.list')" :size="size" from="study"/>
      <div>
        <p class="mt-font-24" v-html="$t('overseas.serve.sub')"></p>
        <div class="mst-margin-t-40">
          <Btn :name="$t('overseas.serve.btn')" w="263px" h="58px"/>
        </div>
      </div>
       <Hold from="s65"/>
      <Title v-if="!isMobile" :title="$t('overseas.station.title')"/>
      <div v-if="!isMobile" class="map">
        <Map from="study"/>
      </div>
      </div>
      <Hold />
    </div>
    <Advantage from="study1" :name="$t('overseas.guide.title')" :list="$t('overseas.guide.list')" :gird="gird"/>
    <div class="max-width">
      <Hold from="s65"/>
      <Title :title="$t('success')"/>
      <Case :datas="success" :size="gird" from="index"/>
      <Hold from="s65"/>
    </div>
    <div class="form">
      <form-box from="study" title="获取留学规划方案" bg="#15e2ea"/>
    </div>
  </div>
</template>

<script>
  import api from "~/assets/js/api";
  import { mapGetters } from "vuex";
  export default {
    head() {
      return {
        title: "留学服务"
      };
    },
    data() {
      return {
        pid: 501,
        sort: 82,
        size: 60,
        gird: 6,
        isMobile: false,
        cateList: [],
        hotlist: [],
        success: [],
        list: [],
        school: [],
        newData: {},
        listQuery: {
          flag: 'hot',
          title: ''
        },
      }
    },
    computed: {
      ...mapGetters(['overseas'])
    },
    mounted() {
      this.isMobile = this.storage.mb();
      this.fetchNewList(22)
      this.fetchList()
      this.fetchHotList()
      this.init()
    },
    methods: {
      init() {
        this.fetchNewCateList()
      },
      /* 移民资讯分类 */
    async fetchNewCateList() {
      let res = await api.article.category({pid: 4});
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
        if (id == 22) {
          this.success = res
        } else {
          this.list = res
          this.newData = res[0]
        }
      }
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
        this.school = res
      }
    },
    async fetchHotList() {
      let res = await api.school.list(this.listQuery);
      if (res) {
        this.hotlist = res.data
      }
    },
    changeTabs(e) {
      this.id = this.cateList[e].id
      this.fetchNewList(this.id)
    },
    selectTabs(e) {
      this.newData = this.list[e]
    },
      cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.container
  .school-sort
    .max-width
      position relative
      top -50px
  .tag
    background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2)) 
    line-height: normal;
    .pr-top
      top -30px
  .main
    background: linear-gradient(to bottom,rgba(111,221,242,0), rgba(111,221,242,0.5))
    .map
      margin 0 100px
</style>
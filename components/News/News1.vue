<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:05:53
-->
<template>
  <div class="news max-width" :class="cc()">
       <a-row :gutter="16" type="flex">
      <a-col class="gutter-row left" :xs="{ span: 24 }" :sm="{ span: 16 }" >
       <div class="sysBColor-fff bs round10  mst-padded-30">
          <div class="dfjb mst-padded-b-20">
          <div class="fw title">{{title}}</div>
           <!-- <Tabs :datas="newList" @changeTabs="changeTabs" type="card" from="news"/> -->
           <div class="tab dfjb mst-padded-l-20 mst-padded-r-20 mst-margin-l-20 mst-margin-r-20 mst-padded-b-15 bb">
            <template v-for="(item, index) in cateList">
               <span v-if="index<4" @click="changeTabs(index)" :key="index" class="fx mst-padded-t-15 mst-padded-b-15 mt-font-22" :class="{'sysBColor mt-color-fff round10': currentIndex == index}">{{index == 0 ? $t('immigration.news')[1] : item.name}}</span>
            </template>
           </div>
        </div>
      <a-row :gutter="60">
      <a-col @click="toNext(datas.id)" class="gutter-left-row text-align-l" :xs="{ span: 24 }" :sm="{ span: 12 }">
        <div v-if="datas.image" class="img round10 cp">
         <img v-lazy="$store.state.main_url + datas.image" alt="">
        </div>
        <h3 class="title-l mt-font-24 mst-padded-t-20 cp">{{datas.title}}</h3>
        <p class="mt-color-999 mt-font-18 cp mst-ellipsis-3">{{datas.sub}}</p>
      </a-col>
      <a-col class="gutter-left-row text-align-l" :xs="{ span: 24 }" :sm="{ span: 12 }">
        <ul class="mst-margin-b-30" :class="{'mst-padded-l-20 mst-padded-r-20': isMobile}">
          <li @click="toNext(item.id)" @mouseover="select(index)" v-for="(item, index) in newList" :key="index" class="new-list mt-font-24 cp mst-ellipsis-1">{{item.title}}</li>
        </ul>
        <Btn @click.native="toNextC()" :name="$t('btns.a')[4]" w="177px" :h="`${isMobile?'35px':'55px'}`" type="a" bg="#CDF9FB"/>
        <!-- <div class="btn cp">查看更多文章</div> -->
       </a-col>
    </a-row>
       </div>
     </a-col>
     <a-col class="gutter-row right " :class="{'sysBColor-fff bs round10':!isMobile}" :xs="{ span: 24 }" :sm="{ span: 8 }" >
       <div class="" :class="{'mst-margin-t-20 ismobile sysBColor-fff bs round10':isMobile}">
        <div class="com mst-padded-20" :class="{'mst-padded-0':isMobile}">
          <h2 class="title  mst-padded-b-10 dfjb" :class="{'mst-padded-20': isMobile}"><span class="sysColor">{{from == 'immi'?$t('immigration.news')[2]:$t('school.hot')}}</span><span class="month sysgreen">{{year}}<span  v-if="from == 'immi'"><br>{{month}} 月</span> </span></h2>
          <div>
            <client-only>
            <ul  class="dates" @click="handleClick($event)" :class="{'mst-padded-l-20 mst-padded-r-20': isMobile}">
              <vue-seamless-scroll v-if="times" :data="times" class="seamless-warp" :class-option="option">
                  <ul>
                      <li  v-for="(item,index) in times" :key="index" class="listTxt dfjb">
                          <span :data-id="item.id" class="txt mt-font-24 cp">{{from == 'immi'?item.name:item.title}}</span> <span v-if="from == 'immi'">{{item.description}}</span>
                      </li>
                  </ul>
              </vue-seamless-scroll>
            </ul>
            </client-only>
          </div>
          </div>
      </div>
       </a-col>
    </a-row>
    </div>
</template>

<script>
import {timeFamat} from '~/assets/js/common'
  export default {
    props: {
      title: {
        type: String,
        default: '移民资讯'
      },
      cateList: {
        type: Array,
        default: () => []
      },
      newList: {
        type: Array,
        default: () => []
      },
      times: {
        type: Array,
        default: () => []
      },
      from: {
        type: String,
        default: ''
      },
      datas: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        year: 0,
        month: 0,
        isMobile: false,
        currentIndex: 0,
      }
    },
    computed: {
      option() {
        return {
          step: 0.4,
          limitMoveNum: this.times.length
        }
      }
    },
    mounted() {
      this.isMobile = this.storage.mb();
      console.log(this.times);
    },
    created() {
      this.year = timeFamat('y')
      this.month = timeFamat('m')
    },
    methods: {
      changeTabs(e) {
        this.currentIndex = e
        this.$emit('changeTabs', e)
      },
      select(e) {
         this.$emit('selectTabs', e)
      },
      toNext(id = 0) {
        this.$router.push(`/article/${id}`)
      },
      handleClick(e) {
        if (this.from != 'immi') {
          let id = e.target.dataset.id
          this.$router.push({path: `/school/${id}`});
        }
      },
      toNextC() {
        this.$router.push({path:`/article`,query: {id:this.from == 'immi'?3:4}})
      },
      cc() {
        return ` ${this.isMobile?'ismobile':this.$store.state.size}`
      },
    }
  };
</script>
<style lang="stylus">
.news
  &.ismobile
    .gutter-row
      &.left
      .gutter-row
        &.left
          .title
            font-size 28px
            flex 0 0 120px
        .gutter-left-row
          .btn
            width 80%
            margin auto
  .gutter-row
    &.left
      .title
        font-size 40px
        flex 0 0 164px
      .gutter-left-row
        .title-l
          font-size 30px
          &:hover
            color #1088e9
        .img
          max-height 210px
          overflow hidden
          transition: all 0.5s;
          &:hover
            img
              transform scale(1.1)
          img
            transform scale(1)
            transition: all 0.5s;
        .new-list
          padding 17px 0
          list-style disc
          &:hover
            color #1088e9
        .btn
          height 55x
          width 177px
          line-height 55px
          text-align center
          border-radius 10px
          color #001E4F
          background #15E2EA
    &.right
      .com
        height: 555px
        margin auto
        overflow hidden
        font-size 18px
        .title
          font-size 36px
          margin-bottom 20px
          text-align left
          border-bottom 1px solid #eee
          .month
            text-align right
            line-height 29px
            font-size 26px
        .dates
          height 400px
          margin auto
          overflow: hidden
          .listTxt
            line-height: 2.5
            &:hover
              .txt
                color: #1890ff
        &:hover
          .title
            span
              &::before
                width 100%
</style>

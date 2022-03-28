<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
 <div>
    <div class="bs round10 sysBColor-fff">
    <div v-if="from == 'school' || from == 'news'" class="mst-padded-15 mst-padded-l-20 text-align-l mt-font-24">{{from == 'news'?'热门资讯':'热门大学'}} <span @click="fnMore" v-if="isMobile&& from == 'school'" class="fr">查看更多</span></div>
    <template v-if="from == 'school' || from == 'immigration'">
      <div @click="select(index, item.id)" v-for="(item, index) in data" :key="index" class="dfa left-list" :class="{'active': currentIndex == index&&from != 'school', 'bb': index != 4}">
        <a-icon v-if="from == 'immigration'" type="caret-right" class="mst-margin-r-20 mt-font-30"/>
        <div v-else class="img" :class="cc()"><img v-lazy="$store.state.main_url+item.image[0]" :alt="item.title"></div>
        <div class="title text-align-l">
          <div class="text-title">{{item.title}}</div>
          <p class="mt-font-14 mst-margin-b-0">{{item.en_title}}</p>
        </div>
      </div>
    </template>
    <template v-if="from == 'news'">
      <div @click="select(index, item.id)" v-for="(item, index) in data" :key="index" class="dfa mst-margin-15 cp" :class="cc()">
        <a-icon v-if="from == 'news'" type="caret-right" class="mst-margin-r-20"/>
        <div class="text-align-l"><a href="javascript:void(0)" class="mt-font-20">{{item.title}}</a></div>
      </div>
    </template>
  </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    props: {
      from: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        isMobile: false,
        currentIndex: 0,
      }
    },
    computed: {
      ...mapGetters(['locale']),
      _lang(zh,en) {
      return (zh,en) => {
        return this.locale == 'en'?en:zh
      }
    }
    },
    mounted() {
      this.isMobile = this.storage.mb();
      this.currentIndex = this.storage.get('immi_index') || 0
    },
    methods: {
      select(i, id) {
        this.currentIndex = i
        if(this.from =='school') {
          // this.$router.push({path: `/school/${id}`})
          this.$emit('changeTab', i)
        } else if(this.from == 'news') {
          let d = {
            i,
            id
          }
          this.$emit('changeTab', d)
        } else {
          this.$emit('changeTab', i)
        }
      },
      setIndex(i) {
        this.currentIndex = i
      },
      fnMore(){
        this.$router.push({path: `/school`})
      },
      cc() {
        return `${this.isMobile?'ismobile': this.$store.state.size} ${this.from}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.left-list
  padding 20px
  height 100px
  &.active
    background #001E4F
    color #fff
  .img
    height 28px
    width 24px
    margin-right 20px
    &.school
      width 76px
      height 46px
  .title
    .text-title
      font-size 19px
.news
  a
    &:visited
      color: #00b1fb
</style>
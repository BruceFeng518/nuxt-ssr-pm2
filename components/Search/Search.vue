<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="types bs round10 sysBColor-fff" :class="cc()">
    <a-row type="flex" class="bb">
      <a-col :span="6" class="com left dfj">{{from == 'article'?'文章查找':'学校查找'}}</a-col>
      <a-col :span="18" class="com dfj first-row right">
        <a-input-search v-model="valueInpu" placeholder="请输入关键字" style="width: 467px" />
      </a-col>
    </a-row>
    <a-row v-for="(item, index) in datas" :key="index" type="flex" class="bb">
      <a-col :span="6" class="com left dfj ">{{item.name}}</a-col>
      <a-col :span="18" class="com right dfj">
        <span @click="onClick(index, items, i, $event)" v-for="(items, i) in item.list" :key="i" class="btn" :class="{'active': index==0&&currentIndex == i || index==1&&currentIndex1==i}">{{$store.state.locale=='en'?items.en_title:items.title}}</span>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {_debounce} from '~/assets/js/common'
  export default {
    props: {
      datas: {
        type: Array,
        default: () => []
      },
      from: {
        type: String,
        default: ''
      },
      currentIndex: {
        type: Number,
        default: 0
      },
    },
    data() {
      return {
        currentIndex1: 0,
        isMobile: false,
        valueInpu: ''
      }
    },
    computed: {
      img() {
        return (i) =>{
          return require(`~/static/image/icon${i + 17}.png`)
        }
      },
    },
    watch: {
      valueInpu: _debounce(function (t, o) {
        if (t != o) {
          this.$emit('fnSearch', {index:4, t})
        }
      },1000),
    },
    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      onClick(index, item, i, e) {
        e.target.parentNode.children.forEach((item, ii) => {
          if (i == ii) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })
        let t = index == 1 ? this.from == 'school' ? item.type :item.id : item.id
        this.$emit('fnSearch', {index, t})
      },
      cc() {
        return ` ${this.isMobile?'ismobile':this.$store.state.size}`
      },
    }
  };
</script>
<style lang="stylus">
  .first-row
    line-height 126px
    .ant-input-affix-wrapper
      width 467px
      font-size 18px
      .ant-input
        height 44px
        font-size 20px
</style>
<style lang="stylus" scoped>
.types
  &.ismobile
      .com
        height initial
        padding 20px 0
        &.right
          padding 20px 30px
  .com
    height: 126px
    line-height normal
    font-size 22px
    text-align left
    &.left
      background #E7FBFF
    &.right
      justify-content flex-start
      flex-wrap wrap
      padding 0 30px
    .btn
      display: inline-block
      line-height normal
      padding 8px 20px
      &.active
        background #001E4F
        color #fff
        border-radius 10px
</style>
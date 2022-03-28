<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-01-30 11:10:03
-->
<template>
  <md-button class="md-raised md-accent" :class="c(type)" :style="{'min-width': w, height: h, fontSize: font, background: bg}" style="display:inline-block;">{{name}} <a-spin v-if="loading"/><a-icon v-if="icon" :type="icon" /></md-button>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    },
    type: {
      type: String,
      default: ''
    },
    w: {
      type: String,
      default: '100%'
    },
    h: {
      type: String,
      default: '32px'
    },
    font: {
      type: String,
      default: '16px'
    },
    icon: {
      type: String,
      default: ''
    },
    bg: {
      type: String,
      default: '#001E4F'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    c (el) {
      return `btn_${el} `
    }
  }
}
</script>
<style lang="less">
  .md-button{
    margin: 0;
    border-radius: 10px;
  }
  .md-button {
    .md-ripple {
      background: inherit;
      color: #fff;
      border-radius: 10px;
      margin: 0;
    }
    &.btn_a, &.btn_s{
      .md-ripple {
        background: #CDF9FB;
        color: #001E4F
      }
    }
    &.btn_s{
      margin-right: 30px;
    }
    &.btn_index-form,&.btn_banner,&.btn_immigration,&.btn_f16{
      .md-ripple {
        background: #17E1EA;
        color: #001E4F;
        &:hover{
          color: #001E4F
        }
      }
    }
    &.btn_gird2{
      margin: 20px 0 10px;
      .md-ripple{
        color: #001E4F
      }
    }
    &.btn_job{
      font-size: 12px!important;
    }
  }
  .md-button .md-ripple:hover {
    color:#17E1EA;
    opacity: 0.8;
  }
</style>
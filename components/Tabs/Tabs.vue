<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 毅源泉科技 冯勤毅 版权所有，侵权必究！
-->
<template>
  <a-tabs :tab-position="position" :type="type" :activeKey="defaultKey" @change="callback" :class="c(from)">
    <a-tab-pane v-for="(item, index) in datas" :key="index" :tab="item.name || ($store.state.locale != 'en' ? item.title :item.en_title) || item ">
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'line'
    },
    from: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top'
    },
    datas: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      defaultKey: 0
    }
  },
  mounted () {
    this.$bus.$on('changeValue', (key) => {
      this.callback(key)
    })
    // this.callback(this.$route.params.key || 0)
  },
  methods: {
    callback (key) {
      this.defaultKey = key
      this.$emit('changeTabs', key, this.from)
    },
    c (el) {
      return `tabs-${el}`
    }
  }
}
</script>
<style lang="less">
.ismobile{
.ant-tabs{
  &.tabs-school{
    width: 100%;
  }
}
}
.ant-tabs{
  .ant-tabs-bar {
    margin-bottom: 0;
    padding-bottom: 20px;
    .ant-tabs-nav-container{
      height: 44px!important;
      font-size:24px
    }
    .ant-tabs-tab {
      height: 44px!important;
      line-height: 44px!important;
      background: none!important;
      border: none!important;
      color: #001E4F!important;
      &:hover {
        background: #001E4F!important;
        color: #fff!important;
        border-radius: 10px!important;
      }
      &:before{
        content: none
      }
    }
    .ant-tabs-tab-active {
      height: 44px!important;
      background: #001E4F!important;
      color: #fff!important;
      border-radius: 10px!important;
    }
  }
  &.tabs-school{
    width: 62%;
    margin: auto;
    .ant-tabs-bar{
      padding-bottom: 30px;
      .ant-tabs-tab {
        padding: 0 25px!important;
        margin-right: 15px!important;
      }
    }
      padding-bottom: 70px;
  }
}
</style>

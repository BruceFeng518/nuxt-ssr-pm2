<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-02-01 21:41:08
-->
<template>
    <a-row class="school-list" :class="{'ismobile':isMobile}">
     <div @click="openDetail(item.id)" v-for="(item,index) in datas" :key="index" class="main-list bs round10 mst-margin-b-20 mst-padded-20 clearfix sysBColor-fff">
      <a-col :xs="{ span: 8 }" :sm="{ span: 8}">
        <div v-if="item.image">
         <img v-lazy="$store.state.main_url + item.image" :alt="item.title" class="round10">
        </div>
      </a-col>
      <a-col :xs="{ span: isMobile?15:16, offset: isMobile?1:0 }" :sm="{ span: 15, offset: 1}">
        <div class="dffdja" style="align-items: flex-start;">
          <div class="dfjb">
            <div :style="{width:isMobile?'initial':'70%'}">
               <h2 class="mst-margin-b-15 mt-font-18 text-align-l" :class="{'mt-font-30':!isMobile}">{{item.title}}</h2>
          <div class="mst-ellipsis-3 mt-font-16 mt-color-999 text-align-l" :class="{'mt-font-18':isMobile}" >{{item.sub}}</div>
            </div>
            <Btn v-if="!isMobile" name="查看详情" w="90px" h="45px"/>
          </div>
          <div class="dfjb" style="align-items: flex-end" :class="{'mst-margin-t-15':isMobile}">
            <div><Btn v-for="(tag, index) in item.tags" :name="tag" w="initial" bg="#CDF9FB" h="45px" type="s" :key="index"/></div>
            <span style="opacity:0">发布时间 <span class="mt-color-999">{{item.createtime | formatDate}}</span> </span>
          </div>
        </div>
      </a-col>
    </div>
  </a-row>
</template>
<script>
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
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = this.storage.mb()
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value*1000);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + MM + '-' + d;
    }
  },
  methods: {
    openDetail(id) {
      this.$router.push({ path: `/article/${id}`});
    }
  }
}
</script>
<style lang="stylus" scoped>
  .school-list
    line-height normal
    &.ismobile
      .dffdja
        height initial
    .dffdja
      height: 220px
      align-items initial
</style>
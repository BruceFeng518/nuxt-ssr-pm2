<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container" :class="cc()">
    <banner-box pic="cbg6" :pid="pid"/>
    <div class="bg3">
      <div class="tag max-width pr bs round10">
        <Tag :tags="$t('_download')" :from="from" @select="select"/>
        <div v-if="list.length>0">
          <div @click="fnDownload($store.state.main_url + item.url)" v-for="(item, index) in list" :key="index" class="down-list dfjb mt-font-18" :class="{bb: index != list.length-1,'mt-font-22': !isMobile}">
            <div><span class="mst-margin-r-20 mt-font-w">{{index+ 1}}</span><span>{{item.title}}</span></div>
            <div class="dfj right"><img src="~/static/image/icon43.png" alt=""><span class="mst-margin-l-20">下载</span></div>
          </div>
         <div class="mst-margin-20 text-align-l"> <a-pagination :current="listQuery.page" :total="total" :psize="listQuery.psize" :item-render="itemRender" @change="onChange" :hideOnSinglePage="true" @showSizeChange="showSizeChange"/></div>
        </div>
        <div v-else class="mst-margin-t-30 mst-margin-b-50">
          <a-empty />
        </div>
      </div>
      <Hold />
    </div>
  </div>
</template>

<script>
  import api from "~/assets/js/api";
  export default {
    head() {
      return {
        title: "下载资料"
      };
    },
    data() {
      return {
        isMobile: false,
        from: '',
        pid: 7,
        current: 0,
        list: [],
        tags: [],
        total: 0,
        listQuery: {
          page: 1,
          type: 'immigration'
        },
      }
    },
    mounted() {
      this.isMobile = this.storage.mb();
      this.from = this.$route.query.f
      this.fetchAdList()
    },
    methods: {
      async fetchAdList() {
        let res = await api.download(this.listQuery);
        if (res) {
          // console.log(res);
          this.list = res
        }
      },
      select(e) {
        // console.log(e);
        this.listQuery.type = e
        this.list = []
        this.fetchAdList()
      },
      fnDownload(url) {
        window.open(url);
      },
      showSizeChange(val) {
        this.listQuery.psize = val
      },
      onChange(pageNumber) {
        this.listQuery.page = pageNumber
        this.fetchList();
      },
      itemRender(current, type, originalElement) {
        if (type === 'prev') {
          return <a>上一条</a>;
        } else if (type === 'next') {
          return <a>下一条</a>;
        }
        return originalElement;
      },
      cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.container
  &.ismobile
    .bg3
      .tag
        top -15px
        .down-list
          padding 25px 15px
  .bg3
    .tag
      top -30px
      .down-list
        padding 30px
        .right
          img
            width initial
</style>
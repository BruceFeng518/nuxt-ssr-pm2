<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-11 13:04:04
-->
<template>
  <div class="detail" :class="cc()">
    <div class="container max-width">
      <Search :datas="datas" @fnSearch="fnSearch" :currentIndex="currentIndex" from="article"/>
     <a-row :gutter="20" class="mst-margin-t-30">
      <a-col class="gutter-row right" :xs="{ span: 24 }" :sm="{ span: 18}" >
        <div v-if="loading">
        <a-spin tip="loading..." size="large"/>
      </div>
      <div v-else >
        <article-list v-if="list.length>0" :datas="list"/>
        <a-empty v-else/>
      </div>
        <a-pagination :current="listQuery.page" :total="total" :psize="listQuery.psize" :item-render="itemRender" @change="onChange" :hideOnSinglePage="true" @showSizeChange="showSizeChange" size="large" class="text-align mst-margin-20 mst-padded-t-20" :class="{' mt-font-26': isMobile}"/>
      </a-col>
      <a-col class="gutter-row left" :xs="{ span: 0 }" :sm="{ span: 6}" >
        <Left :data="hotList" from="news" @changeTab="select"/>
      </a-col>
    </a-row>
  </div>
  </div>
</template>
<script>
import api from "~/assets/js/api";
export default {
  head() {
    return {
      title: "明途资讯列表"
    };
  },
  data() {
    return {
      currentIndex: 0,
      tabIndex: 0,
      offsetTop: 50,
      fixtop: false,
      loading: false,
      tags: ['申请条件', '申请材料', '办理流程', '免费咨询'],
      datas: [
        {
          name: '咨询分类',
          list: []
        },
        {
          name: '次级分类',
          list: []
        }
      ],
      list: [],
      hotList: [],
      isMobile: false,
      total: 0,
      listQuery: {
        page: 1,
        pid: 0,
        sid: 0,
        title: ''
      },
    }
  },
  mounted() {
    this.isMobile = this.storage.mb()
    this.fetchCategoryList()
    this.fetchHotList()
  },
  watch: {
    '$route.query.id': function() {
      this.fetchCategoryList()
    }
  },
  methods: {
    async fetchCategoryList() {
      let res = await api.article.category();
      if (res) {
        res.type.unshift({
              title: '全部',
              en_title: 'all',
              id: 0
            })
        let arr = []
        res.cate.map(item => {
          if (item.pid == 0) {
            item.title = item.name
            arr.push(item)
          }
        })
        arr.unshift({  
              title: '全部',
              en_title: 'all',
              id: 0
            })
        if (this.$route.query.id > 0) {
          arr.map((item,index) => {
            if(this.$route.query.id == 53&&item.id == 18 || this.$route.query.id == 51&&item.id == 18) {
              this.currentIndex = index
              this.listQuery.pid = item.id
            } else if (this.$route.query.id == 38 &&item.id == 23) {
              this.currentIndex = index
              this.listQuery.pid = item.id
            } else if (this.$route.query.id == 3 &&item.id == 3) {
              this.currentIndex = index
              this.listQuery.pid = item.id
            } else if (this.$route.query.id == 4 &&item.id == 4) {
              this.currentIndex = index
              this.listQuery.pid = item.id
            } else if (this.$route.query.id == 7 &&item.id == 7) {
              this.currentIndex = index
              this.listQuery.pid = item.id
            } else if (this.$route.query.id == 19 &&item.id == 19) {
              this.currentIndex = index
              this.listQuery.pid = item.id
            }
          })
        }
        this.datas[0].list = arr
        this.datas[1].list = res.type
        // console.log(this.datas);
        this.fetchList()
      }
    },
    async fetchHotList() {
      let res = await api.article.index({hot: 'hot', title: ''});
      if (res) {
        this.hotList = res.data
      }
    },
    async fetchList() {
      this.loading = true
      let res = await api.article.index(this.listQuery);
      if (res) {
        this.loading = false
        // console.log(res);
        this.total = res.total
        this.list = res.data
      }
    },
    fnSearch(e) {
      // console.log(e);
      if(e) {
        if(e.index == 0) {
          this.listQuery.pid = e.t
        } else if (e.index == 1) {
          this.listQuery.sid = e.t
        } else {
          this.listQuery.title = e.t
        }
        this.list = []
        this.listQuery.page = 1
        this.fetchList()
      }
    },
    select(e) {
      this.$router.push({ path: `/article/${e.id}`});
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
      return ` ${this.isMobile?'ismobile':this.$store.state.size}`
    },
  }
}
</script>
<style lang="stylus" scoped>
  .detail
    background: linear-gradient(to bottom,rgba(149,234,241,0.2), rgba(255,255,255,0.2))
    .container
      padding 30px 0
      .right
        .title-box
          height 170px
          background #E7FBFF
        .main
          margin-left 40px
</style>
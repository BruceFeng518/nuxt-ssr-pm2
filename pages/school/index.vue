<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container" :class="cc()">
    <div class="main">
      <div class="max-width">
      <Search :datas="datas" @fnSearch="fnSearch"/>
      </div>
    <div class="max-width case">
      <div v-if="loading">
        <a-spin tip="loading..." size="large"/>
      </div>
      <div v-else >
        <Case v-if="list.length>0" @changeTab="changeTab" :datas="list" from="school" :size="size"/>
        <a-empty v-else/>
      </div>
    </div>
    <a-pagination :current="listQuery.page" :total="total" :psize="listQuery.psize" :item-render="itemRender" @change="onChange" :hideOnSinglePage="true" @showSizeChange="showSizeChange" :class="{' mt-font-26': isMobile}"/>
    </div>
  </div>
</template>

<script>
import api from "~/assets/js/api";
  export default {
    head() {
      return {
        title: "加拿大院校列表"
      };
    },
    data() {
      return {
        isMobile: false,
        loading: false,
        size: 6,
        current: 2,
        currentIndex: 0,
        region: ['1', '3'],
        datas: [
          {
            name: '意向区域',
            list: []
          },
          {
            name: '学校类型',
            list: [{
                title: '全部',
                en_title: 'all',
                id: 0
              }]
          },
          {
            name: '院校分类',
            list: []
          }
        ],
        list: [],
        total: 0,
        listQuery: {
          page: 1,
          pid: 0,
          area: 0,
          title: '',
          flag: '',
          type: '',
        },
      }
    },
    mounted() {
      this.isMobile = this.storage.mb();
      this.fetchCategoryList()
    },
    methods: {
      async fetchCategoryList() {
        let res = await api.school.category();
        if (res) {
          res.area.unshift({
                title: '全部',
                en_title: 'all',
                id: 0
              })
          res.cate = this.listToTree(res.cate)
          res.cate.unshift({
                title: '全部',
                en_title: 'all',
                id: 0
              })
          this.datas[0].list = res.area
          this.datas[2].list = res.cate
          this.fetchList()
        }
      },
      async fetchList() {
        this.loading = true
        let res = await api.school.list(this.listQuery);
        if (res) {
          this.loading = false
          console.log(res);
          this.total = res.total
          this.list = res.data
        }
      },
      fnSearch(e) {
        console.log(e);
        if(e) {
          if(e.index == 0) {
            this.listQuery.area = e.t
          } else if (e.index == 1) {
            this.listQuery.type = e.t
          } else if (e.index == 4) {
            this.listQuery.title = e.t
          } else {
            this.listQuery.pid = e.t
          }
          this.list = []
          this.listQuery.page = 1
          this.fetchList()
        }
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
      onSearch() {
        console.log(555);
      },
      changeTab(i) {
        let id = 3
        this.$router.push({path: `/school/${id}`})
      },
      listToTree(oldArr){
        oldArr.forEach(element => {
          let parentId = element.pid;
          if(parentId !== 0){
           if (parentId == 11) {
             this.datas[1].list.push(element)
           }
            oldArr.forEach(ele => {
              if(ele.id == parentId){
                if(!ele.children){
                  ele.children = [];
                }
                ele.children.push(element);
              }
            });
          }
        });
        oldArr = oldArr.filter(ele => ele.pid === 0 && ele.id !== 11 && ele.id !== 15);
        return oldArr;
      },
      cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.container
  .main
    padding 50px 0
    background: linear-gradient(to bottom,rgba(149,214,242,0.2), rgba(255,255,255,0.2))
    .case
      padding 50px 0
</style>
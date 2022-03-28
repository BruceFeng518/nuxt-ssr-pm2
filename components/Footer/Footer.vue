<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2020-12-08 12:59:11
-->
<template>
  <div class="footer"
       :class="{'yyq-m-footer':isMobile}">
       <Hold from="s40" />
    <a-layout-footer style="background:none;color:#D5D5D5">
      <div class="mst-padded-b-10" style="border-bottom:1px solid rgba(255,255,255,.16)">
        <a-row type="flex" class="max-width">
        <a-col :xs="{ span: 0 }" :md="{ span: 16 }" class="left">
          <ul class="dfjb">
              <li v-for="(items, index) in list" :key="index" class="">
                <div class="f-list-title mt-font-20 sysgreen mst-padded-b-20">{{items.title}}</div>
                <ul>
                  <li @click="toNext(d)" v-for="(d, index) in items.item" :key="index" class="text-align-l mst-padded-t-20 mt-font-18 cp">{{d.title}}</li>
                </ul>
              </li>
          </ul>
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 8 }" class="right">
          <Scan from="foot" />
        </a-col>
      </a-row>
      <Hold />
      </div>
      <div  v-if="!isMobile" class="f-middle" style="border-bottom:1px solid rgba(255,255,255,.16)">
         <a-row type="flex" class="max-width">
        <a-col :sm="{ span: 12 }" :md="{ span: 4 }">
          <div>
            <img class="f-i-logo" src="~/static/image/icon46.png" alt="">
          </div>
        </a-col>
        <a-col :sm="{ span: 120 }" :md="{ span: 20 }">
          <p class="text-align-l">{{$t('footer.txt')[2]}}</p>
        </a-col>
         </a-row>
      </div>
      <div class="mst-padded-t-20 text-align">Copyright 明途国际. {{$t('footer.txt')[3]}}</div>
    </a-layout-footer>
  </div>
</template>
<script>
  import api from "~/assets/js/api";
  import { mapMutations } from "vuex";
  export default {
    props: {
      datas: {
        type: Object,
        default: () => {
          return {
            datas: {
              phone: "150-9991-8643",
              logo: require("static/image/logo.png")
            }
          };
        }
      },
      // isMobile: {
      //   type: Boolean
      // }
    },
    data () {
      return {
        visible: false,
        isMobile: false,
        form:{
          phone: ''
        },
        rules: {
          phone: [
            { required: true, message: 'is require', trigger: 'blur' }
          ]
        },
      };
    },
    computed: {
      list() {
        return [
          {
            title: this.$t('footer.list.title'),
            item: [
              {
                path: '/apply?id=28',
                title: this.$t('footer.list.item')[0]
              },
              {
                path: '/apply?id=28',
                title: this.$t('footer.list.item')[1]
              },
              {
                path: '/apply?id=29',
                title: this.$t('footer.list.item')[2]
              },
              {
                path: '/apply?id=30',
                title: this.$t('footer.list.item')[3]
              },
              {
                path: '/job',
                title: this.$t('footer.list.item')[4]
              },
            ]
          },
          {
            title: this.$t('footer.list.title1'),
            item: [
              {
                path: '/immigration/45',
                title: this.$t('footer.list.item1')[0]
              },
              {
                path: '/immigration/50',
                title: this.$t('footer.list.item1')[1]
              },
              {
                path: '/immigration/48',
                title: this.$t('footer.list.item1')[2]
              },
              {
                path: '/immigration/49',
                title: this.$t('footer.list.item1')[3]
              },
              {
                path: '/immigration/47',
                title: this.$t('footer.list.item1')[4]
              },
            ]
          },
          {
            title: this.$t('footer.list.title2'),
            item: [
              {
                path: '/visa/3',
                title: this.$t('footer.list.item2')[0]
              },
              {
                path: '/visa/1',
                title: this.$t('footer.list.item2')[1]
              },
              {
                path: '/visa/7',
                title: this.$t('footer.list.item2')[2]
              },
              {
                path: '/visa/8',
                title: this.$t('footer.list.item2')[3]
              },
              {
                path: '/visa/3',
                title: this.$t('footer.list.item2')[4]
              },
            ]
          },
          {
            title: this.$t('footer.list.title3'),
            item: [
              {
                path: '/article',
                title: this.$t('footer.list.item3')[0]
              },
              {
                path: '/article?id=3',
                title: this.$t('footer.list.item3')[1]
              },
              {
                path: '/article?id=19',
                title: this.$t('footer.list.item3')[2]
              },
              {
                path: '/article?id=7',
                title: this.$t('footer.list.item3')[3]
              },
              {
                path: '/article?id=4',
                title: this.$t('footer.list.item3')[4]
              },
            ]
          },
          {
            title: this.$t('footer.list.title4'),
            item: [
              {
                path: '/contact',
                title: this.$t('footer.list.item4')[0]
              },
              {
                path: '/download',
                title: this.$t('footer.list.item4')[1]
              },
              {
                path: '/assessment',
                title: this.$t('footer.list.item4')[2]
              },
              {
                path: '/assessment/study',
                title: this.$t('footer.list.item4')[3]
              },
              {
                path: '/article',
                title: this.$t('footer.list.item4')[4]
              },
            ]
          },
        ]
      }
    },
    mounted () {
      this.isMobile = this.storage.mb()
    },
    methods: {
      // async category () {
      //   let res = await api.nav.treeList();
      //   if (res) {
      //     this.list = res.slice(1, 5);
      //     this.list[2].children = this.list[2].children.slice(0, 4);
      //     // console.log(this.list);
      //   }
      // },
      toNext(item){
        this.$router.push({
          path: item.path
        })
      }
    }
  };
</script>
<style scoped lang="stylus">
.footer 
  position absolute
  bottom 0
  left 0
  width 100%
  z-index 10
  background: linear-gradient(to bottom, rgba(3,14,49,1), rgba(3,14,49,0.97))
  .f-list-title
    border-bottom 1px solid #17e1ea
  .f-middle
    padding 35px 0
  .f-i-logo
    max-width 120px
</style>

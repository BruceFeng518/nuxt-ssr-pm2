<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-29 07:06:34
-->
<template>
  <div class="container" :class="cc()">
    <banner-box pic="cbg6" :title="$t('immigration.banner')[0]" :pid="pid" :sub="$t('immigration.banner')[1]"/>
    <div class="bg3">
      <div class="max-width clearfix">
        <Hold />
         <a-row type="flex">
          <a-col :xs="{ span: 0 }" :sm="{ span: 8}" >
            <div class="b_logo">
              <img :src="$store.state.main_url + info.image[1]" alt="">
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :sm="{ span: 16}" >
            <div class="text-align-l mt-font-22">
              <p>致力于成为一家在高精人才资源战略重组和资产全球化配置的时代为企业和人才智慧选择并发展全面赋能的咨询科技公司</p>
              <p>A consulting technology company dedicated to enhancing our clients’ enterprise and top qualified personnel through intelligent choice and development in the era of reorganization of the global human resources strategy and global asset allocation。</p>
            </div>
          </a-col>
         </a-row>
      </div>
      <Hold />
      <Hold from="s30"/>
    </div>
    <div class="bg4">
      <div class="max-width pr">
        <Gird :data="value" :gird="gird" from="c1" :start="start"/>
        <Title :title="$t('contact.brand.title')"/>
        <Gird :data="$t('contact.brand.list')" :gird="gird" from="c1" :start="start"/>
      </div>
    </div>
    <div class="bg2">
      <div class="max-width">
        <Title :title="$t('contact.state')[0]"/>
      <div class="map ">
        <img :src="$store.state.main_url + info.image[4]" alt="">
      </div>
      </div>
    </div>
    <div class="bg1">
      <!-- <div class="address-box bs sysBColor-fff max-width round22 pr">
       <a-row type="flex">
          <a-col v-for="(item, index) in list" :key="index" :xs="{ span: 24 }" :sm="{ span: 12}" >
            <div class="dfjb mst-margin-b-30" style="align-items:flex-start;justify-content: flex-start">
              <div class="img">
                <img v-lazy="$store.state.main_url + item.image[0]" alt="">
              </div>
              <div class="right text-align-l mst-margin-l-20">
                <h2 class="mt-font-26">{{item.title}}</h2>
                <div @click="callPhone1(item.tel)" class="dfa mt-font-20 mst-padded-t-15 mst-padded-b-15"><a-icon type="phone" class="mt-color-999"/><span class="mt-color-999 mst-margin-l-15">+{{item.tel}}</span></div>
                <div class="dfa mt-font-20" style="align-items:flex-start"><a-icon type="environment" class="mt-color-999"/><span class="mt-color-999 mst-margin-l-15">{{item.address}}</span></div>
              </div>
            </div>
          </a-col>
       </a-row>
      </div> -->
    </div>
    <div class="max-width contact">
      <a-row type="flex" align="bottom">
        <a-col :xs="{ span: 0 }" :sm="{ span: 10}" >
          <div>
            <img src="~/static/image/icon32.png" alt="">
          </div>
        </a-col>
        <a-col :xs="{ span: 24 }" :sm="{ span: 14}" >
          <div class="phones text-align-l mst-padded-20">
            <Title :title="$t('contact.state')[1]" />
            <div class="phones-box clearfix">
              <template v-for="(item, index) in file" >
                <a-col v-if="index != 2 && index != 3" :key="index" :xs="{ span: 12 }" class="dfa mst-margin-b-30">
                <img class="img" :src="img((index<4?index:4)+100)" alt="">
                <div class="mst-margin-l-20">
                  <div class="mt-color-999 mt-font-20">{{item}}：</div>
                  <span @click="callPhone(index)" class="mt-font-26" style="word-break: break-word">{{0 == index?datas.tel: 1 == index ? datas.email : 2 == index ? datas.phone : 3 == index ? datas.fax : datas.address}}</span>
                </div>
              </a-col>
              </template>
            <div class="clearfix bt">
              <Title :title="$t('contact.state')[2]" />
            <div v-if="datas" class="dfa">
              <img @click="downloadCodeImg($store.state.main_url + datas.image[2])" class="scan" :src="$store.state.main_url + datas.image[2]" alt="">
              <img @click="downloadCodeImg($store.state.main_url + datas.image[2])" class="scan" :src="$store.state.main_url + datas.image[3]" alt="">
            </div>
            </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="bg1 contact">
      <div class="max-width text-align-l">
        <a-row type="flex" align="middle">
          <a-col :xs="{ span: 0 }" :sm="{ span: 14}" >
            <div>
               <Title :title="$t('contact.state')[3]" />
               <div v-for="(item, index) in $t('contact.international')" :key="index" class="dfa mst-margin-b-50 mst-padded-b-10">
                <img class="img" :src="img((index<2?index:2)+38)" alt="">
                <div class="mst-margin-l-20">
                  <div class="mt-font-35 mst-margin-b-10">{{item.name}}</div>
                  <span class="mt-color-999 mt-font-22">{{item.sub}}</span>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="{ span: 0 }" :sm="{ span: 8, offset:2}" >
            <Title :title="$t('contact.state')[4]" from="f32"/>
            <div class="gzh">
              <img :src="$store.state.main_url + datas.image[4]" alt="">
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import api from "~/assets/js/api";
import { mapGetters } from "vuex";
export default {
  name: 'index',
  head() {
    return {
      title: "联系我们"
    };
  },
  data () {
    return {
      current: 0,
      visible: false,
      pid: 8,
      gird: 6,
      start: 78,
      list: [],
      datas: {
        image: []
      },
      form: {
        lastname: '',
        firstname: '',
        email: '',
        flag: '',
      },
      value: [
        {
          title: '价值观（Core Value）',
          sub: '负责，诚信，信任，真诚，协作，严谨，精益求精！<br/>Responsibility, Honesty, Trust, Sincerity, Collaboration, Rigour, and Excellence!'
        },
        {
          title: '使命（Mission）',
          sub: '成为你在海外生活里最信赖的咨询公司！<br/>Become your most trusted consulting company in overseas life!'
        },
        {
          title: '愿景（Vision）',
          sub: '为客户以及商业伙伴提供创造和实现他们美好梦想的机会！<br/>Provide customers and business partners with opportunities to create and realize their beautiful dreams!'
        },
        {
          title: '口号（Slogan）',
          sub: '为你在海外生活撑腰助力 <br/>Support your life overseas Exploring Canada with GoBrightway together'
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['info']),
    img() {
      return (i) =>{
        return require(`~/static/image/icon${i}.png`)
      }
    },
    file() {
      let arr = this.$t('contact.file')
      return arr
    }
  },
  mounted() {
    this.$wow();
    this.isMobile = this.storage.mb();
    this.fetchList()
  },
  methods: {
    async fetchList() {
      let res = await api.system.list();
      if(res) {
        res.map(item =>{
          item.image = item.image.split(',')
        })
        this.list = res
        this.datas = res[0]
      }
    },
    handleSubmit(e) {
      console.log(this.formInline);
    },
    callPhone (index) {
      let p = 0 == index?this.datas.tel : 2 == index ? this.datas.phone : ''
      if(p) {
        window.location.href = 'tel://' + p
      }
    },
    callPhone1 (p) {
        window.location.href = 'tel://' + p
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
    downloadCodeImg(url){
        var a = document.createElement('a')
       a.download = 'scan-code'
       // 设置图片地址
       a.href = url;
       a.click();
    },
    wow () {
      if (process.browser) {
        // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({
          live: false,
          offset: 0
        }).init();
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
  .container
    &.ismobile
      .phones
        .phones-box
          margin 0
    .bg3
      .max-width
        padding 50px 0
        .b_logo
          max-width 287px
          max-height 122px
    .bg1
      .address-box
        top -100px
        padding 30px 30px 0 30px
        .img
          max-width 285px
          margin-right 20px
        .right
          max-width 285px
    .bg4
      .max-width 
        top -50px
    .bg2
      .max-width
        .map
          padding 30px 50px
    .phones
      .phones-box
        padding 50px 0
        margin 0 50px
      .scan
        max-width 160px
        margin-right 50px
    .contact
      .img
        width 56px
      .gzh
        max-width 287px
</style>

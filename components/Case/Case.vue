<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
   <a-row class="success" :gutter="16" :class="cc(from)" style="flex-wrap:wrap;">
    <a-col @click="toNext(item.id)" v-for="(item,index) in datas" :key="index" :xs="{ span: 12 }" :sm="size" class="left text-align-l">
      <div class="success-box round22 bs  wow bounceInUp" :data-wow-duration="`${(index+1)/1.7}s`">
         <div class="img">
          <img v-lazy="$store.state.main_url+item.image" :alt="item.title">
        </div>
      <div class="dfjb mst-padded-20 sysColor-fff" :class="{'mst-padded-b-0': from == 'apply'||from == 'school'}" style="align-items: flex-end">
        <div class="fx w100">
        <div class="l-title fw mst-margin-b-10 mst-ellipsis-1">{{item.title}}</div>
      <p class="sub mt-font-16" :class="[from == 'index'?' mt-font-22 mst-ellipsis-3':' mst-ellipsis-1']">{{from == 'index'? item.sub :item.en_title}}</p>
      </div>
      <div v-if="from == 'index'&&item.sub" class="tag-img mst-margin-b-15">
        <img class="img-init" src="~/static/image/icon12.png" alt="">
      </div>
      </div>
      <p v-if="from == 'apply'||from == 'school'" class=" mst-padded-l-20 mst-padded-r-20" :class="{dfj:!isMobile}">
        <span class="fx" :class="{dfa:isMobile}">开学: <i class="sysgreen mt-font-20">{{item.opens}}</i> </span>
        <span class="fx" :class="{dfa:isMobile}">招生人数： <i class="sysgreen">{{item.number}}</i> </span>
      </p>
      </div>
    </a-col>
  </a-row>
</template>

<script>
  export default {
    props: {
      from: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 6
      },
      datas: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        isMobile: false,
        num: 3
      }
    },
    mounted() {
      this.isMobile = this.storage.mb();
      this.num = this.from == 'apply' || this.from == 'school' ? 4 : 3
    },
    methods: {
      toNext(id) {
        if (this.from == 'school' || this.from == 'apply') {
          this.$router.push({path: `/school/${id}`})
        } else if (this.from == 'index'){
          this.$router.push({path: `/article/${id}`})
        }
      },
      cc() {
        return ` ${this.isMobile?'ismobile':'dfa '+this.$store.state.size} ${this.from}`
      },
    }
  };
</script>
<style lang="stylus" scoped>
.success
  &.ismobile
    .img
      height initial
    .sub
      min-height initial
    .left
      margin-bottom 40px
  &.apply
    .l-title
      font-size 19px
      .sub
        font-size 15px
  .left
    margin-bottom 50px
  .success-box
    background rgba(255,255,255,0.9)
    &:hover
      box-shadow 0 4px 10px 10px rgba(68, 93, 127, 0.1)
  .img
    height 203px
    transition: all 0.5s;
    overflow hidden
    &:hover
      img
        transform scale(1.1)
    img
      transform scale(1)
      transition: all 0.5s;
  .l-title
    font-size 26px
  .sub
    font-size 22px
    min-height 87px
  .tag-img
    display flex
    justify-content center
    flex 0 0 100px
    width 28px
    height 22px
</style>
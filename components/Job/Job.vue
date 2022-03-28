<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-04-03 10:43:13
-->
<template>
  <div class="job-box">
    <div class="dfj">
      <div v-for="(item, index) in 5" :key="index" class="work-list bb" :class="{'br': index != 4, 'fx3': index == 1}">
      <div class="work-list-title sysBColor-E7FBFF dfj mt-font-20">申请费</div>
    </div>
    </div>
    <div v-for="(item, index) in 5" :key="index" class="dfjb bb">
    <div v-for="(item, index) in 5" :key="index" class="work-list" :class="{'br': index != 4, 'fx3': index == 1}">
      <div class="work-list-text dfj mt-font-22" >
        <span v-if="index < 4">115 /次（不可退）</span>
        <Btn v-else @click.native="visible = true" name="查看详情" h="56px" w="120px"/>
      </div>
    </div>
    </div>
</div>
</template>
<style lang="stylus" scoped>
  .job-box
    .work-list
      width 100%
      flex 1
      &.fx3
        flex 3
      .work-list-title
        height 90px
      .work-list-text
        height 100px
</style>
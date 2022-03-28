<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-24 08:10:39
-->
<template>
  <div class="load">
    <a-spin size="large"/>
  </div>
</template>

<script>
export default {
 
  methods: {
  
  }
}
</script>
<style>
  .load {
    display:flex;
    align-items: center;
    flex-direction: columns;
    justify-content: center;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    z-index: 999;
  }
</style>
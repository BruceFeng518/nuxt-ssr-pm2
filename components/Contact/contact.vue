<template>
  <div>
    <div id="components-back-top-demo-custom" :class="{'pc':!isMobile}">
      <div class="tab-list">
      <a-popover v-if="!isMobile"
                   placement="left">
          <template slot="content">
            <div class="scan-img"
                 style="width:100px">
              <img :src="$store.state.main_url + info.image[2]"
                   alt=""
                   width="100" />
            </div>
          </template>
          <div class="com ant-back-top-inner" style="background-color: #07c160">
            <div class="mst-margin-b-10">
              <a-icon type="wechat" />
            <div class="mt-font-12 mst-margin-t-5">{{$t('btns.c')[0]}}</div>
            </div>
          </div>
        </a-popover>
         <a-popover v-if="!isMobile" placement="left">
              <template slot="content">
                <div @click="showModal"><span class="sysColor mt-font-18">{{$t('btns.c')[1]}}</span>{{$t('btns.c')[2]}}</div>
              </template>
           <div class="com ant-back-top-inner" style="background-color: #00b1fb">
            <div @click="showModal" class="mst-margin-b-10">
              <a-icon type="customer-service" theme="filled" />
            <div class="mt-font-12 mst-margin-t-5">{{$t('btns.c')[3]}}</div>
            </div>
          </div>
            </a-popover>
            <a-popover v-if="!isMobile"  placement="left">
              <template slot="content">
               <a-form-model layout="inline" :rules="rules" :model="form" ref="ruleForm">
                <a-form-model-item prop="phone" class="fix-right-form">
                  <a-input v-model="form.phone" :placeholder="$t('btns.c')[4]" style="height:initial">
                    <a-icon slot="prefix" type="phone" style="color:rgba(0,0,0,.25)" />
                  </a-input>
                </a-form-model-item>
                <a-form-model-item class="fix-right-form">
                  <a-button
                    type="primary"
                    @click="onSubmit"
                  >
                   {{$t('btns.a')[3]}}
                  </a-button>
                </a-form-model-item>
              </a-form-model>
              </template>
           <div class="com ant-back-top-inner" style="background-color: #3885cd">
            <div class="mst-margin-b-10">
             <a-icon type="phone" theme="filled" class="phone"/>
            <div class="mt-font-12 mst-margin-t-5">{{$t('btns.c')[4]}}</div>
            </div>
          </div>
            </a-popover>
           <div v-if="!isMobile" class="pr">
                <div @click="toPath" class="pa one-seconds cp">
                  <div class="mt-font-12">{{$t('btns.c')[6]}}</div>
                  <div class="mt-font-w"><span class="mt-font-18">{{$t('btns.c')[7]}}</span><span class="mt-font-18" style="color:red">{{$t('btns.c')[8]}}</span></div>
                </div>
           <div @click="toPath" class="com ant-back-top-inner" style="background-color: #ff3535">
            <div class="mst-margin-b-10">
            <a-icon type="edit" />
            <div class="mt-font-12 mst-margin-t-5">{{$t('btns.c')[5]}}</div>
            </div>
          </div>
            </div>
          <a-back-top >
            <div class="com ant-back-top-inner" style="background-color: #001E4F">
              <a-icon type="to-top" />
            </div>
          </a-back-top>
      </div>
    </div>
    <a-modal
      :title="$t('btns.c')[9]"
      :visible="visible"
      :confirm-loading="confirmLoading"
      :okText="$t('btns.c')[10]"
      width="1000px"
      :footer="null"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <form-box from="f16" title="获取移民规划方案" @fnSuccess="handleCancel"/>
    </a-modal>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import api from "~/assets/js/api";
  export default {
    props: {
      scroll: {
        type: Number
      },
    },
    data() {
      return {
        isMobile: false,
        visible: false,
        confirmLoading: false,
        form:{
          phone: ''
        },
        rules: {
          phone: [
            { required: true, message: 'is require', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapGetters(['info'])
    },
    mounted () {
      // this.category();
       this.isMobile = this.storage.mb()
       this.$bus.$on('fnSuccess', () =>{
         this.handleCancel()
       })
    },
    methods: {
      onSubmit() {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            console.log(this.form);
            this.insert()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async insert() {
        // if (this.loading) return;
          // this.loading = true;
        let res = await api.message.insert(this.form);
        if (res.code == 0) {
              this.$message.success(res)
              this.loading = false;
            } else {
              this.loading = false;
              this.$message.warning(res)
            }
      },
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.confirmLoading = true;
       
      },
      handleCancel() {
        this.visible = false;
      },
      toPath(){
        this.$router.push({
          path: '/assessment'
        })
      },
      backtop(e) {
        console.log(e);
      }
    }
  }
</script>
<style lang="stylus">
  .fix-right-form
    &.ant-form-item
      height inherit
    .ant-input
      height inherit
      font-size 16px
    .ant-input-affix-wrapper
      font-size 18px
</style>
<style scoped lang="less">
#components-back-top-demo-custom{
  display:none;
  &.pc{
    display:block;
  }
}
#components-back-top-demo-custom .ant-back-top {
  bottom: initial;
  right: initial;
}
#components-back-top-demo-custom .ant-back-top-inner {
  display:flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  line-height: 1;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 24px;
}
.tab-list {
  position: fixed;
  bottom: 100px;
  right: 0px;
  z-index: 11;
}
.tab-list .com {
  margin-bottom: 15px;
}
.tab-list .com .scan-img {
  width: 100px;
  overflow: hidden;
}
.one-seconds{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 72px;
  right: 75px;
  background: #E7FBFF;
  border: 1px solid #ff5500;
  border-radius: 5px;
}
</style>

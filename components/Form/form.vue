<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-01-18 13:35:38
-->
<template>
   <a-form-model  :rules="rules" :model="form" ref="ruleForm" class="text-align-l message-form" :class="c(from)">
     <a-row :gutter="24">
        <a-col :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="lastname">
            <a-input v-model="form.lastname" size="large" :placeholder="$t('contact.form')[0]">
              <a-icon slot="suffix" type="user" style="color:#919191"/>
            </a-input>
          </a-form-model-item>
        </a-col>
        <a-col :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="firstname">
            <a-input v-model="form.firstname" size="large" :placeholder="$t('contact.form')[1]">
              <a-icon slot="suffix" type="user" style="color:#919191"/>
            </a-input>
          </a-form-model-item>
        </a-col>
        <a-col :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="phone">
          <a-input v-model="form.phone" size="large" :placeholder="$t('contact.form')[3]">
            <a-icon slot="suffix" type="phone" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        </a-col>
        <a-col v-if="from == 'index-form'" :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="email">
          <a-input v-model="form.email" size="large" :placeholder="$t('contact.form')[2]">
            <a-icon slot="suffix" type="mail" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        </a-col>
        <a-col v-if="from != 'index-form'" :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="school">
          <a-input v-model="form.school" size="large" :placeholder="from=='immigration'?'意向城市':$t('contact.form')[5]">
            <a-icon slot="suffix" type="bank" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        </a-col>
        <a-col v-if="from != 'index-form'&&from=='immigration'" :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item >
          <a-input v-model="form.education" size="large" placeholder="最高学历">
            <a-icon slot="suffix" type="flag" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        </a-col>
        <a-col v-if="from != 'index-form'&&from!='immigration'" :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="sex">
            <a-select v-model="form.sex" size="large" :placeholder="$t('contact.form')[6]" :dropdownClassName="dropdownClassName">
              <a-select-option v-for="(item, index) in $t('assessment.sex.list')" :key="index" :value="item">{{item}}</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col v-if="from != 'index-form'" :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="abroad">
            <a-date-picker @change="onChange" :placeholder="$t('contact.form')[7]" style="display:block"/>
        </a-form-model-item>
        </a-col>
        <a-col v-if="from != 'index-form'" :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="province">
          <a-input v-model="form.province" size="large" :placeholder="$t('contact.form')[8]">
              <a-icon slot="suffix" type="environment" style="color:#919191"/>
            </a-input>
        </a-form-model-item>
        </a-col>
        <a-col v-if="from != 'index-form'" :xs="{ span: 24 }" :sm="{ span: 12}">
          <a-form-model-item prop="city">
           <a-input v-model="form.city" size="large" :placeholder="$t('contact.form')[9]">
              <a-icon slot="suffix" type="environment" style="color:#919191"/>
            </a-input>
        </a-form-model-item>
        </a-col>
        <a-col :xs="{ span: 24 }">
          <a-form-model-item>
            <a-input v-model="form.message" type="textarea" size="large" :placeholder="$t('contact.form')[4]" :rows="4">
            </a-input>
          </a-form-model-item>
        </a-col>
     </a-row>
    <div class="p">
      <a-form-model-item :class="{'text-align':block}">
      <Btn @click.native="onSubmit" :name="$t('btns.a')[3]" :w="`${isMobile?'80%':'157px'}`" :bg="bg" :h="`${isMobile?'40px':'58px'}`" :type="from" :loading="loading"/>
    </a-form-model-item>
    </div>
  </a-form-model>
</template>
<script>
import api from "~/assets/js/api";
export default {
  props: {
    from: {
      type: String,
      default: 'index'
    },
    block: {
      type: Boolean,
      default: true
    },
    bg: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      isMobile: false,
      loading: false,
      dropdownClassName: 'dropdownClassName',
      form:{
        lastname: '',
        firstname: '',
        phone: '',
        email: '',
        sex: undefined,
        school: '',
        province: '',
        city: '',
        abroad: '',
        message: '',
        education: ''
      },
      rules: {
        lastname: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
        firstname: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
        school: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    this.isMobile = this.storage.mb();
    
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // console.log(this.form);
          this.insert()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async insert() {
      if (this.loading) return;
        this.loading = true;
      let res = await api.message.insert(this.form);
      if (res) {
        this.$message.success(res)
        this.loading = false;
        if(this.from == 'f16') {
          this.$bus.$emit('fnSuccess')
        }
      } else {
        this.loading = false;
        this.$message.warning(res)
      }
    },
    onChange(data, dateString) {
     this.form.abroad = dateString
    },
    c (el) {
      const cls = `${el == 'online-booking' ? 'book' : ''}${el == 'left-booking' ? 'book left' : ''}`
      return cls
    }
  }
}
</script>
<style lang="less">
  .message-form .ant-form-item{
    height: 100px
  }
 .ant-form-explain{
    font-size: 20px
  }
  .ant-calendar-picker-icon{
    width: 27px;
    height: 27px;
    margin-top: 6px;
    transform: translate(0%, -50%);
    font-size:24px
  }
</style>
<style lang="stylus">
  .dropdownClassName
    .ant-select-dropdown-menu-item
      padding: 15px 12px
      font-size 25px
  .ant-input
    height 80px
    font-size 27px
  .ant-select
    &.ant-select-lg 
      height 80px
      font-size 27px
      .ant-select-selection--single,
      .ant-select-selection__rendered,
      .ant-select-selection__placeholder
        height 80px
        line-height 80px
        top 0
        margin-top 0
        .ant-select-arrow
          font-size 30px
          margin-top -18px
  .ant-input-affix-wrapper
    font-size 27px
  .p
    margin-top 100px
  .form
    border-bottom 1px solid #666
    background-color #232323
  .contact-box
    width 40%
    padding 50px 0
    .head
      margin-bottom 20px
      font-size 34px
  .book
    .ant-btn-primary
      height 60px
      line-height 60px
      font-size 18px
      border none
      background #fbb938
    &.left
      .ant-row 
        &.ant-form-item
          margin-bottom 5px
          .ant-btn-primary
            height 50px
            line-height 50px
</style>
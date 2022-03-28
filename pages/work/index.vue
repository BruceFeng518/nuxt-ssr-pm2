<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-29 07:06:34
-->
<template>
  <div class="container" :class="cc()">
    <banner-box pic="cbg5" :pid="pid" :title="$t('work.title')" :sub="$t('work.sub')"/>
    <div class="main bg3">
      <div class="max-width bs round22 sysBColor-fff">
         <div class="mt-font-16" :class="{'mt-font-22':!isMobile}" :style="{'word-break':'break-all'}">
           <div class="dfj">
           <template v-for="(item, index) in tabs">
             <div v-if="index< 5" :key="index" class="work-list bb" :class="{'br': index != 4, 'fx3': index == 1}">
            <div class="work-list-title sysBColor-E7FBFF dfj">{{index==4?'':item}}</div>
          </div>
           </template>
         </div>
          <div v-for="(item, index) in list" :key="index" class="dfjb bb" >
         <div class="work-list br" :style="{'width':isMobile?'55px':'initial'}">
            <div class="work-list-text dfj" >
              <span>{{item.number}}</span>
            </div>
          </div>
         <div class="work-list br fx3">
            <div class="work-list-text dfj" >
              <span>{{item.title}}</span>
            </div>
          </div>
         <div class="work-list br" :style="{'width':isMobile?'55px':'initial'}">
            <div class="work-list-text dfj" >
              <span>{{item.region}}</span>
            </div>
          </div>
         <div class="work-list br" :style="{'width':isMobile?'55px':'initial'}">
            <div class="work-list-text dfj" >
              <span>{{item.saraly}}</span>
            </div>
          </div>
         <div class="work-list">
            <div class="work-list-text dfj" >
              <Btn @click.native="toDetail(item)" :name="isMobile?'详情':'查看详情'" :h="`${isMobile?'':'56px'}`" :w="`${isMobile?'40px':'120px'}`" type="job"/>
            </div>
          </div>
          </div>
         </div>
        <div v-if="total>10" class="mst-margin-20 mst-padded-t-20 mst-margin-t-0 text-align-l"><a-pagination :current="listQuery.page" :total="total" :psize="listQuery.psize" :item-render="itemRender" @change="onChange"  @showSizeChange="showSizeChange" :hideOnSinglePage="true"/></div>
      </div>
    </div>
    <div class="bg4">
      <Hold />
      <Hold />
      <div class="max-width">
        <self-test :left="$t('work.list1')[4]" :right="$t('work.list1')[6]" :btn="$t('work.list1')[5]"  from="work"/>
      </div>
    </div>
     <a-modal v-model="visible" title="" :footer="false" :closable="false" :width="1440" :bodyStyle="{'padding':0,'border-radius': '10px', 'overflow': 'hidden'}" wrapClassName="work-model">
       <div class="work-detail" :class="{'ismobile':isMobile}">
        <a-row type="flex" class="">
        <a-col :span="15" class="br">
          <div v-for="(item, index) in  $t('work.list')" :key="index" class="bb clearfix">
            <a-col :span="9" class="com left dfj" :class="{'textarea': index == 3}">{{item}}</a-col>
            <a-col :span="15" class="com dfj mst-color-999">
              <div v-if="index != 3 && index != 8">{{index == 0?datas.title:index==1?datas.number:index==2?datas.job_type:index == 4?datas.experience:index==5?datas.region:index==6?datas.workhours:datas.saraly}}</div>
              <div v-if="index == 3" class="mst-padded-20 textarea scroll" v-html="datas.descripe"></div>
              <div v-if="index == 8" class="dfja" style="width:100%" v-html="datas.langauge"></div>
            </a-col>
          </div>
        </a-col>
        <a-col :span="9" class="com right">
          <a-form-model layout="horizontal" :model="form" :rules="rules" ref="ruleForm" @submit="handleSubmit" @submit.native.prevent class="dffdja" style="height:100%;justify-content:space-around">
            <div class="title">{{$t('work.list1')[0]}}</div>
            <a-form-model-item prop="username">
              <a-input v-model="form.username" :placeholder="$t('contact.form')[0]+$t('contact.form')[1]">
                <a-icon slot="suffix" type="user" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="username">
              <a-input v-model="form.phone" :placeholder="$t('contact.form')[3]">
                <a-icon slot="suffix" type="phone" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="email">
              <a-input v-model="form.email" :placeholder="$t('contact.form')[2]">
                <a-icon slot="suffix" type="mail" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item class="upfile" prop="file">
              <a-upload
                name="file"
                :action="`${$store.state.main_url}/api/work_resume/upfile`"
                @change="handleChange"
              >
                <a-button> <a-icon type="upload" /> {{$t('work.list1')[1]}}</a-button>
              </a-upload>
            </a-form-model-item>
            <a-form-model-item prop="number">
              <a-input v-model="form.number" :placeholder="$t('work.list')[1]">
                <a-icon slot="suffix" type="flag" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item>
              <a-textarea v-model="form.content" :placeholder="$t('work.list1')[2]" :rows="40" class="context"/>
            </a-form-model-item>
            <a-form-model-item>
             <div @click="onSubmit" class="mst-margin-b-50"><Btn :loading="loading" :name="$t('btns.b')[2]" :h="`${isMobile?'35px':'58px'}`" :w="`${isMobile?'100px':'260px'}`"/></div>
            </a-form-model-item>
          </a-form-model>
        </a-col>
      </a-row>
       </div>
    </a-modal>
    <Loading v-if="loading1"/>
  </div>
</template>

<script>
import api from "~/assets/js/api";

export default {
  name: 'index',
  head() {
    return {
      title: "本地工作"
    };
  },
  data () {
    return {
      current: 0,
      pid: 5,
      datas: {},
      loading: false,
      loading1: false,
      visible: false,
      isMobile: false,
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        type: 'local',
      },
      form: {
        username: '',
        phone: '',
        email: '',
        number: '',
        file: '',
        content: '',
        mimetype: '',
        imagetype: ''
      },
      rules: {
        username: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
        file: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '必选(Mandatory)', trigger: 'blur' }
        ],
      }
    }
  },
  computed: {
    tabs() {
      let arr = this.$t('work.list')
      let arr2 = [arr[1],arr[0], arr[5], arr[7],this.$t('work.list1')[8]]
      return arr2
    }
  },
  mounted() {
    this.$wow();
    this.isMobile = this.storage.mb();
    this.fetchList()
  },
  methods: {
    async fetchList() {
      this.loading1 = true
      let res = await api.work.index(this.listQuery);
      if(res) {
        this.loading1 = false
        this.total = res.total
        this.list = res.data
      }
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.save()
        } else {
          return false;
        }
      });
    },
    async save() {
      this.loading = true;
      let res = await api.work.save(this.form);
      if (res) {
        this.$message.success(res)
        this.loading = false;
        setTimeout(() =>{
          this.visible = false;
        },2000)
      } else {
        this.loading = false;
        this.$message.warning(res)
      }
    },
    toDetail(item) {
      this.visible = true
      this.datas = item
    },
    handleSubmit(e) {
      console.log(this.formInline);
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
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        this.form.file = info.fileList[0].response.data;
        this.form.mimetype = info.fileList[0].type;
        let t = this.form.file.split('.')
        this.form.imagetype = t[t.length-1]
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    cc() {
      return ` ${this.isMobile?'ismobile':this.$store.state.size}`
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
<style lang="less">
  .work-model {
    .work-detail {
      &.ismobile{
        .ant-row.ant-form-item{
          width: 95%;
        }
      }
      .ant-row.ant-form-item{
        width: 80%;
        margin: auto;
        
        &.last-child{
          margin-bottom: 50px;
        }
        .ant-col{
          text-align: center;
        }
        .context{
          min-height: 196px;
        }
      }
      .ant-row.ant-form-item.upfile{
          .ant-form-item-control{
            text-align: left;
          }
        }
      .ant-input {
        height: 42px;
      }
      .ant-form-explain{
        text-align: left
      }
    }
  }
</style>
<style lang="stylus" scoped>
  .container
    .main
      .max-width
        position relative
        top -20px
        bottom 50px
        .work-list
          width 100%
          flex 1
          &.fx3
            flex 3
          .work-list-title
            height 90px
          .work-list-text
            height 100px
    .bg4  
      margin-top -140px
.work-model
  .ant-modal-body
    padding 0
    .work-detail
      .com
        min-height: 80px
        line-height normal
        font-size 22px
        text-align left
        &.left
          background #E7FBFF
        &.right
          .title
            margin-top 70px
            font-size 40px
      .textarea
        height 182px
      .scroll
        overflow hidden
        overflow-y scroll
        &::-webkit-scrollbar-track-piece
          background: #fff
        &::-webkit-scrollbar
          width: 10px
        &::-webkit-scrollbar-thumb
          background: #E7FBFF
          border-radius: 20px
</style>

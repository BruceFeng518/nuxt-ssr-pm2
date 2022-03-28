<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container" :class="cc()">
    <banner-box pic="cbg6" :pid="pid" :title="$t('assessment.banner')[0]" :sub="$t('assessment.banner')[1]"/>
    <div class="main assessment">
      <div class="max-width bs sysBColor-fff round22">
        <a-form-model :model="form" ref="ruleForm" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item :label="$t('assessment.region.title')[0]" :class="{bb:!isMobile}" prop="region">
            <!-- <a-select v-model="form.region" :placeholder="$t('assessment.region.title')[1]" :style="{width: isMobile?'150px':'467px'}" block>
              <a-select-option v-for="(item, index) in $t('assessment.region.list')" :key="index" :value="item">{{item}}</a-select-option>
            </a-select> -->
             <a-cascader :options="regions" :popupClassName="isMobile?'cascader':''" :placeholder="$t('assessment.region.title')[1]" size="large" v-model="form.region" />
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.age.title')[0]" :class="{bb:!isMobile}" prop="age">
            <a-input v-model="form.age" :placeholder="$t('assessment.age.title')[1]"  :style="{maxWidth: isMobile?'150px':'233px'}"/>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.marriage.title')" :class="{bb:!isMobile}" prop="marriage">
            <a-radio-group v-model="form.marriage">
              <a-radio v-for="(item, index) in $t('assessment.marriage.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.education.title')" :class="{bb:!isMobile}" prop="education">
            <a-radio-group v-model="form.education">
              <a-radio v-for="(item, index) in $t('assessment.education.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.major.title')" :class="{bb:!isMobile}" prop="major">
            <a-radio-group v-model="form.major">
              <a-radio v-for="(item, index) in $t('assessment.major.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.assets.title')" :class="{bb:!isMobile}">
            <a-radio-group v-model="form.assets">
              <a-radio v-for="(item, index) in $t('assessment.assets.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.job.title')[0]" :class="{bb:!isMobile}">
            <a-radio-group v-model="form.job">
              <a-radio value="保密">{{$t('assessment.assets.list')[0]}}</a-radio><a-input v-model="form.job" :placeholder="$t('assessment.job.title')[1]" style="max-width: 233px" :class="{'mst-margin-t-15':isMobile}"/>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.english.title')[0]" class="form-block" prop="english" :class="{bb:!isMobile}">
            <a-radio-group v-model="english" @change="change">
              <a-radio value="我有雅思成绩(IELTS)" class="f-b IELTS" data-index="10">
                <div :class="{dfjb:!isMobile}"><span>{{$t('assessment.english.title')[1]}}</span><div><a-input @change="input" v-model="en.hear" :placeholder="$t('com.form')[0]" class="f-m-width"/><a-input @change="input" v-model="en.speak" :placeholder="$t('com.form')[1]" class="f-m-width"/><a-input @change="input" v-model="en.read" :placeholder="$t('com.form')[2]" class="f-m-width"/><a-input @change="input" v-model="en.write" :placeholder="$t('com.form')[3]" class="f-m-width"/></div></div>
              </a-radio>
              <a-radio value="我有思培成绩 (CELPIP)" class="f-b CELPIP" data-index="11">
                <div :class="{dfjb:!isMobile}"><span>{{$t('assessment.english.title')[2]}}</span><div><a-input @change="input" v-model="en1.hear" :placeholder="$t('com.form')[0]" class="f-m-width"/><a-input @change="input" v-model="en1.speak" :placeholder="$t('com.form')[1]" class="f-m-width"/><a-input @change="input" v-model="en1.read" :placeholder="$t('com.form')[2]" class="f-m-width"/><a-input @change="input" v-model="en1.write" :placeholder="$t('com.form')[3]" class="f-m-width"/></div></div>
              </a-radio>
              <a-radio v-for="(item, index) in $t('assessment.english.list')" :key="index" :value="item" :data-index="index">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.french.title')[0]" class=" form-block" prop="french" :class="{bb:!isMobile}">
             <a-radio-group v-model="french"  @change="frenchchange">
              <a-radio value="我有TEF成绩" class="f-b" data-index="10">
                <div :class="{dfjb:!isMobile}"><span>{{$t('assessment.french.title')[1]}}</span><div><a-input @change="input1" v-model="f.hear" :placeholder="$t('com.form')[0]" class="f-m-width"/><a-input @change="input1" v-model="f.speak" :placeholder="$t('com.form')[1]" class="f-m-width"/><a-input @change="input1" v-model="f.read" :placeholder="$t('com.form')[2]" class="f-m-width"/><a-input @change="input1" v-model="f.write" :placeholder="$t('com.form')[3]" class="f-m-width"/></div></div>
              </a-radio>
              <a-radio value="我有TCF成绩" class="f-b" data-index="11">
                <div :class="{dfjb:!isMobile}"><span>{{$t('assessment.french.title')[2]}}</span><div><a-input @change="input1" v-model="f1.hear" :placeholder="$t('com.form')[0]" class="f-m-width"/><a-input @change="input1" v-model="f1.speak" :placeholder="$t('com.form')[1]" class="f-m-width"/><a-input @change="input1" v-model="f1.read" :placeholder="$t('com.form')[2]" class="f-m-width"/><a-input @change="input1" v-model="f1.write" :placeholder="$t('com.form')[3]" class="f-m-width"/></div></div>
              </a-radio>
              <a-radio v-for="(item, index) in $t('assessment.french.list')" :key="index" :value="item" :data-index="index">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.child.title')" :class="{bb:!isMobile}" prop="child">
            <a-radio-group v-model="form.child">
              <a-radio v-for="(item, index) in $t('assessment.child.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.relatives.title')" :class="{bb:!isMobile}" prop="relatives">
            <a-radio-group v-model="form.relatives">
              <a-radio v-for="(item, index) in $t('assessment.relatives.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.immigrants.title')" :class="{bb:!isMobile}" prop="immigrants">
            <a-radio-group v-model="form.immigrants">
              <a-radio v-for="(item, index) in $t('assessment.immigrants.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
            <a-form-model-item :label="$t('com.phone')[0]" class="bb f-input" prop="phone">
            <div :class="{'mst-margin-t-20 mst-margin-b-20':isMobile,'dfjb':!isMobile}">
              <a-input v-model="form.phone" :placeholder="$t('com.phone')[1]" class="f-m-width"><a-icon slot="suffix" type="user" style="color:#919191"/></a-input>
              <a-input v-model="form.wechat" :placeholder="$t('com.phone')[2]" class="f-m-width" :class="{'mst-margin-t-10 mst-margin-b-10':isMobile}"><a-icon slot="suffix" type="wechat" style="color:#919191"/></a-input>
              <a-input v-model="form.email" :placeholder="$t('com.phone')[3]" class="f-m-width"><a-icon slot="suffix" type="mail" style="color:#919191"/></a-input></div>
          </a-form-model-item>
          <Hold />
          <a-form-model-item :wrapper-col="{ span: 8, offset: isMobile?0:8 }" style="background:none">
            <Btn @click.native="onSubmit" :h="`${isMobile?'35px':'56px'}`" :w="`${isMobile?'200px':'500px'}`" :loading="loading" :name="$t('btns.a')[3]"/>
          </a-form-model-item>
      </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import api from "~/assets/js/api";
  export default {
    head() {
      return {
        title: "免费评估"
      };
    },
    data() {
      return {
        isMobile: false,
        pid: 6,
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
        form: {
          phone: '',
          wechat: '',
          email: '',
          region: [],
          age: '',
          marriage: '',
          education: '',
          assets: '',
          job: '',
          english: '',
          french: '',
          child: '',
          relatives: '',
          immigrants: '',
        },
        regions: [
          {
            label: '加拿大',
            value: '加拿大',
            children: [
              {value: '阿尔伯塔',label:"阿尔伯塔"},
               {value: '不列颠哥伦比亚',label:"不列颠哥伦比亚"},
               {value: '曼尼托巴',label:"曼尼托巴"},
               {value: '纽芬兰与拉布拉多',label:"纽芬兰与拉布拉多"},
               {value: '新不伦瑞克省',label:"新不伦瑞克省"},
              {value: '新斯科舍',label:"新斯科舍"},
               {value: '安大略省',label:"安大略省"},
               {value: '爱德华王子岛',label:"爱德华王子岛"},
               {value: '魁北克',label:"魁北克"},
               {value: '萨斯喀彻温',label:"萨斯喀彻温"},
               {value: '努纳武特地区',label:"努纳武特地区"},
               {value: '育空地区',label:"育空地区"}
            ] 
          },
          {
            label: '中国',
            value: '中国',
            children: [
              {value: '中国大陆', label:"中国大陆"},
              {value: '中国香港', label:"中国香港"},
              {value: '中国澳门', label:"中国澳门"},
              {value: '中国台湾', label:"中国台湾"},
            ] 
          }
        ],
        english: '',
        french: '',
        en: { hear: '', speak: '', read: '', write: '', },
        en1: { hear: '', speak: '', read: '', write: '', },
        f: { hear: '', speak: '', read: '', write: '', },
        f1: { hear: '', speak: '', read: '', write: '', },
        rules: {
          region: [
            { required: true, message: '必选(Mandatory)'},
          ],
          age: [
            { required: true, message: '必选(Mandatory)'},
          ],
          marriage: [
            { required: true, message: '必选(Mandatory)'},
          ],
          education: [
            { required: true, message: '必选(Mandatory)'},
          ],
          major: [
            { required: true, message: '必选(Mandatory)'},
          ],
          english: [
            { required: true, message: '必选(Mandatory)'},
          ],
          french: [
            { required: true, message: '必选(Mandatory)'}
          ],
          child: [
            { required: true, message: '必选(Mandatory)'}
          ],
          relatives: [
            { required: true, message: '必选(Mandatory)'}
          ],
          immigrants: [
            { required: true, message: '必选(Mandatory)'}
          ],
        },
        t: 0,
        n: '',
        ft: 0,
        fn: '',
        loading: false
      }
    },
    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      change(e) {
        this.t = e.nativeEvent.target.labels[0].dataset.index;
        this.input()
      },
      frenchchange(e) {
        this.ft = e.nativeEvent.target.labels[0].dataset.index;
        this.input1()
      },
      farmat(d, e) {
          return d + ' -- 听：' + (e.hear?e.hear:'一般') + ', -- 说: ' + (e.speak?e.speak:'一般') + ', -- 读: ' + (e.read?e.read:'一般') + ', -- 写: ' + (e.write?e.write:'一般')
      },
      input() {
        if (this.t == 10) {
          this.form.english = this.farmat(this.english, this.en)
        } else if (this.t == 11) {
          this.form.english = this.farmat(this.english, this.en1)
        } else {
          this.form.english = this.english
        }
      },
      input1() {
        if (this.ft == 10) {
          this.form.french = this.farmat(this.french, this.f)
        } else if (this.ft == 11) {
          this.form.french = this.farmat(this.french, this.f1)
        } else {
          this.form.french = this.french
        }
      },
      onSubmit() {
        this.$refs['ruleForm'].validate(valid => {
          if (valid) {
          let data = Object.assign({}, this.form)
          data.region = data.region.join(',')
          // console.log(data);
            this.insert(data)
          } else {
            return false;
          }
        });
      },
      async insert(data) {
        if (this.loading) return;
        this.loading = true;
        let res = await api.assessment.insert(data);
          if (res.code == 0) {
            this.$message.success(res)
            this.loading = false;
          } else {
            this.loading = false;
            this.$message.warning(res)
          }
      },
      cc() {
        return ` ${this.isMobile?'ismobile': this.$store.state.size}`
      },
    }
  };
</script>
<style lang="less">
    .cascader.ant-cascader-menus{
      font-size: 24px;
    }
    .ismobile{
      .assessment{
        .ant-form-item-label {
          padding: 15px 0;
          text-align:initial;
          label{
            padding-left: 15px;
          }
        }
          .ant-cascader-picker-label{
            height: 50px;
            margin-top: -25px;
            line-height: 50px;
            font-size: 24px;
          }
        .bs{
          top: -15px;
            .form-block{
        .ant-form-item-control{
         
          .ant-form-item-children{
           
            .ant-radio-group{
            
             .ant-radio-wrapper.f-b{
               border-bottom:none;
               line-height: 80px;
               align-items: baseline;
                span{
                 &:last-child{
                   flex: 1;
                   .f-m-width{
                     max-width: 110px;
                     margin-right:20px;
                     &:last-child{
                       margin-right: 0;
                     }
                   }
                 }
               }
             }
            }
          }
        }
      }
        }
        .ant-form-item-control{
          height: initial
        }
        .ant-form {
          .ant-radio-wrapper{
            margin-top: 20px;
          }
          label{
            font-size: 22px;
          }
        } 
      }
    }
  .assessment{
    .bs{
      position: relative;
      top: -30px;
      padding-bottom: 30px;
      .ant-form-item{
        .ant-form-item-control-wrapper {
          background-color: #fff;
        }
      }
      .form-block{
        .ant-form-item-control{
          height: initial;
          line-height: normal;
          .ant-form-item-children{
            display: block;
            width: 100%;
            .ant-radio-group{
              display: inherit;
              line-height: 105px;
             .ant-radio-wrapper.f-b{
               display: flex;
               border-bottom: 0.01rem solid #e8e8e8;
               line-height: 105px;
               span{
                 &:last-child{
                   flex: 1;
                   .f-m-width{
                     max-width: 150px;
                     margin-right:20px;
                     &:last-child{
                       margin-right: 0;
                     }
                   }
                 }
               }
             }
            }
          }
        }
      }
      .f-input{
        .ant-form-item-control{
          margin-right: 30px;
        }
        .ant-form-item-children{
          width: 100%;
          .f-m-width{
            max-width: 323px
          }
        }
      }
      .ant-form-item-control{
        display: flex
      }
    }
  .ant-form {
    .ant-radio-wrapper{
      display: inline-flex;
      align-items: center;
      margin-right: 40px;
    }
    label{
      font-size: 22px;
    }
  } 
  .ant-form-item-label {
    display: block;
    background: #E7FBFF;
    color: #001E4F;
    text-align: center;
    label{
      color: inherit
    }
  }
  .ant-form-item-control{
    align-items: center;
    height: 105px;
    line-height: 105px;
    text-align: left;
    padding-left: 30px;
    .ant-select-selection--single,.ant-select-selection__rendered,.ant-select-selection__placeholder, .ant-select-search__field__placeholder {
      height: 60px;line-height: 60px;
      top: 0;
      font-size: 22px;
      margin-top: 0;
    }
    .ant-select-arrow{
      font-size: 25px;
      margin-top: -13px;
    }
    .ant-form-explain{
      margin-left: 10px;
    }
  }
  .ant-input{
    height: 60px;line-height: 60px;font-size: 22px;
  }
}
</style>
<style lang="stylus" scoped>
.container
  &.ismobile
    .assessment
      .ant-form-item
        display block
  .assessment
    background: linear-gradient(to bottom,rgba(149,214,242,0.2), rgba(255,255,255,0.2))
    .ant-form-item
      display flex
      align-items: center;
      margin-bottom 0
      height initial
      background-color: #E7FBFF
</style>
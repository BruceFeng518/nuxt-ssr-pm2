<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container" :class="cc()">
    <banner-box pic="cbg6" :pid="pid" :title="$t('assessment.banner')[0]" sub="找到适合您的留学项目"/>
    <div class="main study">
      <div class="max-width bs sysBColor-fff round22">
        <a-form-model :model="form" ref="ruleForm" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item :label="$t('assessment.sex.title')" :class="{bb:!isMobile}" prop="sex">
            <a-radio-group v-model="form.sex">
              <a-radio v-for="(item, index) in $t('assessment.sex.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.age.title')[0]" :class="{bb:!isMobile}" prop="age">
            <a-input v-model="form.age" type="number" :placeholder="$t('assessment.age.title')[1]" style="max-width: 233px"/>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.city')[0]" :class="{bb:!isMobile}" prop="city">
            <a-input v-model="form.city" :placeholder="$t('assessment.city')[1]" style="max-width: 233px"/>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.school')[0]" :class="{bb:!isMobile}" prop="school">
            <a-input v-model="form.school" :placeholder="$t('assessment.school')[1]"/>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.grade')[0]" :class="{bb:!isMobile}" prop="grade">
            <a-input v-model="form.grade" :placeholder="$t('assessment.grade')[1]"/>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.employment.title')" :class="{bb:!isMobile}" prop="employment">
            <a-radio-group v-model="form.employment">
              <a-radio v-for="(item, index) in $t('assessment.employment.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.averageScore.title')" :class="{bb:!isMobile}" prop="averageScore">
            <a-radio-group v-model="form.averageScore">
              <a-radio v-for="(item, index) in $t('assessment.averageScore.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.denyVisa.title')" :class="{bb:!isMobile}" prop="denyVisa">
            <a-radio-group v-model="form.denyVisa">
              <a-radio v-for="(item, index) in $t('assessment.denyVisa.list')" :key="index" :value="item">{{item}}</a-radio>
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
          <a-form-model-item :label="$t('assessment.french.title')[0]" class="form-block" prop="french" :class="{bb:!isMobile}">
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
          <a-form-model-item :label="$t('assessment.professionalDirection.title')" :class="{bb:!isMobile}" prop="profese">
            <a-checkbox-group v-model="profese" @change="profeses">
              <a-checkbox v-for="(item, index) in $t('assessment.professionalDirection.list')" :key="index" :value="item" name="type">{{item}}</a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.economicCapacity.title')" :class="{bb:!isMobile}" prop="economicCapacity">
            <a-radio-group v-model="form.economicCapacity">
              <a-radio v-for="(item, index) in $t('assessment.economicCapacity.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.studyTime.title')" :class="{bb:!isMobile}" prop="studyTime">
            <a-radio-group v-model="form.studyTime">
              <a-radio v-for="(item, index) in $t('assessment.studyTime.list')" :key="index" :value="item">{{item}}</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.message')[0]" class="bb message" prop="message">
            <a-textarea :maxLength="500" v-model="form.message" :placeholder="$t('assessment.message')[1]" :rows="5" size="large"/>
          </a-form-model-item>
          <a-form-model-item :label="$t('com.phone')[0]" class="bb f-input" prop="phone">
            <div :class="{'mst-margin-t-20 mst-margin-b-20':isMobile, 'dfjb':!isMobile}"><a-input v-model="form.phone" :placeholder="$t('com.phone')[1]" class="f-m-width"><a-icon slot="suffix" type="user" style="color:#919191"/></a-input><a-input v-model="form.wechat" :placeholder="$t('com.phone')[2]" class="f-m-width"  :class="{'mst-margin-t-10 mst-margin-b-10':isMobile}"><a-icon slot="suffix" type="wechat" style="color:#919191"/></a-input><a-input v-model="form.email" :placeholder="$t('com.phone')[3]" class="f-m-width"><a-icon slot="suffix" type="mail" style="color:#919191"/></a-input></div>
          </a-form-model-item>
          <Hold />
          <a-form-model-item :wrapper-col="{ span: 8, offset: isMobile?0:8  }" style="background:none">
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
        title: "免费留学评估"
      };
    },
    data() {
      return {
        isMobile: false,
        pid: 11,
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
        form: {
          sex: '',
          age: '',
          city: '',
          school: '',
          grade: '',
          employment: '',
          averageScore: '',
          denyVisa: '',
          english: '',
          french: '',
          profese: '',
          economicCapacity: '',
          studyTime: '',
          message: '',
          phone: '',
          wechat: '',
          email: '',
        },
        profese: [],
        english: '',
        french: '',
        en: { hear: '', speak: '', read: '', write: '', },
        en1: { hear: '', speak: '', read: '', write: '', },
        f: { hear: '', speak: '', read: '', write: '', },
        f1: { hear: '', speak: '', read: '', write: '', },
        rules: {
          sex: [
            { required: true, message: '必选(Mandatory)'},
          ],
          city: [
            { required: true, message: '必选(Mandatory)'},
          ],
          age: [
            { required: true, message: '必选(Mandatory)'},
          ],
          school: [
            { required: true, message: '必选(Mandatory)'},
          ],
          grade: [
            { required: true, message: '必选(Mandatory)'},
          ],
          employment: [
            { required: true, message: '必选(Mandatory)'},
          ],
          averageScore: [
            { required: true, message: '必选(Mandatory)'},
          ],
          denyVisa: [
            { required: true, message: '必选(Mandatory)'},
          ],
          profese: [
            { required: true, message: '必选(Mandatory)'},
          ],
          english: [
            { required: true, message: '必选(Mandatory)'},
          ],
          french: [
            { required: true, message: '必选(Mandatory)'}
          ],
          economicCapacity: [
            { required: true, message: '必选(Mandatory)'}
          ],
          studyTime: [
            { required: true, message: '必选(Mandatory)'}
          ],
          phone: [
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
      profeses() {
        this.form.profese = this.profese.toString()
      },
      onSubmit() {
        this.$refs['ruleForm'].validate(valid => {
          if (valid) {
            console.log(this.form);
              this.insert()
          } else {
            return false;
          }
        });
      },
      async insert() {
        if (this.loading) return;
        this.loading = true;
        let res = await api.assessment.study_insert(this.form);
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
 .ismobile{
      .study{
        .ant-form-item-label {
          padding: 15px 0;
          text-align:initial;
          label{
            padding-left: 15px;
          }
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
                   .f-m-width{
                     max-width: 110px;
                     margin-right:20px;
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
          .ant-radio-wrapper,.ant-checkbox-wrapper{
            margin-top: 20px;
          }
          label{
            font-size: 22px;
          }
        } 
      }
    }
  .study{
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
    .ant-checkbox-wrapper,
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
    min-height: 105px;
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
  .message{
    .ant-form-item-control{
      padding:30px;
    .ant-form-item-children{
      display: flex;
      width:100%
    }
    .ant-input{
      height: inherit;
      line-height: inherit;
    }
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
    .study
      .ant-form-item
        display block
  .study
    background: linear-gradient(to bottom,rgba(149,214,242,0.2), rgba(255,255,255,0.2))
    .ant-form-item
      display flex
      align-items: center;
      margin-bottom 0
      height initial
      background-color: #E7FBFF
</style>
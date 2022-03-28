<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container" :class="cc()">
    <banner-box pic="cbg6" :pid="pid" :title="$t('pnp.title')" :sub="$t('pnp.sub')"/>
    <div class="main bcpnp">
      <div class="max-width bs sysBColor-fff round22">
        <a-form-model :model="form" ref="ruleForm" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item class="bb sysBColor">
            <div class="mt-font-22 mt-color-fff">{{$t('pnp.ecommi.title')[0]}}</div>
          </a-form-model-item>
          <a-form-model-item :label="$t('pnp.ecommi.list')[0]" :class="{bb:!isMobile}" prop="level">
            <a-radio-group v-model="form.level" @change="input">
              <a-radio v-for="(item, index) in level" :key="index" data-index="1" :data-score="item.value" :value="`${item.name+$t('pnp.score')})`">{{item.name}}{{$t('pnp.score')}})</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('pnp.ecommi.list')[1]" class=" white flex" prop="reward" :class="{bb:!isMobile}">
            <a-checkbox-group v-model="checkboxValue" @change="input">
              <a-checkbox v-for="(item, index) in reward" :key="index" :data-score="item.value" name="reward" :value="`${index}/${item.value}`">{{item.name}}{{$t('pnp.score')}})</a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
           <a-form-model-item :label="$t('pnp.ecommi.list')[2]" :class="{bb:!isMobile}" prop="saraly">
            <a-select placeholder="please select your zone" :style="{width: isMobile?'250px': '467px'}" block @select="input">
              <a-select-option v-for="(item, index) in saraly" :key="index" :value="item.value">{{item.name}}{{$t('pnp.score')}})</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item :label="$t('pnp.ecommi.list')[3]" class=" flex" prop="wordRegion" :class="{bb:!isMobile}">
            <a-radio-group v-model="form.wordRegion" @change="input">
              <a-radio v-for="(item, index) in wordRegion" :key="index" data-index="4" :data-score="item.value" :value="`${item.name+$t('pnp.score')})`">{{item.name}}{{$t('pnp.score')}})</a-radio>
            </a-radio-group>
          </a-form-model-item>
             <a-form-model-item class="bb sysBColor">
            <div class="mt-font-22 mt-color-fff">{{$t('pnp.ecommi.title')[1]}}</div>
          </a-form-model-item>
          <a-form-model-item :label="$t('pnp.ecommi.list')[4]" :class="{bb:!isMobile}" prop="experience">
            <a-radio-group v-model="form.experience" @change="input">
              <a-radio v-for="(item, index) in experience" :key="index" data-index="5" :data-score="item.value" :value="`${item.name+$t('pnp.score')})`">{{item.name}}{{$t('pnp.score')}})</a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item :label="$t('pnp.ecommi.list')[5]" class="bb white" prop="plusReward">
            <a-radio-group v-model="form.plusReward" @change="input">
              <a-radio v-for="(item, index) in plusReward" :key="index" data-index="6" :data-score="item.value" :value="`${item.name+$t('pnp.score')})`">{{item.name}}{{$t('pnp.score')}})</a-radio>
            </a-radio-group>
          </a-form-model-item>
           <a-form-model-item :label="$t('pnp.ecommi.list')[6]" class="bb flex" prop="education">
            <a-radio-group v-model="form.education" @change="input">
              <a-radio v-for="(item, index) in education" :key="index" data-index="7" :data-score="item.value" :value="`${item.name+$t('pnp.score')})`">{{item.name}}{{$t('pnp.score')}})</a-radio>
            </a-radio-group>
          </a-form-model-item>
           <a-form-model-item :label="$t('pnp.ecommi.list')[7]" class="bb flex" prop="bonusPoints">
            <a-radio-group v-model="form.bonusPoints" @change="input">
              <a-radio v-for="(item, index) in bonusPoints" :key="index" data-index="8" :data-score="item.value" :value="`${item.name+$t('pnp.score')})`">{{item.name}}{{$t('pnp.score')}})</a-radio>
            </a-radio-group>
          </a-form-model-item>
            <a-form-model-item :label="$t('pnp.ecommi.list')[8]" :class="{bb:!isMobile}" prop="langauge">
            <a-radio-group v-model="form.langauge"  @change="input">
              <a-radio v-for="(item, index) in langauge" :key="index" data-index="9" :data-score="item.value" :value="`${item.name+$t('pnp.score')})`">{{item.name}}{{$t('pnp.score')}})</a-radio>
            </a-radio-group>
          </a-form-model-item>
           <a-form-model-item :label="$t('com.phone')[0]" class="bb f-input" prop="phone">
            <div :class="{'mst-margin-t-20 mst-margin-b-20':isMobile,'dfjb':!isMobile}">
              <a-input v-model="form.phone" :placeholder="$t('com.phone')[1]" class="f-m-width"><a-icon slot="suffix" type="user" style="color:#919191"/></a-input>
              <a-input v-model="form.wechat" :placeholder="$t('com.phone')[2]" class="f-m-width" :class="{'mst-margin-t-15 mst-margin-b-15':isMobile}"><a-icon slot="suffix" type="wechat" style="color:#919191"/></a-input>
              <a-input v-model="form.email" :placeholder="$t('com.phone')[3]" class="f-m-width"><a-icon slot="suffix" type="mail" style="color:#919191"/></a-input></div>
          </a-form-model-item>
          <Hold />
          <div v-if="form.score" class="mt-font-22">总分：<span class="sysColor mt-font-w">{{form.score}} {{$t('pnp.score')}}</span> </div>
          <a-form-model-item :wrapper-col="{ span: 24}" class="submit" style="background:none">
            <Btn @click.native="onSubmit" :h="`${isMobile?'35px':'56px'}`" :w="`${isMobile?'200px':'500px'}`" name="提交" :loading="loading"/>
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
        title: "BCPNP/EEBC 技术移民"
      };
    },
    data() {
      return {
        isMobile: false,
        loading: false,
        pid: 10,
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
        checkboxValue: [],
        total: [ {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0} ],
        form: {
          level: '',
          reward: '',
          saraly: '',
          wordRegion: '',
          plusReward: '',
          education: '',
          experience: '',
          bonusPoints: '',
          langauge: '',
          phone: '',
          wechat: '',
          email: '',
          score: 0
        },
        rules: { level: [ { required: true, message: '必选'}, ], reward: [ { required: true, message: '必选'}, ], plusReward: [ { required: true, message: '必选'}, ], education: [ { required: true, message: '必选'}, ], experience: [ { required: true, message: '必选'}, ], langauge: [ { required: true, message: '必选'}, ], bonusPoints: [ { required: true, message: '必选'} ], wordRegion: [ { required: true, message: '必选'} ], phone: [ { required: true, message: '必选'} ], },
        level: [{name: 'NOC 0 (25',value: 25},{name: 'NOC A(25',value: 25}, {name: 'NOC B (10',value: 10}, {name: 'NOC C (5',value: 5}, {name: 'NOC D (5',value: 5}],
        reward: [{name:' 职务属于NOC “00”高管级/Senior Manager NOC 00 level (15', value:15}, {name: ' 职务属于BC省100紧缺职业/Top 100 occupations in BC (10', value: 10}, {name: ' 目前在BC省从事全职工作/FullTime work in BC (10', value: 10}],
        saraly: [ {name: '少于(Less than) $25,000 (0',value: 0}, {name: '$100,000 以上 (and above) (50',value: 50}, {name: '$97,500 to $99,999 (38',value: 38}, {name: '$95,000 to $97,499 (37',value: 37}, {name: '$92,500 to $94,999(36',value: 36}, {name: '$90,000 to $92,499 (35',value: 35}, {name: '$87,500 to $89,999(34',value: 34}, {name: '$85,000 to $87,499 (33',value: 33}, {name: '$82,500 to $84,999 (32 ',value: 32}, {name: '$80,000 to $82,499 (31',value: 31}, {name: '$77,500 to $79,999 (30 ',value: 30}, {name: '$75,000 to $77,499 (29',value: 29}, {name: '$72,500 to $74,999 (28',value: 28}, {name: '$70,000 to $72,499 (27',value: 27}, {name: '$67,500 to $69,999 (26',value: 26}, {name: '$65,000 to $67,499 (25',value: 25}, {name: '$62,500 to $64,999 (24',value: 24}, {name: '$60,000 to $62,499 (23',value: 23}, {name: '$57,500 to $59,999 (22',value: 22}, {name: '$55,000 to $57,499 (21',value: 21}, {name: '$52,500 to $54,999 (20',value: 20}, {name: '$50,000 to $52,499 (19',value: 19}, {name: '$47,500 to $49,999 (18',value: 18}, {name: '$45,000 to $47,499 (17',value: 17}, {name: '$42,500 to $44,999 (16',value: 16}, {name: '$40,000 to $42,499 (15',value: 15}, {name: '$38,750 to $39,999 (14',value: 14}, {name: '$37,500 to $38,749 (13',value: 13}, {name: '$36,250 to $37,499 (12',value: 12}, {name: '$35,000 to $36,249 (11',value: 11}, {name: '$33,750 to $34,999 (10',value: 10}, {name: '$32,500 to $33,749 (9 ',value: 9}, {name: '$31,250 to $32,499 (8 ',value: 8}, {name: '$30,000 to $31,249 (7',value: 7}, {name: '$28,750 to $29,999 (6',value: 6}, {name: '$27,500 to $28,749 (5',value: 5}, {name: '$26,250 to $27,499 (4',value: 4}, {name: '$25,000 to $26,249 (3',value: 3}, ],
        plusReward: [{name: 'Yes (10', value: 10}, {name: 'No (0',value:0}],
        wordRegion: [ {name: '大温哥华地区/Greater Vancouver (0', value: 0}, {name: '大维多利亚地区，弗雷泽地区/Capital, Fraser Valley (2', value: 2}, {name: 'Thompson-Nicola, Nanaimo, Central Okanagan (2', value: 2}, {name: 'Okanagan-Similkameen, Cowichan Valley, North Okanagan, Fraser-Fort George (4', value: 4}, {name:'Kitimat-Stikine, Bulkley-Nechako, Squamish-Lillooet, Strathcona, ColumbiaShuswap, East Kootenay (8', value: 8}, {name:'Stikine, Central Coast, Northern Rockies, Mount Waddington, Skeena-Queen Charlotte, Powell River, Sunshine Coast, Kootenay-Boundary, AlberniClayoquot (10', value:10}],
        experience: [{name:'无/None (0', value:0}, {name:' 5年以上/60+ months (15', value:15}, {name:'4年-5年 /48 to 59 months (12', value:12}, {name:' 3年-4年/36 to 47 months (9', value:9}, {name:'2年-3年/24 to 35 months (6', value:6}, {name:' 1年-2年/12 months to 23 months (3', value:3},{name: '少于1年/Less than 12 months (1', value:1}],
        education: [{name:'硕士或博士学位/Master’s or doctorate (17', value:17}, {name:'研究生毕业证书/Postgraduate Certificate or Diploma (11',value:11}, {name:'本科学士学位/Bachelor’s Degree (11',value: 11}, {name: '技工培训证书/Post Secondary Diploma/Certificate (Trades) (11',value: 11},{name: '大专学历Associate Degree (4', value: 4}, {name: '大专证书/Diploma/Certificate (Non-trades) (2', value: 2}, {name: '高中以下/Secondary School (High School) or Less (0', value: 0}],
        bonusPoints: [{name: 'BC省专上教育/Post-secondary education completed in B.C. (8', value: 8}, {name: '加拿大专上教育/Post-secondary education completed in Canada (outside of B.C.) (6', value: 6}, {name: '加拿大机构学历认证/Educational Credential Assessment from a qualified supplier (4', value: 4}, {name: 'BC省技工培训证书/Successfully completed the Industry Training Authority British Columbia (ITABC’s) challenge certification process (4', value: 4}],
        langauge: [ {name:'CLB 10+ (30', value: 30}, {name: 'CLB 9 (26', value: 26}, {name:'CLB 8 (22', value: 22}, {name: 'CLB 7 (18', value: 18}, {name: 'CLB 6 (14', value: 14}, {name: 'CLB 5 (10', value: 10}, {name: 'CLB 4 (6', value: 6}, {name: 'CLB 4 低于(Below) (0', value: 0}, {name: '没有考试(No Test) (0', value: 0}]
      }
    },
    computed: {

    },
    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      input(e) {
        if(e.nativeEvent?.target?.labels[0]?.dataset?.index) {
          let i = e.nativeEvent.target.labels[0].dataset.index
          let v = e.nativeEvent.target.labels[0].dataset.score
          this.calculate(v, i)
        } else {
          if (this.isArray(e)) {
            let v = 0
            let t = ''
            e.map((item, index) => {
              let p = item.split('/')
              v += Number(p[p.length-1])
              t += this.reward[index].name + ','
            })
            this.form.reward = t
            this.calculate(v, 2)
          } else {
            this.saraly.map(item =>{
              if (e == item.value) {
                this.form.saraly = item.name + '分)'
              }
            })
            this.calculate(e, 3)
          }
        }
      },
      calculate(e, i) {
        this.form.score = 0
        this.total[i-1].v = e
        this.total.map(item => {
          this.form.score += Number(item.v)
        })
        console.log(this.form.score);
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
        let res = await api.score.insert(this.form);
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
      isArray(o) {
            return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]";
      }
    }
  };
</script>
<style lang="less">
 .ismobile{
      .bcpnp{
        .ant-form-item-label {
          padding: 15px 0;
          text-align:initial;
          label{
            padding-left: 15px;
          }
        }
        .bs{
          top: -15px;
          .ant-form-item {
           &.white{
          .ant-form-item-label{
            padding:10px 0 
          }
        }
        }
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
                     max-width: 120px;
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
  .bcpnp{
    .bs{
      position: relative;
      top: -30px;
      padding-bottom: 30px;
      .ant-form-item{
        &.submit{
          .ant-form-item-control{
            justify-content: center
          }
        }
        &.sysBColor{
          .ant-form-item-control-wrapper {
            display:flex;
            justify-content: center;
            background-color: #001E4F!important;
            width: 100%;
          }
        }
        .ant-form-item-control-wrapper {
          background-color: #fff;
        }
        &.white{
          .ant-form-item-label{
            white-space: normal;
            padding: 0 50px
          }
        }
        &.flex{
          .ant-checkbox-wrapper,
            .ant-radio-wrapper{
              display: flex;
              align-items: baseline;
              white-space: inherit;
            }
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
              line-height: 4
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
      padding: 15px 0;
    }
    label{
      font-size: 22px;
      margin-left: 0;
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
  .ant-input{
    height: 60px;line-height: 60px;font-size: 22px;
  }
}
</style>
<style lang="stylus" scoped>
.container
   &.ismobile
    .bcpnp
      .ant-form-item
        display block
  .bcpnp
    background: linear-gradient(to bottom,rgba(149,214,242,0.2), rgba(255,255,255,0.2))
    .ant-form-item
      display flex
      align-items: center;
      margin-bottom 0
      height initial
      background-color: #E7FBFF
</style>
<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container" :class="cc()">
    <banner-box pic="cbg6" :pid="pid" :title="$t('ee.title')" :sub="$t('ee.sub')"/>
    <div class="main ee">
      <div class="max-width bs sysBColor-fff round22">
        <a-form-model :model="form" ref="ruleForm" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="" class="sysBColor" :class="{bb:!isMobile}">
            <a-row>
              <a-col :span="19" class="br mt-color-fff mt-font-22">A.{{$t('ee.a')}}460-500</a-col>
              <a-col :span="5">
                <div class="text-align mt-color-fff mt-font-22">{{$t('ee.com')[0]}}</div>
              </a-col>
            </a-row>
          </a-form-model-item>
          <a-form-model-item :label="$t('ee.marriage.title')" :class="{bb:!isMobile}" prop="marriage">
            <a-row>
              <a-col :span="24" class="br">
               <a-radio-group v-model="form.marriage" @change="input">
              <a-radio v-for="(item, index) in $t('ee.marriage.list')" :key="index" :value="item" data-index="1" :data-score="index">{{item}}</a-radio>
            </a-radio-group>
              </a-col>
              <a-col :span="0">
                <!-- <div class="text-align mt-font-22">{{total[0].v}}</div> -->
              </a-col>
            </a-row>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.age.title')[0]" class="" :class="{bb:!isMobile}" prop="age">
            <a-row>
              <a-col :span="19" class="br">
                <a-input type="number" v-model="form.age" data-index="2" :maxLength="2" :placeholder="$t('assessment.age.title')[1]" style="max-width: 233px" @change="input"/>
              </a-col>
              <a-col :span="5">
                <div class="text-align mt-font-22" :class="{'lh mst-padded-t-15':isMobile}">{{$t('ee.com')[1]}}：{{total[1].v}}</div>
              </a-col>
            </a-row>
          </a-form-model-item>
          <a-form-model-item :label="$t('ee.spouse.title')[0]" class="form-block" prop="education" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
              <a-radio-group v-model="form.education" @change="input">
                <a-radio v-for="(item, index) in $t('ee.spouse.list')" :key="index" :value="item" data-index="3" :data-score="index">{{item}}</a-radio>
              </a-radio-group>
              </a-col>
              <a-col :span="5">
                <div class="text-align mt-font-22">{{$t('ee.com')[2]}}：{{total[2].v}}</div>
              </a-col>
            </a-row>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.english.title')[0]" class="form-block" prop="english" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <a-radio-group v-model="english"  @change="input">
                 <a-radio value="雅思成绩(IELTS)" data-index="4" data-score="7">{{$t('assessment.english.title')[1]}}</a-radio>
              <a-radio value="思培成绩 (CELPIP)" data-index="4" data-score="8">{{$t('assessment.english.title')[2]}}</a-radio>
              <a-radio value="TEF" data-index="4" data-score="9">TEF</a-radio>
              <a-radio value="TCF" data-index="4" data-score="10">TCF</a-radio>
                </a-radio-group>
                <div v-if="englishType2 == 4 && englishIndex > 0" class="dfjb mst-margin-b-20 mst-margin-r-15" style="width:initial">
                  <a-input @change="change" data-index="1" v-model="en.hear" :placeholder="$t('com.form')[0]" class="f-m-width mst-margin-r-15" :suffix="`CLB${en.hear!=''? eachEn[0].vg +'+'+eachEn[0].vs + $t('pnp.score'):''}`"/>
                  <a-input @change="change" data-index="2" v-model="en.speak" :placeholder="$t('com.form')[1]" class="f-m-width" :suffix="`CLB${en.speak!=''? eachEn[1].vg +'+'+eachEn[1].vs + $t('pnp.score'):''}`"/> </div>
                  <div v-if="englishType2 == 4 && englishIndex > 0" class="dfjb mst-margin-b-20 mst-margin-r-15"  style="width:initial">
                <a-input @change="change" data-index="3" v-model="en.read" :placeholder="$t('com.form')[2]" class="f-m-width mst-margin-r-15" :suffix="`CLB${en.read!=''? eachEn[2].vg +'+'+eachEn[2].vs + $t('pnp.score'):''}`"/>
                <a-input @change="change" data-index="4" v-model="en.write" :placeholder="$t('com.form')[3]" class="f-m-width" :suffix="`CLB${en.write!=''? eachEn[3].vg +'+'+eachEn[3].vs + $t('pnp.score'):''}`"/></div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                {{$t('ee.com')[3]}}：{{enTotal}}
              </a-col>
              </a-row>
          </a-form-model-item>
          <a-form-model-item :label="$t('assessment.french.title')[0]" class="form-block" prop="french" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <a-radio-group v-model="french"  @change="input">
                 <a-radio value="雅思成绩(IELTS)" data-index="5" data-score="7">{{$t('assessment.english.title')[1]}}</a-radio>
              <a-radio value="思培成绩 (CELPIP)" data-index="5" data-score="8">{{$t('assessment.english.title')[2]}}</a-radio>
              <a-radio value="TEF" data-index="5" data-score="9">TEF</a-radio>
              <a-radio value="TCF" data-index="5" data-score="10">TCF</a-radio>
              <a-radio value="无" data-index="5" data-score="1">{{$t('assessment.relatives.list')[1]}}</a-radio>
                </a-radio-group>
              <div v-if="franceIndex > 1" class="dfjb mst-margin-b-20 mst-margin-r-15" style="width:initial"><a-input @change="change1" data-index="1" v-model="f.hear" :placeholder="$t('com.form')[0]" class="f-m-width mst-margin-r-15" :suffix="`CLB${f.hear!=''? eachf[0].vg +'+'+eachf[0].vs + $t('pnp.score'):''}`"/><a-input @change="change1" data-index="2" v-model="f.speak" :placeholder="$t('com.form')[1]" class="f-m-width" :suffix="`CLB${f.speak!=''? eachf[1].vg +'+'+eachf[1].vs + $t('pnp.score'):''}`"/> </div><div v-if="franceIndex > 1"  class="dfjb mst-margin-b-20 mst-margin-r-15"  style="width:initial">
                <a-input @change="change1" data-index="3" v-model="f.read" :placeholder="$t('com.form')[2]" class="f-m-width mst-margin-r-15" :suffix="`CLB${f.read!=''? eachf[2].vg +'+'+eachf[2].vs + $t('pnp.score'):''}`"/><a-input @change="change1" data-index="4" v-model="f.write" :placeholder="$t('com.form')[3]" class="f-m-width" :suffix="`CLB${f.write!=''? eachf[3].vg +'+'+eachf[3].vs + $t('pnp.score'):''}`"/></div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                <div>
                  <div>{{$t('ee.com')[4]}}：{{fTotal}}</div>
                  <div v-if="fTotal==22" class="mt-font-16 sysColor6">{{$t('ee.com1')}}{{fTotal}}{{$t('pnp.score')}}</div>
                </div>
              </a-col>
              </a-row>
          </a-form-model-item>
          <a-form-model-item :label="$t('ee.experience.title')[0]" class="white form-block" prop="experience" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <div class="dfjb mt-font-22 " :class="{'h105 bb ':!isMobile, 'mst-margin-t-20 mst-margin-b-20': isMobile}" style="width:75%"><span>{{$t('ee.experience.list')[0]}}</span><div><a-input @change="input" v-model="form.experience" :placeholder="$t('add')[0]" class="f-m-width" data-index="6"/></div></div>
                <div class="dfjb mt-font-22 " :class="{'h105':!isMobile, 'mst-margin-t-20 mst-margin-b-20': isMobile}" style="width:75%"><span>{{$t('ee.experience.list')[1]}}</span><div><a-input @change="input" v-model="form.experience1" :placeholder="$t('add')[0]" class="f-m-width" data-index="7"/></div></div>
                <div v-if="form.experience1>0" class="mst-margin-b-15 mt-font-18"><span class="sysColor">*</span> {{$t('ee.tips')}}</div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                {{$t('ee.com')[5]}}：{{total[5].v}}
              </a-col>
              </a-row>
          </a-form-model-item>
          <a-form-model-item v-if="type == 0" label="" class="sysBColor" :class="{bb:!isMobile}">
            <a-row>
              <a-col :span="19" class="br mt-color-fff mt-font-22">
               B. {{$t('ee.b')}}40
              </a-col>
              <a-col :span="5">
                <div class="text-align mt-color-fff mt-font-22">{{$t('ee.com')[0]}}</div>
              </a-col>
            </a-row>
          </a-form-model-item>
          <a-form-model-item v-if="type == 0" :label="$t('ee.spouse.title')[1]" class=" form-block" prop="spouse" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <a-radio-group v-model="form.spouse" @change="input">
                  <a-radio v-for="(item, index) in $t('ee.spouse.list')" :key="index" data-index="8" :data-score="index" :value="item">{{item}}</a-radio>
                </a-radio-group>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                {{$t('ee.com')[6]}}：{{total[7].v}}
              </a-col>
              </a-row>
          </a-form-model-item>
          <a-form-model-item v-if="type == 0" :label="$t('ee.lang')" class="form-block" prop="english" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                  <a-radio-group v-model="english1"  @change="input">
                 <a-radio value="雅思成绩(IELTS)" data-index="9" data-score="7">{{$t('assessment.english.title')[1]}}</a-radio>
              <a-radio value="思培成绩 (CELPIP)" data-index="9" data-score="8">{{$t('assessment.english.title')[2]}}</a-radio>
              <a-radio value="TEF" data-index="9" data-score="9">TEF</a-radio>
              <a-radio value="TCF" data-index="9" data-score="10">TCF</a-radio>
              <a-radio value="无" data-index="9" data-score="1">{{$t('assessment.relatives.list')[1]}}</a-radio>
                </a-radio-group>
                <div v-if="englishType1 == 9 && englishIndex > 1" class="dfjb mst-margin-b-20 mst-margin-r-15" style="width:initial">
                  <a-input @change="change" data-index="1" v-model="en1.hear" :placeholder="$t('com.form')[0]" class="f-m-width mst-margin-r-15" :suffix="`CLB${en1.hear!=''? eachEn1[0].vg +'+'+eachEn1[0].vs + $t('pnp.score'):''}`"/>
                  <a-input @change="change" data-index="2" v-model="en1.speak" :placeholder="$t('com.form')[1]" class="f-m-width" :suffix="`CLB${en1.speak!=''? eachEn1[1].vg +'+'+eachEn1[1].vs + $t('pnp.score'):''}`"/> </div>
                  <div v-if="englishType1 == 9 && englishIndex > 1" class="dfjb mst-margin-b-20 mst-margin-r-15"  style="width:initial">
                <a-input @change="change" data-index="3" v-model="en1.read" :placeholder="$t('com.form')[2]" class="f-m-width mst-margin-r-15" :suffix="`CLB${en1.read!=''? eachEn1[2].vg +'+'+eachEn1[2].vs + $t('pnp.score'):''}`"/>
                <a-input @change="change" data-index="4" v-model="en1.write" :placeholder="$t('com.form')[3]" class="f-m-width" :suffix="`CLB${en1.write!=''? eachEn1[3].vg +'+'+eachEn1[3].vs + $t('pnp.score'):''}`"/></div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                {{$t('ee.com')[6]}}：{{enTotal1}}
              </a-col>
              </a-row>
          </a-form-model-item>
       
           <a-form-model-item v-if="type == 0" :label="$t('ee.experience.title')[1]" class=" white form-block" prop="experience" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <div class="dfjb mt-font-22 bb " :class="{'h105':!isMobile, 'mst-margin-t-20 mst-margin-b-20': isMobile}" style="width:75%"><span>{{$t('ee.experience.list')[0]}}</span><div><a-input @change="input" data-index="10" v-model="form.experience2" :placeholder="$t('add')[0]" class="f-m-width"/></div></div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                 {{$t('ee.com')[7]}}：{{total[9].v}}
              </a-col>
              </a-row>
          </a-form-model-item>
          <a-form-model-item label="" class="sysBColor" :class="{bb:!isMobile}">
            <a-row>
              <a-col :span="19" class="br mt-color-fff mt-font-22">
               {{type==1?'B':'C'}}.{{$t('ee.experience.title')[2]}}100
              </a-col>
              <a-col :span="5">
                <div class="text-align mt-color-fff mt-font-22">{{$t('ee.com')[0]}}</div>
              </a-col>
            </a-row>
          </a-form-model-item>
           <a-form-model-item :label="$t('ee.background.title')" class="form-block" :class="{bb:!isMobile}" prop="spouse">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <div class="mst-padded-20 bb mst-padded-l-0 mst-padded-b-0 mt-font-22">
                  <div class="mst-padded-b-15"><span class="mt-color-999">{{$t('ee.background.list')[0]}}：</span><span class="sysColor">{{crossScore[0].vs}}</span></div>
                  <ul class="mst-padded-l-20">
                    <li class="" style="list-style:disc">{{$t('ee.background.list')[1]}}</li>
                    <Hold />
                    <li class="" style="list-style:disc">{{$t('ee.background.list')[2]}}</li>
                    <Hold  class="s30"/>
                  </ul>
                  </div>
                  <div class="mst-padded-20 mst-padded-l-0 mst-padded-b-0 mt-font-22">
                    <Hold class="s30"/>
                  <div class="mst-padded-b-15"><span class="mt-color-999">{{$t('ee.background.list')[3]}}：</span><span class="sysColor">{{crossScore[1].vs}}</span></div>
                  <ul class="mst-padded-l-20">
                    <li class="" style="list-style:disc">{{$t('ee.background.list')[4]}}</li><Hold />
                    <li class="" style="list-style:disc">{{$t('ee.background.list')[5]}}</li>
                    <Hold />
                  </ul>
                </div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                {{$t('ee.com')[8]}}：{{crossScoreToatl}}
                <div v-if="crossScoreToatl==50" class="mt-font-16 sysColor6">{{$t('ee.com1')}}{{crossScoreToatl}}{{$t('pnp.score')}}</div>
              </a-col>
              </a-row>
          </a-form-model-item>
           <a-form-model-item :label="$t('ee.abord.title')" class="form-block" :class="{bb:!isMobile}" prop="spouse">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <div class="mst-padded-20 bb mst-padded-l-0 mst-padded-b-0 mt-font-22">
                  <div class="mst-padded-b-15"><span class="mt-color-999">{{$t('ee.abord.list')[0]}}：</span><span class="sysColor">{{crossScore1[0].vs}}</span></div>
                  <ul class="mst-padded-l-20">
                    <li class="" style="list-style:disc">{{$t('ee.abord.list')[1]}}</li>
                    <Hold />
                    <li class="" style="list-style:disc">{{$t('ee.abord.list')[2]}}</li>
                    <Hold  class="s30"/>
                  </ul>
                  </div>
                <div class="mst-padded-20 mst-padded-l-0 mst-padded-b-0 mt-font-22">
                  <div class="mst-padded-b-15"><span class="mt-color-999">{{$t('ee.abord.list')[3]}}：</span><span class="sysColor">{{crossScore1[1].vs}}</span></div>
                  <ul class="mst-padded-l-20">
                    <li class="" style="list-style:disc">{{$t('ee.abord.list')[4]}}</li>
                    <Hold />
                    <li class="" style="list-style:disc">{{$t('ee.abord.list')[5]}}</li>
                    <Hold  class="s30"/>
                  </ul>
                  </div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
                <div class="dfj">
                  <span style="display:inline-block;max-width:118px">{{$t('ee.com')[9]}}</span> <span>：{{crossScoreToatl1}}</span>
                </div>
                <div v-if="crossScoreToatl1==50" class="mt-font-16 sysColor6 mst-padded-t-20">{{$t('ee.com1')}}{{crossScoreToatl1}}{{$t('pnp.score')}}</div>
              </a-col>
              </a-row>
          </a-form-model-item>
          <a-form-model-item label="" class="sysBColor" :class="{bb:!isMobile}">
            <a-row>
              <a-col :span="19" class="br mt-color-fff mt-font-22">
               {{type==1?'C':'D'}}. {{$t('ee.d')}} 600
              </a-col>
              <a-col :span="5">
                <div class="text-align mt-color-fff mt-font-22">{{$t('ee.com')[0]}}</div>
              </a-col>
            </a-row>
          </a-form-model-item>
              <a-form-model-item :label="$t('ee.plusScore.title')[0]" class="form-block" :class="{bb:!isMobile}">
            <a-row type="flex" align="middle">
              <a-col :span="19" class="br">
                <div class="mst-padded-20 bb mst-padded-l-0 mst-padded-b-0 mt-font-22">
                  <!-- <a-radio-group v-model="form.timing" @change="input">
                  <a-radio v-for="(item, index) in $t('ee.plusScore.list')" :key="index" :data-score="index" data-index="11" :value="item">{{item}}</a-radio>
                </a-radio-group> -->
                <a-checkbox data-index="11" @change="onChange" :checked="timing"> {{$t('ee.plusScore.list')[0]}} </a-checkbox>
                  </div>
                <div class="mst-padded-20 bb mst-padded-l-0 mst-padded-b-0 mt-font-22">
                  <div class="mst-padded-t-15 mst-padded-b-15"><span class="mt-color-999">{{$t('ee.plusScore.title')[1]}}</span>{{$t('ee.plusScore.title')[2]}}</div>
                  <a-radio-group v-model="form.danbao" @change="input">
                  <a-radio v-for="(item, index) in $t('ee.plusScore.list1')" :key="index" :data-score="index" data-index="12" :value="item">{{item}}</a-radio>
                </a-radio-group>
                  </div>
                <div class="mst-padded-20  mst-padded-l-0 mst-padded-b-0 mt-font-22">
                  <div class="mst-padded-t-15 mst-padded-b-15"><span class="mt-color-999">{{$t('ee.plusScore.title')[3]}}</span></div>
                  <a-radio-group v-model="form.xueli" @change="input">
                  <a-radio v-for="(item, index) in $t('ee.plusScore.list2')" :key="index" :data-score="index" data-index="13" :value="item">{{item}}</a-radio>
                </a-radio-group>
                  </div>
                <div class="mst-padded-20  mst-padded-l-0 mst-padded-b-20 mt-font-22">
                  <div class="mst-padded-t-15 mst-padded-b-15"><span class="mt-color-999">{{$t('ee.plusScore.title')[4]}}</span></div>
                  <a-checkbox data-index="14" @change="onChange1" :checked="borther"> {{$t('ee.plusScore.relative')}} </a-checkbox>
                  </div>
            </a-col>
              <a-col :span="5" class="text-align mt-font-22">
               {{$t('ee.com')[10]}}：{{addTotal}}
              </a-col>
              </a-row>
          </a-form-model-item>
          <a-form-model-item :label="$t('com.phone')[0]" class="bb f-input" prop="phone">
            <div class="" :class="{'mst-margin-t-20 mst-margin-b-20':isMobile,'dfjb':!isMobile}">
              <a-input v-model="form.phone" :placeholder="$t('com.phone')[1]" class="f-m-width"><a-icon slot="suffix" type="user" style="color:#919191"/></a-input>
              <a-input v-model="form.wechat" :placeholder="$t('com.phone')[2]" class="f-m-width"><a-icon slot="suffix" type="wechat" style="color:#919191"/></a-input>
              <a-input v-model="form.email" :placeholder="$t('com.phone')[3]" class="f-m-width"><a-icon slot="suffix" type="mail" style="color:#919191"/></a-input></div>
          </a-form-model-item>
          <Hold />
          <div v-if="form.score" class="mt-font-22 mst-margin-b-20">{{$store.state.locale == 'en'?'Total Score': '总分'}}：<span class="sysColor mt-font-w">{{form.score}} {{$t('pnp.score')}}</span> </div>
          <a-form-model-item :wrapper-col="{ span: 24}" class="submit" style="background:none">
            <Btn @click.native="onSubmit" :h="`${isMobile?'35px':'56px'}`" :w="`${isMobile?'200px':'500px'}`" :name="$t('btns.a')[3]" :loading="loading"/>
          </a-form-model-item>
      </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import api from "~/assets/js/api";
const arr1 = []
for (let i = 0; i < 17; i++) {
  let d = {
    v: 0
  }
  arr1.push(d)
}
  export default {
    head() {
      return {
        title: "Express Entry打分系统"
      };
    },
    data() {
      return {
        timer: null,
        timing: false,
        borther: false,
        isMobile: false,
        loading: false,
        pid: 9,
        labelCol: { span: 6 },
        wrapperCol: { span: 18},
        type: 0,
        total: arr1,
        englishIndex: 0,
        englishType: 0,
        englishType1: 0,
        englishType2: 0,
        franceIndex: 0,
        english: '',
        english1: '',
        french: '',
        eachEn: [ { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, ],
        eachEn1: [ { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, ],
        eachf: [ { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, ],
        enTotal: 0,
        fTotal: 0,
        enTotal1: 0,
        en: { hear: '', speak: '', read: '', write: '', },
        en1: { hear: '', speak: '', read: '', write: '', },
        f: { hear: '', speak: '', read: '', write: '', },
        addTotal: 0,
        addIndex: false,
        addScore: [{v:0},{v:0}, {v: 0}, {v: 0}, {v: 0}],
        crossScore: [{vs:0},{vs:0}],
        crossScoreToatl: 0,
        crossScore1: [{vs:0},{vs:0}],
        crossScoreToatl1: 0,
        form: {
          marriage: '',
          age: '',
          education: '',
          spouse: '',
          english: '',
          english1: '',
          french: '',
          timing: '',
          danbao: '',
          xueli: '',
          experience: '',
          experience1: '',
          experience2: '',
          phone: '',
          wechat: '',
          email: '',
          score: 0,
        },
        relative: '',
        rules: {
          marriage: [
            { required: true, message: '必选'},
          ],
          age: [
            { required: true, message: '必选'},
          ],
        },
        educationType: 0
      }
    },

    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {
      /* 每项选中 */
      input(e) {
        if(e.nativeEvent?.target?.labels[0]?.dataset?.index) {
          let i = e.nativeEvent.target.labels[0].dataset.index
          let v = e.nativeEvent.target.labels[0].dataset.score
          if (1 == i) {
            this.type = v
            this.fnAge()
            this.fnEducation(this.educationType, i)
          } else if (3 == i || 8 == i) {
            this.educationType = v
            if(3 == i) {
              this.fnCross()
              this.fnCross1()
            }
            this.fnEducation(v, i)
          } else if (4 == i || 9 == i) {
            this.englishIndex = v
            this.englishType = i
            if(4 == i) {
              this.englishType2 = i
              this.en = { hear: '', speak: '', read: '', write: '', }
              this.enTotal = 0
            } else {
              this.englishType1 = i
              this.en1 = { hear: '', speak: '', read: '', write: '', }
              this.enTotal1 = 0
            }
            this.resets(1,i)
          } else if (5 == i) {
            this.franceIndex = v
            this.f = { hear: '', speak: '', read: '', write: '', }
            this.resetFrance()
          } else if (11 == i) {
            this.addIndex = v
            let t = v == 0 ? 600 : 0
            this.fnAddition(t, i)
          } else if (12 == i || 13 == i) {
            if (i == 12) {
              let t = v == 0 ? 200 : v == 1 ? 50 : 0
              this.fnAddition(t, i)
            } else {
              let t = v == 0 ? 30 : v == 1 ? 15 : 0
              this.fnAddition(t, i)
            }
          } else {
            this.calculate(v, i)
          }
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
          } else if (e.target.dataset.index == 2) {
            this.fnAge()
          } else if (e.target.dataset.index == 6 || e.target.dataset.index == 7|| e.target.dataset.index == 10) {
            this.fnExperience(e.target.dataset.index)
          } else {
            // this.saraly.map(item =>{
            //   if (e == item.value) {
            //     this.form.saraly = item.name + '分)'
            //   }
            // })
            // this.calculate(e, 3)
          }
        }
      },
      onChange(e) {
        this.timing = !this.timing
        let f = this.addIndex = e.target.checked
        let v = f?600:0
        this.fnAddition(v, 11)
      },
      onChange1(e) {
        // console.log(e);
        this.borther = !this.borther
        let f = this.relative = e.target.checked
        let v = f?15:0
        this.fnAddition(v, 14)
      },
      /* 提交 */
      onSubmit() {
        this.$refs['ruleForm'].validate(valid => {
          if (valid) {
            this.insert()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async insert() {
        if (this.loading) return;
         clearTimeout(this.timer)
        if (this.addIndex) {
          this.form.timing = this.$t('ee.plusScore.list')[0]
          this.form.danbao = ''
          this.form.xueli = ''
        } else {
          this.form.timing = this.$t('ee.plusScore.relative')
        }
        this.loading = true;
        this.timer = setTimeout(() => {
          this.loading = false;
          clearTimeout(this.timer)
        }, 15000);
        let res = await api.score.ee(this.form);
            console.log(res);
          if (res=='提交成功') {
            clearTimeout(this.timer)
            this.$message.success(res)
            this.resetData()
            this.loading = false;
          } else {
            this.loading = false;
            this.$message.warning(res)
          }
      },
      /* 总分计算 */
      calculate(e, i) {
        this.form.score = 0
        this.total[i-1].v = e
        this.total.map((item,index) => {
          // console.log(item.v + '----------' + index);
          this.form.score += Number(item.v)
        })
        // console.log(this.form.score);
      },
      /* 年龄算分 */
      fnAge() {
        const s = this.form.age
        const t = this.type
        const v = s <= 17 ? 0 : s == 18 || s == 31? t!=0?99: 90 : s == 19 || s == 30? t!=0?105: 95 : s >= 20 && s <= 29 ? t!=0?110: 100 : s == 32 ? t!=0?94:85 : s == 33 ? t!=0?88:80 : s == 34 ? t!=0?83:75: s == 35 ? t!=0?77:70 : s == 36 ? t!=0?72:65 : s == 37 ? t!=0?66:60 : s == 38 ? t!=0?61:55 : s == 39 ? t!=0?55:50 : s == 40 ? t!=0?50:45 : s == 41 ? t!=0?39:35 : s == 42 ? t!=0?28:35 :s == 43 ? t!=0?17:15 :s ==44?t!=0?6:5:0
        // console.log(v);
        this.calculate(v, 2)
      },
      /* 工作算分 */
      fnExperience(i) {
        let tt = this.type
        let e = 0
        if(i == 10) {
          e = this.form.experience2 = this.fnReg(this.form.experience2)
        } else if(i == 7) {
          e = this.form.experience1 = this.fnReg(this.form.experience1)
          this.fnCross2()
          this.fnCross3()
          // this.calculate(this.crossScoreToatl1, 16)
        } else {
          e = this.form.experience = this.fnReg(this.form.experience)
          this.fnCross1()
          this.fnCross3()
          // this.calculate(this.crossScoreToatl, 15)
        }
        const v = 5 <= e ? i == 10 ? 10: tt == 1?80:70 : 4 <= e && 5 > e ? i == 10 ? 9:tt == 1?72: 63 : 3 <= e && 4 > e ? i == 10 ? 8: tt == 1?64:56 : 2 <= e && 3 > e ? i == 10 ? 7: tt == 1?53:46 : 1 <= e && 2 > e ? i == 10 ? 5: tt == 1?40:35 : 0
        // this.total[5].v = v
        if (i != 7) {
          this.calculate(v, i)
        }
      },
      /* 教育算分 */
      fnEducation(s, i) {
        const t = this.type
        let v = s == 0 ? 0 : s == 1 ? t==0? i == 8?2:28: 30 : s == 2 ? t==0?i == 8?6:84: 90 : s == 3 ? t==0?i == 8?7:91: 98 : s == 4 ? t==0?i == 8?8:112: 120 : s == 5 ? t==0?i == 8?9:119: 128 : s == 6 ? t==0?i == 8?10:126: 135: t==0?i == 8?10:140:150
        this.calculate(v, i)
      },
      /* 附加分得分： */
      fnAddition(v, i) {
        this.addTotal = 0
          if (i == 12) {
            this.addScore[0].v = v
          } else if (i == 13) {
            this.addScore[1].v = v
          } else if (i == 14) {
            this.addScore[2].v = v
          } else if (i == 11) {
            this.addScore[3].v = v
          }
          this.addScore.map(item => {
            this.addTotal += item.v
          })
          this.addTotal = this.addTotal>600?600:this.addTotal
        this.calculate(this.addTotal, 11)
      },
      /* 交叉得分 */
      fnCross() {
        let t = this.educationType
        let e = this.farmatCross()
        this.crossScore[0].vs = t <= 1 || e == 0  ? 0 : t > 1 && t < 5 ? (e == 1? 13 : 25) : (e == 1 ? 25 : 50)
        this.crossScoreToatl = this.farmatScore(this.crossScore, 1)
        this.calculate(this.crossScoreToatl, 15)
      },
      fnCross1() {
        let t = this.educationType
        let e = this.form.experience || 0
        //  console.log(e)
        this.crossScore[1].vs = t <= 1 || e == 0 ? 0 : t > 1 && t < 5 ? e < 2&&e>0? 13 : 25 : t >= 5 ? e < 2&&e>0 ? 25 : 50 : 0
        this.crossScoreToatl = this.farmatScore(this.crossScore, 1)
        this.calculate(this.crossScoreToatl, 15)
      },
      fnCross2() {
        let g = this.farmatCross()
        let e = this.form.experience1 || 0
        this.crossScore1[0].vs = e <= 0.5 || g == 0 ? 0 : e > 0.5 && e <= 2.5 ? g == 1? 13 : 25 : e >= 2.5 ? g == 1 ? 25 : 50 : 0
        this.crossScoreToatl1 = this.farmatScore(this.crossScore1, 1)
        // console.log(this.crossScoreToatl1);
        this.calculate(this.crossScoreToatl1, 16)
      },
      fnCross3() {
        let e = this.form.experience || 0
        let e1 = this.form.experience1 || 0
        // this.crossScore1[1].vs = (e1 < 0.5 && e < 0.5) ? 0 : e1 > 0.5 && e <= 2.5 ? e < 2 && e >= 0.5? 13 : 25 : e1 >= 2.5 ? e < 2 && e >= 0.5 ? 25 : 50 : 0
        let s = 0
        if (e1 < 0.5) {
          s = 0
        } else if (e1>0.5 && e1 <= 2.5) {
          if (e<= 0.5) {
            s = 0
          } else if (e>0.5 && e<2) {
            s = 13
          } else {
            s = 25
          }
        } else {
          if (e<= 0.5) {
            s = 0
          } else if (e>0.5 && e<2) {
            s = 25
          } else {
            s = 50
          }
        }
        this.crossScore1[1].vs = s
        this.crossScoreToatl1 = this.farmatScore(this.crossScore1, 1)
        // console.log(this.crossScoreToatl1);
        this.calculate(this.crossScoreToatl1, 16)
      },
      farmatCross() {
        let t = 0
        let a = this.eachEn
        if (a[0].vg >= 9 && a[1].vg >= 9 && a[2].vg >= 9 && a[3].vg >= 9) {
          t = 2
        } else if (a[0].vg >= 7 && a[1].vg >= 7 && a[2].vg >= 7 && a[3].vg >= 7) {
          t = 1
        }
        return t
      },
      /* 第一语言得分： */
      change(ev) {
        const t = ev.target.dataset.index
        const i = this.englishType
        const e = this.englishIndex
        if (t == 1) {
          const y = this.en.hear = this.fnReg(ev.target.value)
          if (e == 8) {
            this.fnSipei(y, t)
          } else {
            this.farmat1(y,e)
          }
        } else if (t == 2) {
          const y = this.en.speak = this.fnReg(ev.target.value)
          if (this.englishIndex == 8) {
            this.fnSipei(y, t)
          } else {
            this.farmat(y,t)
          }
        } else if (t == 4) {
          const y = this.en.write = this.fnReg(ev.target.value)
          if (this.englishIndex == 8) {
            this.fnSipei(y, t)
          } else {
            this.farmat(y,t)
          }
        } else {
          const y = this.en.read = this.fnReg(ev.target.value)
          if (this.englishIndex == 8) {
            this.fnSipei(y, t)
          } else {
            const tt = this.type
            this.farmat2(y,e)
          }
        }
        if (i == 9) {
          this.form.english1 = this.inputFarmat(this.english1, this.eachEn1, this.en1)
          console.log(this.form.english1);
        } else {
          this.form.english = this.inputFarmat(this.english, this.eachEn, this.en)
          console.log(this.form.english);
          this.fnCross()
          this.fnCross2()
        }
          this.scalculate(1, i)
      },
      /* 第二语言得分 */
      change1(ev) {
        const t = ev.target.dataset.index
        const e = this.franceIndex
        const tt = this.type
        if (t == 1) {
          const y = this.f.hear = this.fnReg(ev.target.value)
          let l = 0
          let g = 10
          if (e == 8) {
            if (tt == 1) {
              this.fnSipei2(y, t)
            } else {
              this.fnSipei1(y, t)
            }
          } else if(e == 1) {
            this.resetFrance()
          } else {
  
            if ((e == 10 && y >= 523) || (e == 9 && y >= 298) || (e == 7 && 8 <= y)) {
              l = 6
              g = 10
            }
             else if ((e == 10 && y >= 458 && y < 523) || (e == 9 && y >= 248 && y < 298) || (e == 7 && 6 <= y && y < 8)) {
              l = 3
              g = 7
            } else if ((e == 10 && y >= 369 && y < 458) || (e == 9 && y >= 181 && y < 248) || (e == 7 && 5 <= y && y < 6)) {
              l = 1
              g = 5
            } else if ( '' == y ) {
              l = 0
              g = 0
            } else {
              l = 0
              g = 4
            }
            this.eachf[0].vs = l
            this.eachf[0].vg = g
          }
        } else if (t == 2) {
          const y = this.f.speak = this.fnReg(ev.target.value)
          if (this.franceIndex == 8) {
            this.fnSipei1(y, t)
          } else if(this.franceIndex == 1) {
            this.resetFrance()
          } else {
            this.franceFamat(y,t)
          }
        } else if (t == 4) {
          const y = this.f.write = this.fnReg(ev.target.value)
          if (this.franceIndex == 8) {
            this.fnSipei1(y, t)
          } else if(this.franceIndex == 1) {
            this.resetFrance()
          } else {
            this.franceFamat(y,t)
          }
        } else {
          const y = this.f.read = this.fnReg(ev.target.value)
          if (this.franceIndex == 8) {
            this.fnSipei1(y, t)
          } else if(this.franceIndex == 1) {
            this.resetFrance()
          } else {
          let l = 0
          let g = 10
          if ((e == 10 && y >= 524) || (e == 9 && y >= 248) || (e == 7 && 7 <= y)) {
            l = 6
            g = 10
          } else if ((e == 10 && y >= 453 && y < 524) || (e == 9 && y >= 208 && y < 248) || ( e == 7 && 7 > y && y >= 6 )) {
            l = 3
            g = 7
          } else if ((e == 10 && y >= 375 && y < 453) || (e == 9 && y >= 151 && y < 208) || ( e == 7 && 4 <= y && y < 6 )) {
            l = 1
            g = 5
          } else if ( '' == y ) {
            l = 0
            g = 0
          } else {
            l = 0
            g = 4
          }
          this.eachf[2].vs = l
          this.eachf[2].vg = g
          }
        }
        this.form.french = this.inputFarmat(this.french,this.eachf, this.f)
        this.scalculate(2)
        this.fnCross()
      },
      inputFarmat(d, a, e) {
        let c = 'CLB'
        let f = '分'
        return d + ' -- 听：' + (e.hear?(c+ a[0].vg +','+ a[0].vs + f):'0') + ', -- 说: ' + (e.speak?(c+a[1].vg  +','+ a[1].vs + f):'0') + ', -- 读: ' + (e.read?(c+a[2].vg  +','+ a[2].vs + f):'0') + ', -- 写: ' + (e.write?(c+a[3].vg  +','+ a[3].vs + f):'0')
      },
      /* 第一语言算分格式化 */
      farmat(y,t) {
        const e = this.englishIndex
        const i = this.englishType
        const tt = this.type
        let l = 0
        let g = 0
        if ((e == 10 && y > 15) || (e == 9 && y >= 393) || e == 7 && 7.5 <= y) {
          l = i == 9 ? 5 : tt == 1?34: 32
          g = 10
        } else if ((e == 10 && y >= 14 && y <= 15) || (e == 9 && y >= 371 && y < 393) || ( e == 7 && 7.5 > y && y >= 7 )) {
          l = i == 9 ? 5 : tt == 1?31: 29
          g = 9
        } else if ((e == 10 && y >= 12 && y < 14) || (e == 9 && y >= 349 && y < 371) || ( e == 7 && 6.5 <= y && y < 7 )) {
          l = i == 9 ? 3 : tt == 1?23: 22
          g = 8
        } else if ((e == 10 && y >= 10 && y < 12) || (e == 9 && y >= 310 && y < 349) || ( e == 7 && y < 6.5 && y >= 6 )) {
          l = i == 9 ? 3 : tt == 1?17: 16
          g = 7
        } else if ((e == 10 && y >= 7 && y < 10) || (e == 9 && y >= 271 && y < 310) || ( e == 7 && y < 6 && y >= 5.5 )) {
          l = i == 9 ? 1 : tt == 1?9: 8
          g = 6
        } else if ((e == 10 && y >5 && y < 7) || (e == 9 && y >= 226 && y < 271) || ( e == 7 && y < 5.5 && y >= 5 )) {
          l = i == 9 ? 1 : 6
          g = 5
        } else if ( '' == y ) {
          l = 0
          g = 0
        } else {
          l = i == 9 ? 0 : 6
          g = 4
        }
        if (i == 9) {
          this.eachEn1[t-1].vs = l
          this.eachEn1[t-1].vg = g
        } else {
          this.eachEn[t-1].vs = l
          this.eachEn[t-1].vg = g
        }
      },
      farmat1(y,e) {
        const i = this.englishType
        const tt = this.type
        let l = 0
        let g = 10
        if ((e == 10 && y >= 549) || (e == 9 && y >= 316) || (e == 7 && 8.5 <= y)) {
              l = i == 9 ? 5 : tt == 1?34:32
              g = 10
            }
             else if ((e == 10 && y >= 523 && y < 549) || (e == 9 && y >= 298 && y < 316) || (e == 7 && 8 <= y && y < 8.5)) {
              l = i == 9 ? 5 : tt == 1?31:29
              g = 9
            } else if ((e == 10 && y >= 503 && y < 523) || (e == 9 && y >= 280 && y < 298) || (e == 7 && 7.5 <= y && y < 8)) {
              l = i == 9 ? 3 : tt == 1?23: 22
              g = 8
            } else if ((e == 10 && y >= 458 && y < 503) || (e == 9 && y >= 249 && y < 280) || (e == 7 && 6 <= y&& y<7.5)) {
              l = i == 9 ? 3: tt == 1?17 : 16
              g = 7
            } else if ((e == 10 && y >= 398 && y < 458) || (e == 9 && y >= 217 && y < 249) || (e == 7 && 5.5 <= y&& y<6)) {
              l = i == 9 ? 1 : tt == 1?9: 8
              g = 6
            } else if ((e == 10 && y >= 369 && y < 398) || (e == 9 && y >= 181 && y < 217) || (e == 7 && 5 <= y&& y<5.5)) {
              l = i == 9 ? 1 : 6
              g = 5
            } else if ( '' == y ) {
              l = 0
              g = 0
            } else {
              l = i == 9 ? 0 : 6
              g = 4
            }
            if (i == 9) {
              this.eachEn1[0].vs = l
              this.eachEn1[0].vg = g
            } else {
              this.eachEn[0].vs = l
              this.eachEn[0].vg = g
            }
      },
      farmat2(y,e) {
        const i = this.englishType
        const tt = this.type
        let l = 0
          let g = 10
          if ((e == 10 && y >= 549) || (e == 9 && y >= 263) || (e == 7 && 8 <= y)) {
            l = i == 9 ? 5 : tt == 1?34: 32
            g = 10
          } else if ((e == 10 && y >= 524 && y < 549) || (e == 9 && y >= 248 && y < 263) || ( e == 7 && 8 > y && y >= 7 )) {
            l = i == 9 ? 5 : tt == 1?31: 29
            g = 9
          } else if ((e == 10 && y >= 499 && y < 524) || (e == 9 && y >= 233 && y < 248) || ( e == 7 && 6< y && y < 7 )) {
            l = i == 9 ? 3 : tt == 1?23: 22
            g = 8
          } else if ((e == 10 && y >= 453 && y < 499) || (e == 9 && y >= 207 && y < 233) || ( e == 7 && y <= 6&& y>5 )) {
            l = i == 9 ? 3 : tt == 1?17: 16
            g = 7
          } else if ((e == 10 && y >= 406 && y < 453) || (e == 9 && y >= 181 && y < 207) || (  e == 7 && y<=5&&y>4 )) {
            l = i == 9 ? 1 : tt == 1?9: 8
            g = 6
          } else if ((e == 10 && y >= 375 && y < 406) || (e == 9 && y >= 151 && y < 181) || ( e == 7 && y<=4&&y>3.5 )) {
            l = i == 9 ? 1 : 6
            g = 5
          } else if ( '' == y ) {
            l = 0
            g = 0
          } else {
            l = i == 9 ? 0 : 6
            g = 4
          }
          if (i == 9) {
              this.eachEn1[2].vs = l
              this.eachEn1[2].vg = g
            } else {
              this.eachEn[2].vs = l
              this.eachEn[2].vg = g
            }
      },
      /* 第二语言算分格式化 */
      franceFamat(y, t) {
        const e = this.franceIndex
        let l = 0
        let g = 0
        if ((e == 10 && y > 15) || (e == 9 && y >= 371) || e == 7 && 7 <= y) {
          l = 6
          g = 10
        } else if ((e == 10 && y >= 14 && y <= 15) || (e == 9 && y >= 310 && y < 371) || ( e == 7 && 7 > y && y >= 6 )) {
          l = 3
          g = 7
        } else if ((e == 10 && y >= 12 && y < 14) || (e == 9 && y >= 226 && y < 310) || ( e == 7 && 5 <= y && y < 6 )) {
          l = 1
          g = 5
        } else if ( '' == y ) {
          l = 0
          g = 0
        } else {
          l = 0
          g = 4
        }
        this.eachf[t-1].vs = l
        this.eachf[t-1].vg = g
      },
      /* 第一语言思培算分 */
      fnSipei(y, t ) {
        const tt = this.type
        const i = this.englishType
        let l = 0
        let g = 0
         if (10 <= y) {
               l = i == 9 ? 5 : tt == 1?34: 32
               g = 10
             } else if ( 8 < y && y < 10 ) {
               l = i == 9 ? 5 : tt == 1?31: 29
               g = 9
             } else if ( 8 == y ) {
               l = i == 9 ? 3 :tt == 1?23:  22
               g = 8
             } else if ( 6 < y && y < 8 ) {
               l = i == 9 ? 3 : tt == 1?17: 16
               g = 7
             } else if ( 6 == y) {
               l = i == 9 ? 1 :tt == 1?9:  8
               g = 6
             } else if ( 4 < y&& y < 6 ) {
               l = i == 9 ? 1 : 6
               g = 5
             } else if ( '' == y) {
               l = 0
               g = 0
             } else {
               l = i == 9 ? 0 : 6
               g = 4
             }
             if (i == 9) {
              this.eachEn1[t-1].vs = l
              this.eachEn1[t-1].vg = g
            } else {
              this.eachEn[t-1].vs = l
              this.eachEn[t-1].vg = g
            }
      },
      /* 第二语言思培算分 单身*/
      fnSipei2(y, t ) {
        let l = 0
        let g = 0
         if (10 <= y) {
               l = 6
               g = 10
             } else if ( 8 < y && y < 10 ) {
               l = 6
               g = 9
             } else if ( 8 == y ) {
               l = 3
               g = 8
             } else if ( 6 < y && y < 8 ) {
               l = 3
               g = 7
             } else if ( 6 == y) {
               l = 1
               g = 6
             } else if ( 4 < y&& y < 6 ) {
               l = 1
               g = 5
             } else if ( '' == y) {
               l = 0
               g = 0
             } else {
               l = 0
               g = 4
             }
             this.eachf[t-1].vs = l
              this.eachf[t-1].vg = g
      },
       /* 第二语言思培算分 已婚*/
      fnSipei1(y, t) {
        let l = 0
        let g = 0
        if (9 <= y) {
          l = 6
          g = 10
        } else if ( 6.5 <= y && y < 9 ) {
          l = 3
          g = 9
        } else if ( 4.5 < y && y < 6.5 ) {
          l = 1
          g = 7
        } else if ( '' == y) {
          l = 0
          g = 0
        } else {
          l = 0
          g = 4
        }
        this.eachf[t-1].vs = l
        this.eachf[t-1].vg = g
      },
      /* 只允许输入数字和小数点 */
      fnReg(e) {
        const reg = /[^\d.]/g;
        const t = e.replace(reg, "")
        return t
      },
      /* 每项语言得分汇总*/
      scalculate(n, i = 0) {
        if (n == 1) {
          if (i == 9) {
            this.enTotal1 = this.farmatScore(this.eachEn1)
            this.calculate(this.enTotal1, 9)
          } else {
            this.enTotal = this.farmatScore(this.eachEn)
            this.calculate(this.enTotal, 4)
          }
        } else {
          let s = this.farmatScore(this.eachf)
          this.fTotal = s > 22 ? 22 : s
          this.calculate(this.fTotal, 5)
        }
        
      },
      farmatScore(arr, i = 0) {
        let s = 0
        arr.map(item =>{
          s += Number(item.vs)
        })
        if(i == 1) {
          s = s > 50 ? 50 : s
        }
        return s
      },
      resets(n, i = 0) {
        if (n == 1) {
          if (i == 4) {
            this.eachEn.map(item => {
                item.vs = 0
            })
          } else {
            this.eachEn1.map(item => {
                item.vs = 0
            })
          }
        } else {
           this.eachf.map(item => {
              item.vs = 0
          })
        }
      },
      resetFrance() {
        this.f = { hear: '', speak: '', read: '', write: '', }
        this.resets(2)
        this.fTotal = 0
      },
      resetData() {
        const arr1 = []
        for (let i = 0; i < 17; i++) {
          let d = {
            v: 0
          }
          arr1.push(d)
        }
        this.type= 0
        this.total= arr1
        this.englishIndex= 0
        this.englishType= 0
        this.englishType1= 0
        this.englishType2= 0
        this.franceIndex= 0
        this.english= ''
        this.english1= ''
        this.french= ''
        this.eachEn= [ { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, ]
        this.eachEn1= [ { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, ]
        this.eachf= [ { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, { vg: '', vs: 0 }, ]
        this.enTotal= 0
        this.fTotal= 0
        this.enTotal1= 0
        this.en= { hear: '', speak: '', read: '', write: '', }
        this.en1= { hear: '', speak: '', read: '', write: '', }
        this.f= { hear: '', speak: '', read: '', write: '', }
        this.addTotal= 0
        this.addIndex= false
        this.addScore= [{v:0},{v:0}, {v: 0}, {v: 0}, {v: 0}]
        this.crossScore= [{vs:0},{vs:0}]
        this.crossScoreToatl= 0
        this.crossScore1= [{vs:0},{vs:0}]
        this.crossScoreToatl1= 0
        this.form= {
          marriage: '',
          age: '',
          education: '',
          spouse: '',
          english: '',
          english1: '',
          french: '',
          timing: '',
          danbao: '',
          xueli: '',
          experience: '',
          experience1: '',
          experience2: '',
          phone: '',
          wechat: '',
          email: '',
          score: 0,
        }
        this.relative= ''
        this.educationType= 0
        this.timing = false
        this.borther = false
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
      .ee{
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
      span.ant-radio + *{
        white-space: initial
      }
    }
  .ee{
    .bs{
      position: relative;
      top: -30px;
      padding-bottom: 30px;
      .sysBColor{
        background-color: #001E4F!important;
        justify-content: flex-end;
        &.ant-form-item{
          .ant-form-item-control-wrapper {
            background-color: transparent!important;
          }
        .ant-form-item-label > label::after{
          content: none
        }
      }
      }
      .h105{
        height: 105px;
        line-height: 105px;
      }
      .ant-form-item{
        &.submit{
          .ant-form-item-control{
            justify-content: center;
            text-align: center;
          }
        }
        .ant-form-item-control-wrapper {
          background-color: #fff;
        }
        &.white{
          .ant-form-item-label{
            white-space: normal;
            padding: 0 60px
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
              line-height: 105px;
             .ant-radio-wrapper.f-b{
               display: flex;
               border-bottom: 0.01rem solid #e8e8e8;
               line-height: 105px;
               margin-right: 0;
               padding-right: 40px;
               span{
                 &:last-child{
                   flex: 1;
                   .f-m-width{
                     max-width: 88px;
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
          display: flex;
          margin-right: 30px;
        }
        .ant-form-item-children{
          width: 100%;
          .f-m-width{
            max-width: 323px
          }
        }
      }
    }
  .ant-form {
    .ant-radio-wrapper{
      display: inline-flex;
      align-items: center;
      margin-right: 35px;
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
  .ant-input-suffix{
    color: #bbb;
    font-size: 18px
  }
  .ant-input{
    height: 60px;line-height: 60px;font-size: 22px;
  }
}
</style>
<style lang="stylus" scoped>
.container
  &.ismobile
    .ee
      .ant-form-item
        display block
  .ee
    background: linear-gradient(to bottom,rgba(149,214,242,0.2), rgba(255,255,255,0.2))
    .ant-form-item
      display flex
      align-items: center;
      margin-bottom 0
      height initial
      background-color: #E7FBFF
</style>
<!--
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2021-03-23 17:22:44
-->
<template>
  <div class="container">
    <a-skeleton />
      <a-skeleton />
      <a-skeleton />
  </div>
</template>

<script>

  export default {
    head() {
      return {
        title: "Express Entry打分系统"
      };
    },
    data() {
      return {}
    },

    mounted() {
      this.isMobile = this.storage.mb();
    },
    methods: {}
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
/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-08 12:21:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-15 07:22:07
 */
import Vue from "vue";
import Storage from "good-storage";
var storage = {
  install(Vue) {
    Vue.prototype.storage = {
      set(key,value){
        Storage.set(key,value);
      },
      get(key) {
        return Storage.get(key);
      },
      remove(key) {
        Storage.remove(key);
      },
      mb: () => {
        let flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        // console.log(navigator.language||navigator.userLanguage);
        return flag ? true : false;
      },
      lang:() => {
        // let lang = navigator.language || navigator.userLanguage
        // let l = 'zh' == lang? 'zh-CN':lang
        let l = 'zh-CN'
        if(!Storage.get('lang')){
          Storage.set('lang',l)
        }
        return Storage.get('lang') || l
      }
    };
  }
};
Vue.use(storage);

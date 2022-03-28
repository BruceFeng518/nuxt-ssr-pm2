/*
 * @Descripttion: 严肃声明：本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！ 违者使用者必究！ Copyright © 2017 - 2020 all rights reserved 版权所有，侵权必究！
 * @version: 2.0
 * @Author: 毅源泉科技 冯勤毅
 * @Date: 2020-12-08 13:00:01
 */
import axios from "axios";
import qs from "qs";
import { message } from 'ant-design-vue';
// import Storage from "good-storage";
// const lang = Storage.get('lang')
const lang = 'zh-CN';
// console.log(lang);
const service = axios.create({
  baseURL: process.env.baseUrl, // url = base url + request url
  timeout: 5000 // request timeout
})
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    
    if (config.method == "post") {
      if (!config.data) {
        config.data = {};
      }
      config.data = Object.assign({lang}, config.data)
      config.data = qs.stringify(config.data);
    } else if (config.method == "get") {
    
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 业务逻辑错误
    if (res.code !== 0) {
      return Promise.reject(new Error(res.msg || ''))
    } else {
      return res.data
    }
  },
  error => {
    // message.error(error.msg || 'Error');
    return Promise.reject(error)
  }
)
export default service;

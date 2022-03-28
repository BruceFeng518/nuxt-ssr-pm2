/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-25 08:25:44
 * @LastEditors: 毅源泉科技
 * @LastEditTime: 2022-03-28 16:22:38
 */
module.exports = {
  development: {
    API_BASE_URL: 'http://gobright',  //测试服务器地址
    ADMIN_API_BASE_URL: 'http://gobright/'   //测试服务器地址
  },
  production: {
    API_BASE_URL: 'http://backend.test.com',  // 正式服务器地址
    ADMIN_API_BASE_URL: 'https://www.test.com/'  // 正式服务器地址
  }
}
 
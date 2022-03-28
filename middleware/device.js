/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-17 11:19:10
 * @LastEditors: Bruce Feng
 * @LastEditTime: 2020-12-17 11:44:06
 */
import { deviceType } from "~/assets/utils/deviceType";
export default function(context) {
 // @ts-ignore
 context.userAgent = process.server
  ? context.req.headers["user-agent"]
  : navigator.userAgent;
 // 给全局上下文添加一个属性来保存我们返回的匹配信息
 context.deviceType = deviceType(context.userAgent);
 // 这里注入到store,是因为我部分页面需要判断机型请求不同的数据,
 // 你们没有用到的话可以移除
 context.store.commit("SET_DEVICE_TYPE", context.deviceType);

 // 若是判断UA非移动端的,就在这里做处理了..
 // context.redirect(status,url) 这个可以重定向到外部网站
 // 若是内部访问可以直接用router对象push
 if (context.deviceType.type === "pc") {
  // context.redirect(301,'https://wwww.baidu.com')
 }
}
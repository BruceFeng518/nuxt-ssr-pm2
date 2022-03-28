/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-11-22 15:34:51
 * @LastEditors: Bruce Feng
 * @LastEditTime: 2021-01-03 00:15:19
 */
// import Cookies from 'js-cookie'
import { getEncrypt } from './encrypt'
import defaultSettings from './settings'
// const TokenKey = 'Admin-Token'
const MainUrlKey = 'Main-url'
/**
 * 获取token
 */
// export function getToken() {
//   return Cookies.get(TokenKey)
// }

/**
 * 设置token
 * @param {*} token
 */
// export function setToken(token) {
//   return Cookies.set(TokenKey, token, { expires: defaultSettings.cookieExpires })
// }

/**
 * 删除token
 */
// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }
/**
 * 获取maindata
 */
export function getMaindata() {
  return Cookies.get(MainUrlKey)
}

/**
 * 设置setMaindata
 * @param {*} maindata
 */
export function setMaindata(maindata) {
  return Cookies.set(MainUrlKey, maindata)
}
/**
 * 数据签名
 * @param {*} obj
 */
export function getSignature(obj) {
  let encrypt = {}
  if (obj) {
    encrypt = obj
  }
  // 签名
  const signature = getEncrypt(encrypt, defaultSettings.appSecret)
  encrypt.signature = signature
  return encrypt
}

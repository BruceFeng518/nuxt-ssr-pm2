/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-10 23:02:40
 * @LastEditors: Bruce Feng
 * @LastEditTime: 2020-12-15 00:12:29
 */

export default ({ isHMR, app, store, error }) => {
    if ( isHMR ) return  //是否是通过模块热替换 webpack hot module replacement (仅在客户端以 dev 模式)
    const locale = store.getters.locale || app.i18n.fallbackLocale
    if (!store.state.locales.includes(locale)) {
      return error({ message: 'This page could not be found.', statusCode: 404 })
    }
    store.commit('SET_LANG', locale)
    app.i18n.locale = locale
  }
  
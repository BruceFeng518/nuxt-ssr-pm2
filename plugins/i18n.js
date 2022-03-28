/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-10 07:30:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-17 07:42:56
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Storage from "good-storage";
Vue.use(VueI18n)

export default ({ app, store }) => {
  let locale = Storage.get('lang') || store.getters.locale
    app.i18n = new VueI18n({
        locale,
        fallbackLocale: locale,  // 我这里默认语言为中文
        messages: {
            'en': require('@/locales/en.json'),
            'zh-CN': require('@/locales/zh-CN.json')
        },
        silentTranslationWarn: true
    })

    app.i18n.path = (link) => {
        // 如果是默认语言，就省略
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }
        return `/${link}?lang=/${app.i18n.locale}`
    }
}

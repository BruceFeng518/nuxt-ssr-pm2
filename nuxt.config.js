/*
 * @Descripttion: 通用后台
 * @version: 0.0.1
 * @@Company: yiyuanquan
 * @Author: Bruce Feng
 * @Date: 2020-12-08 11:51:43
 * @LastEditors: 毅源泉科技
 * @LastEditTime: 2022-03-28 17:41:22
 */
const env = require('./env');
const path = require('path')
const fs = require('fs')
module.exports = {
  telemetry: false,
  server: {
    port: 3001, // default: 3000,修改为了3008
    host: "localhost", // default: localhost
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'test.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'test.crt'))
    }
  },
  env: {
    baseUrl: env[process.env.NODE_ENV].API_BASE_URL,
    apiBaseUrl: env[process.env.NODE_ENV].ADMIN_API_BASE_URL || ''
  },
  head: {
    title: '明途国际',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { name: 'format-detection', content: 'telephone=yes' },
      // { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' },//本地没配置https请把行注释掉
      // { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },//本地没配置https请把行注释掉
      { hid: 'description', name: 'description', content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//at.alicdn.com/t/font_2267412_12yrb2srs76p.css"
      },
      // {  rel:'stylesheet' , href:'//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons'  }
    ],
    script: [
      { src: "/js/flexible.js", type: "text/javascript", charset: "utf-8" },
      { src: "//cdn.callrail.com/companies/443287781/c60e36e21fd5539092e2/12/swap.js", type: "text/javascript", charset: "utf-8" }
    ]
  },
 /*
   ** Customize the progress-bar color
   */
  loading: { color: "#001E4F" },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'ant-design-vue/dist/antd.less',
    'ant-design-vue/lib/carousel/style/css',
    'ant-design-vue/lib/spin/style/css',
    'ant-design-vue/lib/tag/style/css',
    'ant-design-vue/lib/icon/style/css',
    'ant-design-vue/lib/input/style/css',
    'ant-design-vue/lib/button/style/css',
    'ant-design-vue/lib/modal/style/css',
    'ant-design-vue/lib/tooltip/style/css',
    'ant-design-vue/lib/steps/style/css',
    'ant-design-vue/lib/collapse/style/css',
    'ant-design-vue/lib/divider/style/css',
    'ant-design-vue/lib/message/style/css',
    'ant-design-vue/lib/back-top/style/css',
    'ant-design-vue/lib/card/style/css',
    'ant-design-vue/lib/dropdown/style/css',
    'ant-design-vue/lib/layout/style/css',
    'ant-design-vue/lib/menu/style/css',
    'ant-design-vue/lib/row/style/css',
    'ant-design-vue/lib/col/style/css',
    'ant-design-vue/lib/tabs/style/css',
    'ant-design-vue/lib/upload/style/css',
    'ant-design-vue/lib/empty/style/css',
    'ant-design-vue/lib/form/style/css',
    'ant-design-vue/lib/form-model/style/css',
    'ant-design-vue/lib/breadcrumb/style/css',
    'ant-design-vue/lib/checkbox/style/css',
    'ant-design-vue/lib/radio/style/css',
    'ant-design-vue/lib/table/style/css',
    'ant-design-vue/lib/select/style/css',
    'ant-design-vue/lib/popover/style/css',
    'ant-design-vue/lib/drawer/style/css',
    'ant-design-vue/lib/skeleton/style/css',
    'ant-design-vue/lib/affix/style/css',
    'ant-design-vue/lib/pagination/style/css',
    'ant-design-vue/lib/progress/style/css',
    'ant-design-vue/lib/date-picker/style/css',
    'ant-design-vue/lib/cascader/style/css',
    "~/assets/css/animate.min.css",
    "~/assets/css/common.css",
    "vue-material/dist/vue-material.min.css"
  ],
  router: {  //路由配置
    middleware: ['i18n']  //路由中间件
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    "@/plugins/material",
    { src: "@/plugins/nprogress", ssr: false },
    { src: "@/plugins/vue-lazyload", ssr: true },
    { src: "@/plugins/i18n"},
    // { src: "@/plugins/vue-infinite-scroll", ssr: false },
    // {
    //   src: '@/plugins/ga',
    //   mode: 'client'               //只在客户端生效
    // },
    { src: '@/plugins/gtm', mode: 'client' },
    { src: "@/plugins/bus", ssr: false },
    { src: "@/plugins/components", ssr: false },
    { src: "@/plugins/util", ssr: false,mode:"client"},
    { src: "@/plugins/seamlessScroll", ssr: false },
    { src: "@/plugins/wow", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    proxy: true,
    credentials: true
  },
  proxy: {
    "/api": {
      target: 'https://www.test.com/', //生产环境，开发环境不用管
      pathRewrite: {
        "^/api": "/",changeOrigin: true
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ["axios", "vue-lazyload", "vue-material"],
    extractCSS: { allChunks: true,ignoreOrder: true},
    postcss: [
      require("postcss-px2rem")({
        remUnit: 100
      })
    ],
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#001E4F',
          'link-color': '#001E4F'
        }
      }
    }
  }
}

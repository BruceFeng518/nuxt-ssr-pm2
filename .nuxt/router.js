import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _766e8db2 = () => interopDefault(import('..\\pages\\apply\\index.vue' /* webpackChunkName: "pages/apply/index" */))
const _7ebe99aa = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "pages/article/index" */))
const _9ea41c9c = () => interopDefault(import('..\\pages\\assessment\\index.vue' /* webpackChunkName: "pages/assessment/index" */))
const _5fa342ef = () => interopDefault(import('..\\pages\\bcpnp\\index.vue' /* webpackChunkName: "pages/bcpnp/index" */))
const _140df780 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _c82685d4 = () => interopDefault(import('..\\pages\\download.vue' /* webpackChunkName: "pages/download" */))
const _219fcf14 = () => interopDefault(import('..\\pages\\ee\\index.vue' /* webpackChunkName: "pages/ee/index" */))
const _28ff63f6 = () => interopDefault(import('..\\pages\\immigration\\index.vue' /* webpackChunkName: "pages/immigration/index" */))
const _6b51c383 = () => interopDefault(import('..\\pages\\job\\index.vue' /* webpackChunkName: "pages/job/index" */))
const _00013ec0 = () => interopDefault(import('..\\pages\\school\\index.vue' /* webpackChunkName: "pages/school/index" */))
const _a14ae712 = () => interopDefault(import('..\\pages\\study\\index.vue' /* webpackChunkName: "pages/study/index" */))
const _57833653 = () => interopDefault(import('..\\pages\\visa\\index.vue' /* webpackChunkName: "pages/visa/index" */))
const _5afec983 = () => interopDefault(import('..\\pages\\work\\index.vue' /* webpackChunkName: "pages/work/index" */))
const _6c448329 = () => interopDefault(import('..\\pages\\assessment\\study.vue' /* webpackChunkName: "pages/assessment/study" */))
const _499afe92 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _2c3c2844 = () => interopDefault(import('..\\pages\\immigration\\_id.vue' /* webpackChunkName: "pages/immigration/_id" */))
const _b7601db0 = () => interopDefault(import('..\\pages\\school\\_id.vue' /* webpackChunkName: "pages/school/_id" */))
const _123f409f = () => interopDefault(import('..\\pages\\study\\_id.vue' /* webpackChunkName: "pages/study/_id" */))
const _6500b17b = () => interopDefault(import('..\\pages\\visa\\_id.vue' /* webpackChunkName: "pages/visa/_id" */))
const _a439df98 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/apply",
    component: _766e8db2,
    name: "apply"
  }, {
    path: "/article",
    component: _7ebe99aa,
    name: "article"
  }, {
    path: "/assessment",
    component: _9ea41c9c,
    name: "assessment"
  }, {
    path: "/bcpnp",
    component: _5fa342ef,
    name: "bcpnp"
  }, {
    path: "/contact",
    component: _140df780,
    name: "contact"
  }, {
    path: "/download",
    component: _c82685d4,
    name: "download"
  }, {
    path: "/ee",
    component: _219fcf14,
    name: "ee"
  }, {
    path: "/immigration",
    component: _28ff63f6,
    name: "immigration"
  }, {
    path: "/job",
    component: _6b51c383,
    name: "job"
  }, {
    path: "/school",
    component: _00013ec0,
    name: "school"
  }, {
    path: "/study",
    component: _a14ae712,
    name: "study"
  }, {
    path: "/visa",
    component: _57833653,
    name: "visa"
  }, {
    path: "/work",
    component: _5afec983,
    name: "work"
  }, {
    path: "/assessment/study",
    component: _6c448329,
    name: "assessment-study"
  }, {
    path: "/article/:id",
    component: _499afe92,
    name: "article-id"
  }, {
    path: "/immigration/:id",
    component: _2c3c2844,
    name: "immigration-id"
  }, {
    path: "/school/:id",
    component: _b7601db0,
    name: "school-id"
  }, {
    path: "/study/:id",
    component: _123f409f,
    name: "study-id"
  }, {
    path: "/visa/:id",
    component: _6500b17b,
    name: "visa-id"
  }, {
    path: "/",
    component: _a439df98,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

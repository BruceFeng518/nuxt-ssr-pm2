import Vue from 'vue'

const components = {
  Advantage: () => import('../..\\components\\Advantage\\Advantage.vue' /* webpackChunkName: "components/advantage" */).then(c => c.default || c),
  ArticleList: () => import('../..\\components\\ArticleList\\ArticleList.vue' /* webpackChunkName: "components/article-list" */).then(c => c.default || c),
  Banner: () => import('../..\\components\\Banner\\banner.vue' /* webpackChunkName: "components/banner" */).then(c => c.default || c),
  BannerBox: () => import('../..\\components\\BannerBox\\BannerBox.vue' /* webpackChunkName: "components/banner-box" */).then(c => c.default || c),
  Btn: () => import('../..\\components\\Btn\\Btn.vue' /* webpackChunkName: "components/btn" */).then(c => c.default || c),
  Breadcrumb: () => import('../..\\components\\Breadcrumb\\Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => c.default || c),
  Case: () => import('../..\\components\\Case\\Case.vue' /* webpackChunkName: "components/case" */).then(c => c.default || c),
  Contact: () => import('../..\\components\\Contact\\contact.vue' /* webpackChunkName: "components/contact" */).then(c => c.default || c),
  Footer: () => import('../..\\components\\Footer\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Form: () => import('../..\\components\\Form\\form.vue' /* webpackChunkName: "components/form" */).then(c => c.default || c),
  FormBox: () => import('../..\\components\\FormBox\\FormBox.vue' /* webpackChunkName: "components/form-box" */).then(c => c.default || c),
  Gird: () => import('../..\\components\\Gird\\Gird.vue' /* webpackChunkName: "components/gird" */).then(c => c.default || c),
  Gird2: () => import('../..\\components\\Gird\\Gird2.vue' /* webpackChunkName: "components/gird-2" */).then(c => c.default || c),
  Gird3: () => import('../..\\components\\Gird\\Gird3.vue' /* webpackChunkName: "components/gird-3" */).then(c => c.default || c),
  Header: () => import('../..\\components\\Header\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Hold: () => import('../..\\components\\Hold\\Hold.vue' /* webpackChunkName: "components/hold" */).then(c => c.default || c),
  Job: () => import('../..\\components\\Job\\Job.vue' /* webpackChunkName: "components/job" */).then(c => c.default || c),
  Left: () => import('../..\\components\\Left\\Left.vue' /* webpackChunkName: "components/left" */).then(c => c.default || c),
  Left1: () => import('../..\\components\\Left\\Left1.vue' /* webpackChunkName: "components/left-1" */).then(c => c.default || c),
  Loading: () => import('../..\\components\\Loading\\Loading.vue' /* webpackChunkName: "components/loading" */).then(c => c.default || c),
  Map: () => import('../..\\components\\Map\\Map.vue' /* webpackChunkName: "components/map" */).then(c => c.default || c),
  News: () => import('../..\\components\\News\\News.vue' /* webpackChunkName: "components/news" */).then(c => c.default || c),
  News1: () => import('../..\\components\\News\\News1.vue' /* webpackChunkName: "components/news-1" */).then(c => c.default || c),
  NoData: () => import('../..\\components\\NoData\\NoData.vue' /* webpackChunkName: "components/no-data" */).then(c => c.default || c),
  Scan: () => import('../..\\components\\Scan\\Scan.vue' /* webpackChunkName: "components/scan" */).then(c => c.default || c),
  Search: () => import('../..\\components\\Search\\Search.vue' /* webpackChunkName: "components/search" */).then(c => c.default || c),
  SelfTest: () => import('../..\\components\\SelfTest\\SelfTest.vue' /* webpackChunkName: "components/self-test" */).then(c => c.default || c),
  Tab: () => import('../..\\components\\Tab\\Tab.vue' /* webpackChunkName: "components/tab" */).then(c => c.default || c),
  Tabs: () => import('../..\\components\\Tabs\\Tabs.vue' /* webpackChunkName: "components/tabs" */).then(c => c.default || c),
  Tag: () => import('../..\\components\\Tag\\Tag.vue' /* webpackChunkName: "components/tag" */).then(c => c.default || c),
  Title: () => import('../..\\components\\Title\\title.vue' /* webpackChunkName: "components/title" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

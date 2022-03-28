import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_1ab3b09d from 'nuxt_plugin_plugin_1ab3b09d' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_axios_953d2f80 from 'nuxt_plugin_axios_953d2f80' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_antdui_2b2dca90 from 'nuxt_plugin_antdui_2b2dca90' // Source: ..\\plugins\\antd-ui (mode: 'all')
import nuxt_plugin_material_6995e71b from 'nuxt_plugin_material_6995e71b' // Source: ..\\plugins\\material (mode: 'all')
import nuxt_plugin_nprogress_1a4a3127 from 'nuxt_plugin_nprogress_1a4a3127' // Source: ..\\plugins\\nprogress (mode: 'client')
import nuxt_plugin_vuelazyload_e6901296 from 'nuxt_plugin_vuelazyload_e6901296' // Source: ..\\plugins\\vue-lazyload (mode: 'all')
import nuxt_plugin_i18n_926bd3dc from 'nuxt_plugin_i18n_926bd3dc' // Source: ..\\plugins\\i18n (mode: 'all')
import nuxt_plugin_gtm_caeab2a8 from 'nuxt_plugin_gtm_caeab2a8' // Source: ..\\plugins\\gtm (mode: 'client')
import nuxt_plugin_bus_caead7e8 from 'nuxt_plugin_bus_caead7e8' // Source: ..\\plugins\\bus (mode: 'client')
import nuxt_plugin_components_567e580a from 'nuxt_plugin_components_567e580a' // Source: ..\\plugins\\components (mode: 'client')
import nuxt_plugin_util_925ee814 from 'nuxt_plugin_util_925ee814' // Source: ..\\plugins\\util (mode: 'client')
import nuxt_plugin_seamlessScroll_47297d90 from 'nuxt_plugin_seamlessScroll_47297d90' // Source: ..\\plugins\\seamlessScroll (mode: 'client')
import nuxt_plugin_wow_caea3baa from 'nuxt_plugin_wow_caea3baa' // Source: ..\\plugins\\wow (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"明途国际","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"},{"name":"format-detection","content":"telephone=yes"},{"hid":"description","name":"description","content":"毅源泉科技"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fat.alicdn.com\u002Ft\u002Ffont_2267412_12yrb2srs76p.css"}],"script":[{"src":"\u002Fjs\u002Fflexible.js","type":"text\u002Fjavascript","charset":"utf-8"},{"src":"\u002F\u002Fcdn.callrail.com\u002Fcompanies\u002F443287781\u002Fc60e36e21fd5539092e2\u002F12\u002Fswap.js","type":"text\u002Fjavascript","charset":"utf-8"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_1ab3b09d === 'function') {
    await nuxt_plugin_plugin_1ab3b09d(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_953d2f80 === 'function') {
    await nuxt_plugin_axios_953d2f80(app.context, inject)
  }

  if (typeof nuxt_plugin_antdui_2b2dca90 === 'function') {
    await nuxt_plugin_antdui_2b2dca90(app.context, inject)
  }

  if (typeof nuxt_plugin_material_6995e71b === 'function') {
    await nuxt_plugin_material_6995e71b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nprogress_1a4a3127 === 'function') {
    await nuxt_plugin_nprogress_1a4a3127(app.context, inject)
  }

  if (typeof nuxt_plugin_vuelazyload_e6901296 === 'function') {
    await nuxt_plugin_vuelazyload_e6901296(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_926bd3dc === 'function') {
    await nuxt_plugin_i18n_926bd3dc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gtm_caeab2a8 === 'function') {
    await nuxt_plugin_gtm_caeab2a8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_bus_caead7e8 === 'function') {
    await nuxt_plugin_bus_caead7e8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_components_567e580a === 'function') {
    await nuxt_plugin_components_567e580a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_util_925ee814 === 'function') {
    await nuxt_plugin_util_925ee814(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_seamlessScroll_47297d90 === 'function') {
    await nuxt_plugin_seamlessScroll_47297d90(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_wow_caea3baa === 'function') {
    await nuxt_plugin_wow_caea3baa(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }

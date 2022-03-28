import Storage from "good-storage";
const main_url = process.env.baseUrl
export const state = () => ({
  route: "/",
  path: true,
  key: 0,
  ism: false,
  locales: ['en', 'zh-CN'],
  locale: 'zh-CN',
  device: false,
  menu: null,
  immigrationTab: [],
  overseas: [],
  indexQuick: [],
  main_url: main_url,
  size: Storage.get('size'),
  info: {
    image: []
  }
});

export const actions = {
  // newRoute({ commit }, value) {
  //   commit("NEW_ROUTE", value);
  // },
};
export const getters = {
  route(state) {
    return state.route;
  },
  path(state) {
    return state.path;
  },
  locale(state) {
    return state.locale;
  },
  setKey(state) {
    return state.key;
  },
  isMobile(state) {
    return state.ism;
  },
  menu(state) {
    return state.menu;
  },
  immigrationTab(state) {
    return state.immigrationTab;
  },
  indexQuick(state) {
    return state.indexQuick;
  },
  overseas(state) {
    return state.overseas;
  },
  main_url(state) {
    return state.main_url;
  },
  info(state) {
    return state.info;
  },
  ism(state) {
    return state.ism;
  }
};
export const mutations = {
  NEW_Route(state, str) {
    state.route = str;
  },
  SET_PATH(state, boolean) {
    state.path = boolean;
  },
  SET_KEY(state, key) {
    state.key = key;
  },
  FN_IS_M(state, flag) {
    state.ism = flag;
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_DEVICE_TYPE(state, flag) {
    // console.log(flag);
    state.device = flag;
  },
  SET_MENU(state, arr) {
    state.menu = arr;
  },
  SET_IMMIGRATION(state, arr) {
    state.immigrationTab = arr;
  },
  SET_INDEX_QUICK(state, arr) {
    state.indexQuick = arr;
  },
  SET_OVER_SEA(state, arr) {
    state.overseas = arr;
  },
  SET_MAIN_URL(state, url) {
    state.main_url = url;
  },
  SET_INFO(state, obj) {
    state.info = obj;
  },
  SET_SIZE (state, num) {
    let size = 's_big'
    if (num < 1170 && num > 980) {
      size = 's_middle'
    } else if (num <= 980 && num > 830) {
      size = 's_mall'
      state.ism = false
    } else if (num <= 830 ) {
      size = 'ismobile'
      state.ism = true
    }
    Storage.set('size', size)
    state.size = size;
  }
};

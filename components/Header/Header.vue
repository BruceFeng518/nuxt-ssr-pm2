<template>
  <a-layout-header
    class="header"
    :class="cc()"
  >
    <div class="head dfj" :style="{'height':isMobile?'45px':(-scroll+108)+'px'}">
      <div class="max-width dfjb" :class="{'dfja':isMobile}">
        <div @click="fnRoute" class="logo" :class="{'text-align-l':isMobile}">
        <img
          :class="{'logo_img':isMobile}"
          src="~/static/image/logo.png"
          alt=""
          :style="{'height':isMobile?'35px':((scroll>30?-30:-scroll)+63)+'px'}"
        />
      </div>
        <div v-if="!isMobile" class="dfj">
          <a-menu v-model="current" theme="light" mode="horizontal" :default-selected-keys="['2']" class="dfa">
          <template v-for="(item,index) in list">
            <a-menu-item
              :key="index"
              v-if="hasOneShowingChild(item.children, item)"
              :class="{'mt-menu':index == list.length-2, 'contact': index == list.length-1}"
              >
              <nuxt-link :to="{path:'/'+item.path,query:{id:item.id}}">
                {{ _lang(item.name,item.nickname) }}
              </nuxt-link>
              </a-menu-item
            >
            <a-dropdown  v-else :key="index">
              <a @click="e => e.preventDefault()" class="ant-dropdown-link mst-margin-l-5" :class="{'mt-menu':index == list.length-2}">
                {{  _lang(item.name,item.nickname) }}<a-icon type="down"/>
              </a>
              <a-menu slot="overlay">
                 <template v-for="(child,i) in item.children">
               <a-menu-item v-if="!child.children" :key="`${index}-${i}`"><nuxt-link :to="{path:'/'+ (child.path == 'immigration' || child.path == 'visa'? child.path + `/${child.id}` : child.path),query:{id:child.id, t: _lang(item.name,item.nickname) }}">{{ _lang(child.name,child.nickname) }}</nuxt-link></a-menu-item>
                <a-sub-menu v-else :key="`${index}-${i}`" :title="_lang(child.name,child.nickname)">
                  <a-menu-item
                    :key="`${index}-${i}-${ii}`"
                    v-for="(thirdChild,ii) in child.children"
                  >
                    <nuxt-link :to="{path:'/'+item.path,query:{id:thirdChild.id}}">{{ _lang(thirdChild.name,thirdChild.nickname) }}</nuxt-link>
                  </a-menu-item>
                </a-sub-menu>
                </template>
              </a-menu>
            </a-dropdown>
          </template>
        </a-menu>
        <a-icon @click="onSetLang" type="global" class="global"/>
        </div>
        <a-button v-else  type="primary"
                  @click="showDrawer" size="large">
          <a-icon type="menu-fold" />
        </a-button>
      </div>
    </div>
        <div class="mbile">
          <a-drawer :title="`${locale=='en'?'Menu':'菜单栏'}`"
            placement="right"
            :closable="false"
            @close="onClose"
            :headerStyle="{fontSize:'24px'}"
            :bodyStyle="{padding:0}"
            :visible="visible">

            <a-menu mode="inline"
                    @click="mhandleClick">
                <a-menu-item >
                  <nuxt-link :to="{path:'/'}">首页</nuxt-link>
                </a-menu-item>
              <template v-for="(item, index) in list">
                <a-menu-item v-if="!item.children"
                            :key="index">
                  <nuxt-link :to="{path:'/'+item.path,query:{t:item.id}}">
              {{ _lang(item.name,item.nickname) }}
            </nuxt-link>
                </a-menu-item>
                <a-sub-menu v-else
                            :key="index">
                  <span slot="title"><span>{{_lang(item.name,item.nickname)}}</span></span>
                  <template v-for="sub2 in item.children">
                  <a-menu-item v-if="!sub2.children" :key="sub2.id">
                    <nuxt-link :to="{path:'/'+ (sub2.path == 'immigration' || sub2.path == 'visa'? sub2.path + `/${sub2.id}` : sub2.path),query:{id:sub2.id, t: _lang(item.name,item.nickname) }}">
              {{ _lang(sub2.name,sub2.nickname) }}
            </nuxt-link>
                  </a-menu-item>
                  <a-sub-menu v-else :key="sub2.id" :title="_lang(sub2.name,sub2.nickname)">
                      <a-menu-item v-for="sub3 in sub2.children" :key="sub3.id">  <nuxt-link :to="{path:'/'+item.path,query:{t:sub3.name}}">
              {{ _lang(sub3.name,sub3.nickname) }}
            </nuxt-link></a-menu-item>
                    </a-sub-menu>
                  </template>
                </a-sub-menu>
              </template>
            </a-menu>
             <!-- <div @click="onSetLang" v-if="isMobile" class="mst-margin-l-20 mst-padded-20">{{locale == 'en'?'Switch Chinese':'Switch to English'}}</div> -->
          </a-drawer>
        </div>
  </a-layout-header>
</template>
<script>
import dataJson from "~/static/data";
import api from "~/assets/js/api";
import Storage from "good-storage";
import tree from '~/assets/js/tree'
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    datas: {
      type: Object,
      default: () => {
        return {
          datas: {
            phone: "150-9991-8643",
            logo: require("static/image/logo.png")
          }
        };
      }
    },
    scroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      visible: false,
      current: ["/"],
      openKeys: [''],
      list: [],
      isMobile: false,
      onlyOneChild: {}
    };
  },
  computed: {
    ...mapGetters(["route",'locale']),
    _lang(zh,en) {
      return (zh,en) => {
        return this.locale == 'en'?en:zh
      }
    }
  },
  mounted() {
    this.fetchList();
    this.isMobile = this.storage.mb()
  },
  methods: {
    async fetchList() {
      // let res = await api.category.index();
      let res = dataJson.menu
      if (res) {
        let indexQuick = []
        let arr = tree.listToTreeMulti(res, 0, 'id', 'pid', 'children', { 'delete': false })
        this.list = arr;
        arr.map(item=>{
          item.diyname = item.diyname.split(',')
          if (item.children) {
            item.children.map(d =>{
              if(d.diyname) {
                d.diyname = d.diyname.split(',')
              }
            })
          }
          if(item.id == 1 || item.id == 14 || item.id == 16) {
            indexQuick.push(item)
          }
          if(item.id == 15) {
            indexQuick.splice(1,0,item)
          }
        })
        // console.log(indexQuick);
          this.setIndexQuick(indexQuick)
          this.setMenuImmi(arr[2].children)
          this.setMenuOversea(arr[0].children)
      }
    },
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
    handleClick() {
      this.setKey(0);
    },
    mhandleClick() {
      this.setKey(0);
      this.visible = false;
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    fnRoute() {
      this.$router.push({ path: "/" });
      this.current = ["/"];
    },
    onSetLang() {
      let lang = 'en' == this.locale?'zh-CN':'en'
      Storage.set('lang', lang)
      this.setLang(lang)
      this.$i18n.locale = lang;
      // location.reload()
    },
    onClickKey({key}) {
      console.log(`Click on key ${key}`);
    },
    cc() {
      return ` ${this.isMobile?'ismobile':this.$store.state.size}`
    },
    ...mapMutations({
      newRoute: "NEW_Route",
      setKey: "SET_KEY",
      setLang: "SET_LANG",
      setMenu: "SET_MENU",
      setMenuImmi: "SET_IMMIGRATION",
      setMenuOversea: "SET_OVER_SEA",
      setIndexQuick: "SET_INDEX_QUICK"
    })
  },
  watch: {
    // route(value) {
    //   this.fnCurrent(value);
    // },
    // $route(to, from) {
    //   this.newRoute(to.path);
    // }
  }
};
</script>
<style scoped lang="less">
.header {
  position: fixed;
  width: 100%;
  padding: 0;
  z-index: 200;
  height: initial;
  background: none;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.16);
  .head {
    transition: all ease 0.5s;
    background: #fff;
    .ant-menu-item
    {
      &.contact{
        font-size: 13px;
        a{
          display: inline-block;
          width: 120px;
          background: #001e4f;
          padding: 7px 0;
          border-radius: 10px;
          color: #fff;
        }
      }
      a{
        font-size:18px;
      }
    }
    .ant-dropdown-link{
      color: rgba(0, 0, 0, 0.65);
      font-size: 18px;
    }
    .b{
      height:15px;
    }
    .logo {
      img{
        transition: all ease 0.5s;
        width: initial;
      }
    }
    .global{
      font-size: 24px
    }
  }
  .ant-btn-primary{
    background-color: #001e4f
  }
}
.ant-menu-inline{
  border:0
}

.menu {
  background: none;
  color: #000;
  border: none;
}
.ant-menu-horizontal {
  border-bottom: none;
  font-size: 15px;
  line-height: initial;
}
.ant-menu-horizontal > .ant-menu-submenu-open {
  font-size: 15px;
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected {
  border-bottom-color: #fff;
}
/* .ant-menu-item, .ant-menu-submenu-title{padding:0 80px;font-size: 16px} */
.ant-menu-inline {
  border-left: none;
}
.ant-menu-inline .ant-menu-item {
  height: 60px;
  line-height: 60px;
  font-size: 24px;
}
.ant-dropdown-link.ant-dropdown-trigger,
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
  border-right: 2px solid #ddd;
  padding: 0 20px;
}
.ant-menu-horizontal > a:first-child.ant-dropdown-link.ant-dropdown-trigger{
  border-left: 0;
}
.ant-dropdown-link.ant-dropdown-trigger.mt-menu,
.ant-menu-horizontal > .mt-menu,.ant-menu-horizontal > .contact {
  border-right: 0;
}
.ant-menu-inline .ant-menu-submenu,
.ant-menu-inline .ant-menu-submenu-title {
  padding: 10px 24px 10px 0;
}

</style>

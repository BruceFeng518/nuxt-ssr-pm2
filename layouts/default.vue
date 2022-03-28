<template>
  <div id="components-layout-demo-basic">
    <a-layout id="components-layout-demo-fixed" class="pr">
      <Header :datas="datas" :isMobile="isMobile" ref="header" :scroll="scroll"/>
      <a-layout-content id="content" :style="{'margin-top':isMobile?'45px':(-scroll+108)+'px'}">
            <Contact v-if="datas" class="Contacts" :scroll="scrollHeight"/>
        <nuxt />
      </a-layout-content>
      <div class="hold-footer"></div>
      <div v-if="datas">
        <Footer :datas="datas"/>
      </div>
    </a-layout>
  </div>
</template>
<script>
  import api from "~/assets/js/api";
  export default {
    data () {
      return {
        datas: {},
        scroll: 0,
        fhight: 0,
        scrollHeight: 0,
        path: true,
        isMobile: false,
        lang: 'zh-CN',
        flag: true,
        bottomShow: true,
        backgroundColor: "#fff"
      };
    },
    beforeMount() {
      this.isMobile = this.storage.mb()
    },
    mounted () {
      window.addEventListener("scroll", this.handleScroll);
      this.lang = this.storage.lang()
      this.$store.commit("SET_LANG", this.lang)
      this.$store.commit('SET_DEVICE_TYPE', this.isMobile)
      this.$store.commit("SET_SIZE", document.documentElement.clientWidth)
      // this.system();
      this.$nextTick(()=>{
        window.addEventListener('resize', (res) => { 
          this.$store.commit("SET_SIZE", res.currentTarget.innerWidth)
        });
      })
      if(this.$route.path != '/') {
        this.path = false
      }
    },
    methods: {
      async system() {
        let res = await api.system.list({id:1});
        if(res) {
          res.map(item =>{
            item.image = item.image.split(',')
          })
          this.datas = res[0]
          this.$store.commit("SET_INFO", res[0])
          // this.visiter();
        }
      },
      async visiter () {
        await api.system.visiter();
      },
      handleScroll () {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
          let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
          let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          this.scrollHeight = scrollTop
        // if (this.path) {
          if (scrollTop >59) {
            this.scroll = 59
            if(scrollTop+windowHeight + 70 >= scrollHeight){
            //到了这个就可以进行业务逻辑加载后台数据了
              console.log("到了底部");
              this.bottomShow = false
            } else {
              this.bottomShow = true
            }
          } else {
            this.scroll = scrollTop
          }

        // }
      }
    },
    watch: {
      $route (to, from) {
        this.path = '/' == to.path ? true : false;
        this.$store.commit("SET_PATH", this.path)
      },
    },
    beforeDestroy () {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
}
body{
  font-family: "Roboto";
  color: #001E4F;
  line-height: normal;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
a{color: #333;}
a:not(.md-button):hover {
  text-decoration: none;
}
img {
  width: 100%;
  display:block;
}
ul,li{margin:0;padding:0; list-style: none;}
/* img:hover {
  transform: scale(1.1);
} */
#components-layout-demo-basic {
  width: 100%;
  text-align: center;
  overflow: hidden;
  background: #fff;
}
#components-layout-demo-fixed {
  background: #fff;
}
.ant-drawer-header{background: #f7f7f7;}
.ant-drawer-title{font-size: 24px;}
.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title{
  font-size: 24px;
}
#content{
  margin-top: 184px
}
#content.mtop{
  margin-top: 64px
}
</style>

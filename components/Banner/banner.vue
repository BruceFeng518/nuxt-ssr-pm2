
<template>
  <a-carousel autoplay
              arrows
              dotsClass="dotsClass"
              :dots="dots"
              dotPosition="bottom"
              effect="scrollx"
              :style="{'maxHeight': h}"
              :afterChange="afterChange"
              >
    <!-- <div slot="prevArrow"
         slot-scope="props"
         class="custom-slick-arrow"
         style="left: 10px;zIndex: 1">
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow"
         slot-scope="props"
         class="custom-slick-arrow"
         style="right: 10px">
      <a-icon type="right-circle" />
    </div> -->
    <div v-for="(item, index) in data"
         :key="index"
         class="banner-img">
       <!-- <img v-lazy="$store.state.main_url+item.image" alt=""> -->
       <img :src="item.image" alt="">
    </div>
  </a-carousel>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      },
      url: {
        type: String,
        default: ''
      },
      h: {
        type: String,
        default: "initial"
      },
      mh: {
        type: String,
        default: 'initial'
      },
    },
    data() {
      return {
        dots: false,
        isMobile: false
      }
    },
    mounted () {
      this.isMobile = this.storage.mb()
      this.dots = this.isMobile?false : true;
    },
    created() {
    },
    methods: {
      toNext(i) {
        // this.
      },
      afterChange(e) {
        this.$emit('afterChange', e)
      }
    }
  };
</script>
<style lang="stylus">
.ant-carousel 
  .slick-slide 
    .banner-img
      img
        display: inline-block
  &.ant-carousel 
    .slick-dots-bottom
    &.dotsClass
      width 200px
      margin auto
      height 8px
      bottom 32px
      right 0
      left 0
      z-index 2
      li
        button
          width 28px
          height 8px
          border-radius 30px
          background #fff
        &.slick-active
          button
            background #1CD8BE
</style>

<template>
  <div class="wrap clearfix">
    <div class="fl wrapleft">
      <!-- loop pic -->
      <swiper class="swiperBox" ref="mySwiper" :options="swiperOption" @mouseover.native="mouseEnter()" @mouseout.native="mouseLeave()">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <img :src="slide.pic" alt="banner">
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <!-- tag list -->
      <tag />
    </div>
    <div class="fr wrapright">
        <p>比卡丘</p>
        <p>嫩模广告位</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
    width: 1200px;
    margin: 66px auto 0;
    .wrapleft {
      width: 770px;
      height: 300px;
      margin-top: 69px;
        .swiperBox {
          height: 300px;
          cursor: pointer;
          img {
            width: 100%;
            height: 300px;
          }
        }
    }
    .wrapright p {
      width: 370px;
      background: #fff;
      height: 300px;
      line-height: 300px;
      text-align: center;
      margin-top: 69px;
      color: orangered;
    }
  }
</style>

<script>
import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import axios from 'axios';
import 'swiper/dist/css/swiper.css';
import Tag from '../../components/Tag';

export default {
  data () {
    return {
      bannerList: [],
      swiperOption: {
          notNextTick: true,
          // spaceBetween: 30,
          // effect: 'fade',
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: true,
          loop: true,
          autoplayDisableOnInteraction: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      swiperSlides: []
    };
  },
  components: {
    swiper,
    swiperSlide,
    Tag
  },
  methods: {
    // 请求banner
    getBanner () {
      let that = this;
      let url = 'http://ob.6cd12.cn/v1/api/hp/banner/list';
      axios.get(url).then(res => {
        // console.log(res);
        that.swiperSlides = res.data.data.banner_list;
        // console.log(that.bannerList);
      }).catch(err => {
        console.log(err);
      });
    },

    // 鼠标移入的事件
    mouseEnter () {      
      // this.swiper.autoplay.paused = true;
      // console.log("鼠标移入");
      // console.log(this.swiper.autoplay.paused);
      // this.swiper
      // this.swiper.stopAutoplay();
    },

    mouseLeave () {
      // this.swiper.autoplay.paused = false;
      // console.log("鼠标移出");
      // console.log(this.swiper);
      // this.swiper.autoplay.run();
      // this.swiper.startAutoplay();
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  created () {
    console.log(123);
    this.getBanner();
  },
  mounted () {
    // console.log(this.swiper.$el[0]);
    // this.swiper.$el[0].addEventListener('mouseenter', this.mouseEnter);
    // this.swiper.$el[0].addEventListener('mouseleave', this.mouseLeave);
  }
};
</script>


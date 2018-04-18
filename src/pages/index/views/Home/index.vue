<template>
<div>
  <div class="wrap_home clearfix">
    <div class="fl wrapleft">
      <!-- loop pic -->
      <div class="swiper_father" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
        <swiper v-if="swiperSlides.length" class="swiperBox" ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <div class="swiper_content" :key="index">{{slide.title}}</div>
            <a :href="url+'/article.html?nid='+slide.news_id" target="_blank"><img :src="slide.pic" alt="banner"></a>
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination">
          </div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
      <!-- hot label -->
      <hot-label />
      <!-- tag list -->
      <tag />
      <!-- <topic-content /> -->
    </div>
    <div class="fr wrapright">
        <a class="r_activity_img" href="http://quanlian.io/activity.html?activity_id=21">
            <img src="~&/images/r_activity.png" alt="活动推荐">
        </a>
        
        <div class="music">
            <music />
        </div>

        <news-flash />
    </div>
  </div>
</div>  
</template>

<script>
import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import axios from 'axios';
import 'swiper/dist/css/swiper.css';
import Tag from '@/components/Tag';
import Music from '@/components/Music';
import config from '@/api/config';
import HotLabel from '@/components/HotLabel';
import NewsFlash from '@/components/NewsFlash';

export default {
  data () {
    return {
      bannerList: [],
      swiperOption: {
          notNextTick: true,
          spaceBetween: 30,
          effect: 'fade',
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: {disableOnInteraction:false},
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          observer: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      swiperSlides: [],
      url: config.QUANlIAN_URL
    };
  },
  components: {
    swiper,
    swiperSlide,
    Tag,
    Music,
    HotLabel,
    NewsFlash
  },
  methods: {
    // 请求banner
    getBanner () {
      let that = this;
      let url = 'http://ob.6cd12.cn/v1/api/hp/banner/list';

      axios.get(url).then(res => {
        that.swiperSlides = res.data.data.banner_list;
        // console.log(res);
      }).catch(err => {
        console.log(err);
      });
    },

    // 鼠标移入的事件
    mouseEnter () {   
      // 鼠标移入, 暂停轮播  
      this.swiper.autoplay.pause();
    },

    mouseLeave () {
      // 鼠标移出, 开始轮播
      this.swiper.autoplay.run();
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  created () {
    this.getBanner();
  }
};
</script>

<style lang="scss">
.wrap_home {
    width: 1200px;
    // margin: 66px auto 0;
    .wrapleft {
      width: 770px;
      margin-top: 30px;
      // background: green;
      .swiper_father {
        position: relative;
        margin-bottom: 20px;
        .swiperBox {
          height: 300px;
          cursor: pointer;
          img {
            width: 100%;
            height: 300px;
          }
          .swiper_content {
            position: absolute;
            left: 39px;
            bottom: 10px;
            font-size: 25px;
            color: #fff;
            font-weight: bold;
            width: 600px;
            height: 36px;
            text-overflow : ellipsis; 
            white-space : nowrap; 
            overflow : hidden; 
          }
          .swiper-pagination {
            background: rgba(0, 0, 0, 0.2);
            text-align: right;
            width: 770px;
            height: 60px;
            line-height: 60px;
            bottom: 0;
            .swiper-pagination-bullet {
              opacity: 1;
              width: 10px;
              height: 10px;
              background: #ccc;
            }
            .swiper-pagination-bullet:last-child {
              margin-right: 20px;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              background: #ff6600;
            }
          }
        }
      }  
    }
    .wrapright {
      width: 390px;
      margin-top: 30px;
      .r_activity_img {
        img {
            width: 100%;
            margin-bottom: 20px;
            cursor: pointer;
        }
      }
      .music {
        // height: 260px;
      }
    }
  }
</style>


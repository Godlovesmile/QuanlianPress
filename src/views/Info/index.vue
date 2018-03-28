<template>
  <div class="wrap clearfix" v-scroll="loadmore">
    <!-- left -->
    <div class="fl wrapleft">
      <div class="wrapleft_crumbs">红绿灯&nbsp;&nbsp;&nbsp;动态</div>
      <div class="wrapleft_content">
        <div class="wl_content_time">
          <span>{{time}}</span>
          <img src="~img/info-two.png" alt="红绿灯图标">
        </div>
        <ul class="wl_content_list">
          <li class="item" v-for="(item, index) in items" :key="index">
            <div class="item_top">
              <!-- <img src="`~img/type-${item.flash_type}.png`" alt="不同新闻logo"> -->
              <img v-if="item.flash_type===1" src="~img/type-1.png" alt="不同新闻logo">
              <img v-else-if="item.flash_type===2" src="~img/type-2.png" alt="不同新闻logo">
              <img v-else-if="item.flash_type===3" src="~img/type-3.png" alt="不同新闻logo">
              <span>{{item.create_time}}</span>
            </div>
            <p class="item_bottom">{{item.content}}</p>
          </li>
        </ul>
      </div>
      <loading v-show="loading"/>
    </div>
    
    <!-- right -->
    <div class="fr wrapright">
      <p>热门新闻</p> 
      <p>嫩模广告位</p>  
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import scroll from '../../directives/directives';
import loading from '../../components/loading';
 
export default {
  data () {
    return { 
      time: '',
      items: [],
      loading: false,
      page: 1
    };
  },
  components: {
    loading
  },
  methods: {

    // 1.获取红绿灯信息
    getTrafficLightInfo () {
      let url = 'http://ob.6cd12.cn/v1/api/alerts/page/info';
      let _this = this;
      axios.get(url).then(res => {
        // console.log(res);
        _this.time = res.data.data.now_date;
      }).catch(error => {
        console.log(error);
      });
    },

    // 2.获取新闻信息
    getNewsList (page) {
      let url = 'http://ob.6cd12.cn/v1/api/alerts/total/list';
      let _this = this;
      axios.post(url, {
        'page': page,
      }).then(res => {
        this.loading = false;
        _this.items = _this.items.concat(res.data.data.alerts_list);
        // console.log(res);
      }).catch(error => {
        console.log(error);
      });
    },

    // 3.下拉刷新
    async loadmore () {
      if (!this.loading) {
        this.loading = true;
        // 请求下一页数据
        await this.getNewsList(this.page++);
      }
    }

  },
  created () {
    // 生命周期 已经创建 请求数据
    this.getTrafficLightInfo();
    this.getNewsList(this.page);
  }
};
</script>

<style lang="scss" scoped>
  .wrap {
    width: 1200px;
    margin: 66px auto;
    height: 100%;
    background: red;
    .wrapleft {
      width: 800px;
      .wrapleft_crumbs {
        padding-left: 10px;
        line-height: 69px;
      }
      .wrapleft_content {
        background: #fff;
        .wl_content_time {
          padding: 0 10px;
          line-height: 69px;
          border-bottom: 1px solid; 
          border-image: -webkit-linear-gradient(left, green,orange,red) 30 30 30;
          border-image: -moz-linear-gradient(left, green,orange,red) 30 30 30;
          border-image: linear-gradient(to right, green,orange,red) 30 30 30;
          img {
            width: 200px;
            vertical-align: middle;
          }
        }
        .wl_content_list {
          .item {
            padding-left: 10px;
            padding-top: 30px;
            .item_top {
              height: 50px;
              line-height: 50px;
              img {
                width: 35px;
                height: 35px;
                vertical-align: middle;
                margin-right: 10px;
              }
            }
            .item_bottom {
              color: #222;
              line-height: 25px;
              word-wrap: break-word;
              font-size: 18px;
              text-indent: 2em;
              text-align: justify;
              margin: 0 20px 0 10px;
            }
          }
        }
      }
    }
    .wrapright {
      width: 380px;
      background: #fff;
      height: 300px;
      line-height: 300px;
      text-align: center;
      margin-top: 69px;
      color: orangered;
    }
  }
</style>


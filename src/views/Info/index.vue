<template>
  <div class="wrap clearfix">
    <!-- left -->
    <div class="fl wrapleft">
      <div class="wrapleft_crumbs">红绿灯&nbsp;&nbsp;&nbsp;动态</div>
      <div class="wrapleft_content">
        <div class="wl_content_time">
          <span>{{time}}</span>
          <img src="../../../static/images/info-two.png" alt="红绿灯图标">
        </div>
        <ul class="wl_content_list">
          <li class="item" v-for="(item, index) in items" :key="index">
            <div>{{index}}</div>
            <div>{{item.content}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- right -->
    <div class="fr wrapright">热门新闻</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return { 
      time: '',
      items: []
    };
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
    getNewsList () {
      let url = 'http://ob.6cd12.cn/v1/api/alerts/total/list';
      let _this = this;
      axios.post(url, {
        'page': 1,
      }).then(res => {
        _this.items = res.data.data.alerts_list;
        // console.log(res);
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created () {
    // 生命周期 已经创建 请求数据
    // console.log(axios);
    this.getTrafficLightInfo();
    this.getNewsList();
  }
};
</script>

<style lang="scss" scoped>
  .wrap {
    width: 1200px;
    margin: 66px auto;
    .wrapleft {
      width: 800px;
      height: 300px;
      line-height: 69px;
      .wrapleft_crumbs {
        padding-left: 10px;
      }
      .wrapleft_content {
        background: #fff;
        .wl_content_time {
          padding: 0 10px;
          height: 69px;
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
          }
        }
      }
    }
    .wrapright {
      width: 380px;
      background: cyan;
      height: 300px;
    }
  }
</style>

